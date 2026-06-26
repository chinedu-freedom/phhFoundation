import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

const SECRET = new TextEncoder().encode(
  process.env.JWT_SECRET || "phhfoundation-default-fallback-secret-key-12345"
);

export async function middleware(request) {
  const { pathname } = request.nextUrl;

  // Protect admin routes
  if (pathname.startsWith("/admin")) {
    const sessionCookie = request.cookies.get("session")?.value;

    if (!sessionCookie) {
      // Redirect to login
      const url = request.nextUrl.clone();
      url.pathname = "/login";
      url.searchParams.set("callbackUrl", pathname);
      return NextResponse.redirect(url);
    }

    try {
      const { payload } = await jwtVerify(sessionCookie, SECRET, {
        algorithms: ["HS256"],
      });

      if (payload.role !== "ADMIN") {
        // Not authorized, redirect to home page
        const url = request.nextUrl.clone();
        url.pathname = "/";
        return NextResponse.redirect(url);
      }
    } catch (error) {
      // Invalid session, redirect to login
      const url = request.nextUrl.clone();
      url.pathname = "/login";
      url.searchParams.set("callbackUrl", pathname);
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
