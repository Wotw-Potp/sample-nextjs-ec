import { getProducts } from '@/features/product/services'
import ProductItemCard from '@/features/product/components/item-card'

export default async function ProductItemList() {
  const { data: products } = await getProducts()

  return (
    <div className="grid grid-cols-4 gap-4">
      {products.map((product) => (
        <div key={product.id}>
          <ProductItemCard product={product} />
        </div>
      ))}
    </div>
  )
}
