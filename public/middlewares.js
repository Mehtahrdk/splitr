// middleware.ts (or src/middleware.ts)

import { clerkMiddleware } from "@clerk/nextjs/server";


// These routes (everything except static assets) will run through Clerk’s middleware
export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};
export default clerkMiddleware();
