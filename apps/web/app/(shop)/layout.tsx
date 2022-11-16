interface UIPageProps {
  children: React.ReactNode
}

const UIPage = async (props: UIPageProps) => {
  return <div>Shop{props.children}</div>
}

export default UIPage
