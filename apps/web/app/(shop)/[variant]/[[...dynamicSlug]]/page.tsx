import { Button } from "@7879/ui/Button"

export default function Web({ params }: { params: any }) {
  return (
    <div>
      <h1>{JSON.stringify(params)}</h1>
      <Button test={true} />
    </div>
  )
}

export const generateStaticParams = async () => {
  return [
    {
      variant: "0",
      dynamicSlug: [],
    },
    {
      variant: "1",
      dynamicSlug: [],
    },
    {
      variant: "no-variant",
      dynamicSlug: ["about-us"],
    },
  ]
}
