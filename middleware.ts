import { NextResponse, type NextRequest } from 'next/server'

/**
 * Host-based routing for The Children's Legacy microsite.
 *
 * The microsite physically lives under app/legacy/*. It is served:
 *   - In production on the legacy.lolalouiscapas.org subdomain (paths are
 *     rewritten so the public URL stays clean, e.g. legacy.../cast).
 *   - In preview/development at /legacy so the site can be viewed without
 *     access to the real subdomain.
 *
 * On the production MAIN domain the retired /legacy URL is permanently
 * redirected to its new home at /our-legacy.
 */
function isPreviewHost(host: string) {
  // Strip the port, if any, before matching.
  const name = host.split(':')[0]
  return (
    name === 'localhost' ||
    name === '127.0.0.1' ||
    name.endsWith('.vusercontent.net') ||
    name.endsWith('.v0.dev') ||
    name.endsWith('.vercel.app') ||
    name.endsWith('.vercel.run')
  )
}

export function middleware(request: NextRequest) {
  const host = (request.headers.get('host') || '').toLowerCase()
  const url = request.nextUrl.clone()
  const { pathname } = url

  // Production subdomain: rewrite clean paths onto the internal /legacy segment.
  if (host.startsWith('legacy.')) {
    if (!pathname.startsWith('/legacy')) {
      url.pathname = pathname === '/' ? '/legacy' : `/legacy${pathname}`
      return NextResponse.rewrite(url)
    }
    return NextResponse.next()
  }

  // Preview / development: let /legacy through so the microsite is viewable.
  if (isPreviewHost(host)) {
    return NextResponse.next()
  }

  // Production main domain: send the retired /legacy URL to its new home.
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
