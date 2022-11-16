import { Button } from "@7879/ui/Button"

export default function Web() {
  return (
    <div>
      <h1>Web</h1>
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
  ]
}
