import type { NextRequest } from "next/server"
import { NextResponse } from "next/server"

const THIRTY_DAYS = 1000 * 60 * 24 * 30

export function middleware(request: NextRequest) {
  console.log("---", request.nextUrl.pathname)

  // console.log(request)

  return NextResponse.next()
}

export const config = {
  matcher: ["/"],
}
