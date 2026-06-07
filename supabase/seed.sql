-- ─── Seed Data — Istanbul Locations ─────────────────────────────────────────
-- Run after schema.sql

insert into locations (slug, title_en, title_fa, title_tr, description_en, best_time, crowd_level, outfit_suggestion, tags, image_url, estimated_duration, ideal_for)
values
  ('galata-tower',    'Galata Tower',    'برج گالاتا',    'Galata Kulesi',    'Iconic medieval tower with panoramic Bosphorus views.', 'Golden Hour (5–7 PM)', 'medium', 'Warm earth tones, deep burgundy, soft cream.',  ARRAY['historical','panoramic','luxury','iconic'], '/images/locations/galata-tower.jpg',   '2–3 hours', ARRAY['couple','tourist','editorial']),
  ('balat',           'Balat',           'بالات',          'Balat',            'Colorful historic neighborhood with charming streets.',  'Morning (8–11 AM)',    'low',    'Bold colors: red, yellow, cobalt blue.',        ARRAY['street','colorful','historical','low crowd'], '/images/locations/balat.jpg',  '2–3 hours', ARRAY['couple','tourist','social-media']),
  ('bosphorus',       'Bosphorus',       'تنگه بسفر',     'Boğaz',            'The strait connecting Europe and Asia.',               'Sunrise / Sunset',     'medium', 'White, navy, soft blue, sand beige.',           ARRAY['sea view','sunrise','sunset','romantic'], '/images/locations/bosphorus.jpg',  '2–4 hours', ARRAY['wedding','couple','drone']),
  ('ortakoy',         'Ortaköy',         'اورتاکوی',       'Ortaköy',          'Waterfront district with iconic mosque.',              'Late afternoon (4–6 PM)','medium','Blush, ivory, soft gold.',                      ARRAY['romantic','sea view','iconic'], '/images/locations/ortakoy.jpg',   '1.5–2.5 hours', ARRAY['wedding','couple','tourist']),
  ('ciragan-palace',  'Çırağan Palace',  'کاخ چراغان',    'Çırağan Sarayı',  'Opulent Ottoman palace on the Bosphorus shore.',       'Golden Hour (5–7 PM)', 'low',    'Champagne, deep gold, emerald, midnight blue.', ARRAY['luxury','palace','historical','exclusive'], '/images/locations/ciragan-palace.jpg', '2–3 hours', ARRAY['wedding','commercial','luxury']),
  ('pierre-loti',     'Pierre Loti',     'پیر لوتی',       'Pierre Loti',      'Hilltop café with sweeping Golden Horn views.',        'Sunrise or late afternoon','low', 'Earthy tones, terracotta, olive.',               ARRAY['panoramic','romantic','low crowd'], '/images/locations/pierre-loti.jpg',   '1.5–2.5 hours', ARRAY['couple','wedding','cinematic']),
  ('uskudar',         'Üsküdar',         'اوسکودار',       'Üsküdar',          'Traditional Asian side with Kız Kulesi.',             'Sunrise (6–8 AM)',      'low',    'Classic whites, soft tones.',                   ARRAY['sea view','historical','sunrise','low crowd'], '/images/locations/uskudar.jpg',  '2–3 hours', ARRAY['couple','wedding']),
  ('istiklal',        'Istiklal Street', 'خیابان استقلال', 'İstiklal Caddesi', 'Istanbul most famous boulevard.',                     'Early morning (7–9 AM)','high',   'Bold editorial looks, dark tones.',             ARRAY['street','urban','editorial'], '/images/locations/istiklal.jpg',   '1.5–2.5 hours', ARRAY['tourist','editorial','social-media']),
  ('custom',          'Custom Location', 'لوکیشن اختصاصی','Özel Konum',       'Scout any location across Istanbul.',                 'Depends on location',   'low',    'Advise after scouting.',                        ARRAY['custom','exclusive','flexible'], '/images/locations/custom.jpg', 'Flexible', ARRAY['wedding','commercial']);

-- ─── Seed Packages ─────────────────────────────────────────────────────────────
insert into packages (title, description, base_price, price_max, features, active)
values
  ('Photography Session', 'Professional photo session with edited gallery', 300, 600,  ARRAY['2-4 hours','50+ edited images','Online gallery'], true),
  ('Cinematic Video',     'Full cinematic video production',                400, 900,  ARRAY['4K footage','Cinematic grade','Licensed music'], true),
  ('Drone Footage',       'Aerial cinematography',                          200, 450,  ARRAY['Licensed drone','4K aerial','Raw + edited'], true),
  ('Social Media Reels',  'Vertical short-form video content',              150, 300,  ARRAY['3–5 reels','Platform-optimized','Same-week delivery'], true),
  ('Same-Day Teaser',     'Quick edit delivered same day',                  100, 200,  ARRAY['1-min teaser','Same-day delivery'], true),
  ('AI Visual Preview',   'AI-generated preview concept',                    50, 150,  ARRAY['AI-generated mockup','Location/style preview'], true),
  ('Extra Location',      'Add a second shooting location',                 100, 200,  ARRAY['Scout + plan','Travel included in Istanbul'], true),
  ('Extra Hour',          'Additional shooting hour',                        80, 150,  ARRAY['Flexible timing'], true);
