// middleware.ts

import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware();

export const config = {
  matcher: [
    // run Clerk on everything except Next’s static assets, images, and favicon
    '/((?!_next/static|_next/image|favicon.ico).*)'
  ],
};
