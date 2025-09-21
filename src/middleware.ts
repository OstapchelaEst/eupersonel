import createMiddleware from 'next-intl/middleware'
import { NextRequest, NextResponse } from 'next/server'
import { Locale, routing } from '../i18n/routing'

const supportedLocales = routing.locales
const defaultLocale = routing.defaultLocale

const intlMiddleware = createMiddleware(routing)

export default function middleware(req: NextRequest) {
  const url = new URL(req.url)
  const pathLocale = url.pathname.split('/')[1] as Locale

  if (pathLocale.includes('api')) return intlMiddleware(req)

  if (pathLocale && !supportedLocales.includes(pathLocale)) {
    url.pathname = `/${defaultLocale}${url.pathname}`
    return NextResponse.redirect(url)
  }

  return intlMiddleware(req)
}

export const config = {
  matcher: ['/((?!_next|.*\\..*).*)'],
}
