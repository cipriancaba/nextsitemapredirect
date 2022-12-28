import { Button } from "@7879/ui/Button"

export default function Web({ params }: { params: any }) {
  return (
    <div>
      HOMEPAGE
      <h1>{JSON.stringify(params)}</h1>
      <Button test={true} />
    </div>
  )
}
