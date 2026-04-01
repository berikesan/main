import './styles/product-b.css'

export default function ProductBLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="product-b-root">
      {children}
    </div>
  )
}
