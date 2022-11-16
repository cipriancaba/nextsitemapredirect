import type { NextRequest } from "next/server"
import { NextResponse } from "next/server"

const THIRTY_DAYS = 1000 * 60 * 24 * 30

export function middleware(request: NextRequest) {
  console.log("---", request.nextUrl.pathname)
  console.log(request.headers)

  const url = request.nextUrl

  const SEED_NAME = `ab_test`
  const cookieSeed = request.cookies.get(SEED_NAME)

  if (cookieSeed?.value) {
    url.pathname = url.pathname.replace("/", `/${cookieSeed.value}/`)
    const response = NextResponse.rewrite(url)
    // if (url.pathname.endsWith("/")) {
    //   url.pathname = url.pathname.substring(0, url.pathname.length - 1)
    // }
    return response
  } else {
    const response = NextResponse.rewrite(url)

    response.cookies.set(SEED_NAME, "0", {
      maxAge: THIRTY_DAYS,
    })

    // if (url.pathname.endsWith("/")) {
    //   url.pathname = url.pathname.substring(0, url.pathname.length - 1)
    // }
    return response
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/"],
}
