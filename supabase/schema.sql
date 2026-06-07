-- ─── Tavakoli Studio — Supabase Schema ───────────────────────────────────────
-- Run this in Supabase SQL Editor to create all tables.

-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- ─── Users / Profiles ─────────────────────────────────────────────────────────
create table if not exists profiles (
  id         uuid primary key references auth.users on delete cascade,
  email      text unique not null,
  role       text not null default 'client' check (role in ('admin', 'client')),
  created_at timestamptz not null default now()
);

alter table profiles enable row level security;
create policy "Users can view own profile" on profiles for select using (auth.uid() = id);
create policy "Admin can view all profiles" on profiles for all using (
  exists (select 1 from profiles where id = auth.uid() and role = 'admin')
);

-- ─── Leads ────────────────────────────────────────────────────────────────────
create table if not exists leads (
  id                uuid primary key default uuid_generate_v4(),
  full_name         text not null,
  whatsapp          text not null,
  email             text not null,
  project_type      text not null,
  selected_location text not null,
  selected_style    text not null,
  budget_range      text not null,
  preferred_date    text,
  notes             text,
  status            text not null default 'new'
    check (status in ('new', 'contacted', 'booked', 'completed', 'lost')),
  created_at        timestamptz not null default now()
);

alter table leads enable row level security;
-- Anyone can insert (public booking form)
create policy "Anyone can create lead" on leads for insert with check (true);
-- Only admin can read/update/delete
create policy "Admin can manage leads" on leads for all using (
  exists (select 1 from profiles where id = auth.uid() and role = 'admin')
);

-- ─── Locations ────────────────────────────────────────────────────────────────
create table if not exists locations (
  id              uuid primary key default uuid_generate_v4(),
  slug            text unique not null,
  title_en        text not null,
  title_fa        text,
  title_tr        text,
  description_en  text,
  description_fa  text,
  description_tr  text,
  best_time       text,
  crowd_level     text check (crowd_level in ('low', 'medium', 'high')),
  outfit_suggestion text,
  tags            text[] default '{}',
  image_url       text,
  estimated_duration text,
  ideal_for       text[] default '{}',
  active          boolean default true,
  created_at      timestamptz not null default now()
);

alter table locations enable row level security;
create policy "Anyone can read locations" on locations for select using (active = true);
create policy "Admin can manage locations" on locations for all using (
  exists (select 1 from profiles where id = auth.uid() and role = 'admin')
);

-- ─── AI Preview Requests ──────────────────────────────────────────────────────
create table if not exists ai_preview_requests (
  id         uuid primary key default uuid_generate_v4(),
  full_name  text not null,
  email      text not null,
  whatsapp   text,
  location   text,
  style      text,
  image_urls text[] default '{}',
  status     text not null default 'pending'
    check (status in ('pending', 'processing', 'done')),
  created_at timestamptz not null default now()
);

alter table ai_preview_requests enable row level security;
create policy "Anyone can create ai request" on ai_preview_requests for insert with check (true);
create policy "Admin can manage ai requests" on ai_preview_requests for all using (
  exists (select 1 from profiles where id = auth.uid() and role = 'admin')
);

-- ─── Galleries ────────────────────────────────────────────────────────────────
create table if not exists galleries (
  id           uuid primary key default uuid_generate_v4(),
  title        text not null,
  client_email text not null,
  cover_image  text,
  status       text not null default 'draft'
    check (status in ('draft', 'active', 'archived')),
  created_at   timestamptz not null default now()
);

alter table galleries enable row level security;
create policy "Client can view own gallery" on galleries for select using (
  client_email = (select email from profiles where id = auth.uid())
);
create policy "Admin can manage galleries" on galleries for all using (
  exists (select 1 from profiles where id = auth.uid() and role = 'admin')
);

-- ─── Gallery Images ───────────────────────────────────────────────────────────
create table if not exists gallery_images (
  id          uuid primary key default uuid_generate_v4(),
  gallery_id  uuid not null references galleries on delete cascade,
  image_url   text not null,
  is_favorite boolean default false,
  client_note text,
  created_at  timestamptz not null default now()
);

alter table gallery_images enable row level security;
create policy "Client can view and update own gallery images" on gallery_images
  for all using (
    gallery_id in (
      select id from galleries
      where client_email = (select email from profiles where id = auth.uid())
    )
  );
create policy "Admin can manage gallery images" on gallery_images for all using (
  exists (select 1 from profiles where id = auth.uid() and role = 'admin')
);

-- ─── Packages ─────────────────────────────────────────────────────────────────
create table if not exists packages (
  id          uuid primary key default uuid_generate_v4(),
  title       text not null,
  description text,
  base_price  integer,
  price_max   integer,
  features    text[] default '{}',
  active      boolean default true,
  created_at  timestamptz not null default now()
);

alter table packages enable row level security;
create policy "Anyone can read packages" on packages for select using (active = true);
create policy "Admin can manage packages" on packages for all using (
  exists (select 1 from profiles where id = auth.uid() and role = 'admin')
);
