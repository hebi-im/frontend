import { NextResponse, NextRequest } from "next/server"
import { fallbackLng, languages } from "./utils/i18n/settings"

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  if (
    pathname.startsWith(`/${fallbackLng}/`) ||
    pathname === `/${fallbackLng}`
  ) {
    return
  }

  const pathnameIsMissingLocale = languages.every(
    languages =>
      !pathname.startsWith(`/${languages}/`) &&
      pathname !== `/${languages}`,
  )

  if (pathnameIsMissingLocale) {
    return NextResponse.redirect(
      new URL(`/${fallbackLng}${pathname}`, request.url),
    )
  }
}

export const config = {
  // Do not run the middleware on the following paths
  matcher: [
    "/((?!api|.*\\..*|_next/static|_next/image|manifest.json|assets|favicon.ico).*)",
  ],
}
