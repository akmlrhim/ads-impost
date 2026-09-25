import { NextResponse, type NextRequest } from "next/server";

// Root is not a landing page anymore; Klinik is the default entry.
export function proxy(request: NextRequest) {
  return NextResponse.redirect(new URL("/klinik", request.url));
}

export const config = {
  matcher: "/",
};
