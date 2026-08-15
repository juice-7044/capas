import { NextResponse, type NextRequest } from 'next/server'

/**
 * Host-based routing.
 *
 * - legacy.lolalouiscapas.org  -> serves The Children's Legacy production
 *   microsite, which physically lives under app/legacy/*. Requests are
 *   rewritten (URL stays clean on the subdomain).
 * - lolalouiscapas.org / www.* -> the normal site. The old /legacy URL is
 *   permanently redirected to /our-legacy, and the microsite paths are kept
 *   off the main domain.
 */
export function middleware(request: NextRequest) {
  const host = (request.headers.get('host') || '').toLowerCase()
  const url = request.nextUrl.clone()
  const { pathname } = url

  const isLegacyHost = host.startsWith('legacy.')

  if (isLegacyHost) {
    // Rewrite the public path onto the internal /legacy segment.
    if (!pathname.startsWith('/legacy')) {
      url.pathname = pathname === '/' ? '/legacy' : `/legacy${pathname}`
      return NextResponse.rewrite(url)
    }
    return NextResponse.next()
  }

  // Main host: send the retired /legacy URL to its new home.
  if (pathname === '/legacy' || pathname.startsWith('/legacy/')) {
    url.pathname = '/our-legacy'
    url.search = ''
    return NextResponse.redirect(url, 308)
  }

  return NextResponse.next()
}

export const config = {
  // Skip Next internals, API routes, and static assets.
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|images|.*\\..*).*)'],
}
