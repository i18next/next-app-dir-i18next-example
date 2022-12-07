import { NextRequest, NextResponse } from 'next/server'
import acceptLanguage from 'accept-language'
import { fallbackLng, languages } from './app/i18n/settings'

acceptLanguage.languages(languages)

export const config = {
  matcher: ['/']
}

export function middleware(req: NextRequest) {
  let lng
  if (!lng) lng = acceptLanguage.get(req.headers.get('Accept-Language'))
  if (!lng) lng = fallbackLng

  if (req.nextUrl.pathname === '/') {
    return NextResponse.redirect(new URL(`/${lng}`, req.url))
  }

  return NextResponse.next()
}