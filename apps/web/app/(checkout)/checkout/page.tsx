"use client"
import { useSearchParams } from "next/navigation"
import { Button } from "@7879/ui/Button"

export default function Web() {
  const query = useSearchParams()
  console.log(query.getAll("slug"))
  return (
    <div>
      <h1>Checkout</h1>
      <Button test={true} />
    </div>
  )
}

export const dynamicParams = false // true | false,
export const revalidate = 60 // revalidate this page every 60 seconds
export const dynamic = "force-static"
