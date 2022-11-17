import { Button } from "@7879/ui/Button"
import Link from "next/link"
import { STATIC_PAGES } from "./[variant]/[[...dynamicSlug]]/page"

export default function Web({ params }: { params: any }) {
  return (
    <div>
      HOMEPAGE
      <h1>{JSON.stringify(params)}</h1>
      <Button test={true} />
      <ul>
        {Object.values(STATIC_PAGES).map((l) => (
          <li key={l.join("/")}>
            <Link href={l.join("/")}>{l.join("/")}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
