// import { cookies } from 'next/headers';
// import { NextResponse } from 'next/server';
// import type { NextRequest } from 'next/server';

// // Middleware function
// export const middleware = async (request: NextRequest) => {
//     const cookiesStore = await cookies(); // No need to await this
//     const isloggedIn = cookiesStore.get('isloggedIn');

//     if (isloggedIn?.value === '0') {
//         return NextResponse.redirect(new URL('/login', request.url));
//     } if (
//         isloggedIn?.value === "1" && 
//     request.nextUrl.pathname === "/login") {
//         return NextResponse.redirect(new URL('/', request.url))
//     }
//     return NextResponse.next();
// };

// // Config for middleware matcher
// export const config = {
//     matcher: '/',
// };








import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware();

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};
