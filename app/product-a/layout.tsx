import './styles/product-a.css'

export default function ProductALayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="product-a-root">
      {children}
    </div>
  )
}
