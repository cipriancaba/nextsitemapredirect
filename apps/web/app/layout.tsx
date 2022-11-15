interface UIPageProps {
  children: React.ReactNode
}

const UIPage = async (props: UIPageProps) => {
  return <div>Test{props.children}</div>
}

export default UIPage
