import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'
import { NextResponse } from "next/server";
const isPublicRoute = createRouteMatcher(['/auth/sign-in(.*)', '/auth/sign-up(.*)','/']);
const isDashboardRoute = createRouteMatcher(['/dashboard(.*)']);

export default clerkMiddleware((auth, request) =>{ 
  if(!isPublicRoute(request)){
    auth().protect();
  }
  if (
    auth().userId &&
    !auth().orgId &&
    request.nextUrl.pathname !== "/auth/create-organization"
  ) {
    const orgSelection = new URL("/auth/create-organization", request.url);
    return NextResponse.redirect(orgSelection);
  }
  if (
    auth().userId &&
    auth().orgId &&
    isPublicRoute(request)
  ) {
    const orgSelection = new URL("/dashboard", request.url);
    return NextResponse.redirect(orgSelection);
  }

 
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
}