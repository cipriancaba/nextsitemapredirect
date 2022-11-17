import type { NextRequest } from "next/server"
import { NextResponse } from "next/server"

const THIRTY_DAYS = 1000 * 60 * 24 * 30

export function middleware(request: NextRequest) {
  console.log("---", request.nextUrl.pathname)

  // console.log(request)

  if (request.nextUrl.pathname.endsWith(".rsc")) {
    return NextResponse.next()
  }

  const url = request.nextUrl
  let variantPathnameKey = url.pathname === "/" ? "/homepage" : url.pathname

  let productSlug
  let sku

  if (variantPathnameKey.startsWith("/shop")) {
    variantPathnameKey = !!productSlug ? "/shop/product" : "/shop"
  } else if (variantPathnameKey.startsWith("/collections")) {
    variantPathnameKey = "/collections"
  } else if (variantPathnameKey === "/articles") {
    variantPathnameKey = "/articles"
  } else if (variantPathnameKey.startsWith("/articles")) {
    variantPathnameKey = "/articles/slug"
  }

  if (true) {
    const pageVariants = ["no-variant"]
    const COOKIE_NAME = `7879_AB_TESTING_${variantPathnameKey}`
    const SEED_NAME = `7879_SEED`
    const cookie = request.cookies.get(COOKIE_NAME)
    const cookieSeed = request.cookies.get(SEED_NAME)

    // Path looks like seed.seed2.0;exp.3vFqTWfbQQi8-s_MiE8i-g.0
    const variantPath = "no-variant"

    console.log("middleware", variantPath, cookie?.value, cookieSeed?.value)

    if (variantPath) {
      console.log("before replace", url.pathname)
      if (url.pathname === "/") {
        url.pathname = `/${variantPath}/homepage`
      } else {
        url.pathname = url.pathname.replace("/", `/${variantPath}/`)
      }
      console.log("after replace", url.pathname)

      if (!sku && url.search) {
        // ?variant=exp.experiment_id_for_pdp.0&slug=gold&slug=rings&slug=wide-ring&slug=ss21-r07-8-g&sku=ss21-r07-8-g
        console.log("has url search", url.search)
        const parts = url.search.replace("?", "").split("&")
        const urlSku = parts.find((part) => part.includes("sku="))
        if (urlSku) {
          url.pathname += urlSku.replace("sku=", "/")
        }
      }

      if (url.pathname.endsWith("/")) {
        url.pathname = url.pathname.substring(0, url.pathname.length - 1)
      }

      console.log("rewrite", url.pathname)
      const response = NextResponse.rewrite(new URL(url.pathname, request.url))
      // This condition is added to avoid bumping cookie on every prefetch
      if (request.headers.get("accept")?.includes("text/html")) {
        response.cookies.set(SEED_NAME, "1", {
          maxAge: THIRTY_DAYS,
        })
        if (!cookie || variantPath !== cookie?.value) {
          response.cookies.set(COOKIE_NAME, variantPath, {
            maxAge: THIRTY_DAYS,
          })
        }
      }

      console.log("Return ====>", url.pathname, url.searchParams)
      return response
    }
  }
  return NextResponse.next()
}

export const config = {
  matcher: [
    "/products/:slug*",
    // '/',
    "/shop/:slug*",
    "/shop",
    "/collections/:slug*",
    "/collections",
    "/articles/:slug*",
    "/articles",
    "/faqs",
    "/contact-us",
    "/about-us",
    "/privacy-policy",
    "/returns-policy",
    "/terms-and-conditions",
    "/learn/investment",
    "/learn/portfolio",
    "/learn/sustainability",
    "/learn/purity",
    "/learn/pricing",
    "/homepage",
  ],
}
