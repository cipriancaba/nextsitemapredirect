import { Button } from "@7879/ui/Button"
import Link from "next/link"

export const STATIC_PAGES = {
  faq: ["faqs"],
  "contact-us": ["contact-us"],
  about: ["about-us"],
  "privacy-policy": ["privacy-policy"],
  "returns-policy": ["returns-policy"],
  "terms-and-conditions": ["terms-and-conditions"],
  investment: ["learn", "investment"],
  portfolio: ["learn", "portfolio"],
  sustainability: ["learn", "sustainability"],
  purity: ["learn", "purity"],
  pricing: ["learn", "pricing"],
  homepage: ["homepage"],
}

export default function Web({ params }: { params: any }) {
  return (
    <div>
      <Link href="/">Back home</Link>
      <h1>{JSON.stringify(params)}</h1>
      <Button test={true} />
    </div>
  )
}

export const generateStaticParams = async () => {
  const experimentPaths = [
    { slugs: ["learn", "sustainability"], variants: ["no-variant"] },
    { slugs: ["learn", "purity"], variants: ["no-variant"] },
    { slugs: ["returns-policy"], variants: ["no-variant"] },
    { slugs: ["privacy-policy"], variants: ["no-variant"] },
    { slugs: ["contact-us"], variants: ["no-variant"] },
    { slugs: ["learn", "portfolio"], variants: ["no-variant"] },
    { slugs: ["faqs"], variants: ["no-variant"] },
    { slugs: ["about-us"], variants: ["no-variant"] },
    { slugs: ["terms-and-conditions"], variants: ["no-variant"] },
    { slugs: ["learn", "pricing"], variants: ["no-variant"] },
    { slugs: ["learn", "investment"], variants: ["no-variant"] },
    { slugs: ["homepage"], variants: ["no-variant"] },
  ]

  const paths = experimentPaths.flatMap((ep) =>
    ep.variants.map((v) => ({
      dynamicSlug: ep.slugs,
      variant: v,
    }))
  )

  console.log(paths)

  return paths
}

export const dynamicParams = false // true | false,
export const revalidate = 300 // revalidate this page every 60 seconds
export const dynamic = "force-static"
