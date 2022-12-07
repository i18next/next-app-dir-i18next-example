import { NextRequest, NextResponse } from 'next/server';
import acceptLanguage from 'accept-language';

acceptLanguage.languages(['en', 'de']);

export const config = {
  matcher: ['/'],
};

export function middleware(req: NextRequest) {
  const lang = acceptLanguage.get(req.headers.get('Accept-Language'));

  if (req.nextUrl.pathname === '/') {
    return NextResponse.rewrite(new URL(`/${lang}`, req.url));
  }

  return NextResponse.next();
}
