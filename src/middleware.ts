import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware(routing);

export const config = {
  // Match all pathnames except for:
  //  - Next.js internals (api, _next, _vercel)
  //  - Metadata files Next.js generates at the root (robots, sitemap, OG images)
  //  - Files containing a dot (e.g. favicon.ico, images)
  matcher: [
    '/((?!api|_next|_vercel|robots|sitemap|opengraph-image|twitter-image|manifest|icon|apple-icon|.*\\..*).*)',
  ],
};
