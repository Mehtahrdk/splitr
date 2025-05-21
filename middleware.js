// middleware.ts

import { clerkMiddleware,createRouteMatcher } from "@clerk/nextjs/server";
import{ NextResponse }from "next/server";

const isProtectedRoute = createRouteMatcher([
  "/dashboard(.*)",
  "/expenses(.*)",
  "/groups(.*)",
  "/contacts(.*)",
  "/person(.*)",
  "/settlements(.*)",
]);

export default clerkMiddleware(async(auth,req)=>{

  const {UserId} = await auth()

  if(!UserId && isProtectedRoute(req))
  {
    const { redirectToSignIn }=await auth();

    return redirectToSignIn();
  }
  return NextResponse.next();
});

export const config = {
  matcher: [
    // run Clerk on everything except Next’s static assets, images, and favicon
    '/((?!_next/static|_next/image|favicon.ico).*)'
  ],
};
