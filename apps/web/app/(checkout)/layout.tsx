interface UIPageProps {
  children: React.ReactNode
}

const UIPage = async (props: UIPageProps) => {
  return <div>Checkout layout{props.children}</div>
}

export default UIPage
