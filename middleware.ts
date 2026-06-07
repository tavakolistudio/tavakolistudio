import createMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";

const intlMiddleware = createMiddleware({
  locales: ["en", "tr", "fa"],
  defaultLocale: "en",
  localePrefix: "always",
});

// App routes that bypass i18n middleware
const APP_ROUTES = [
  "/planner",
  "/locations",
  "/ai-preview",
  "/pose-coach",
  "/budget-calculator",
  "/booking",
  "/gallery-login",
  "/admin",
  "/client",
];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip i18n for app routes
  if (APP_ROUTES.some((route) => pathname === route || pathname.startsWith(route + "/"))) {
    return NextResponse.next();
  }

  return intlMiddleware(request);
}

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*) "],
};
