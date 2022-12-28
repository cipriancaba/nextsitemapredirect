import { Button } from "@7879/ui/Button"
import Link from "next/link"

export default function Web({ params }: { params: any }) {
  return (
    <div>
      HOMEPAGE
      <h1>{JSON.stringify(params)}</h1>
      <Button test={true} />
    </div>
  )
}
