import { NextRequest, NextResponse, userAgent } from "next/server";

export default async function middleware(request: NextRequest) {
  const { device } = userAgent(request);
  const viewport = device.type === "mobile" ? "mobile" : "desktop";

  // Clone the request headers
  const headers = new Headers(request.headers);
  headers.set("x-viewport", viewport);

  // Create a new response with the modified headers
  const response = NextResponse.next({
    request: {
      headers: headers,
    },
  });

  return response;
}
