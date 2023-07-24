import type { TProduct } from "@/@types/product"
import LinkCard from "@/components/elements/card/LinkCard"

const appUrl = process.env.NEXT_PUBLIC_APP_URL ?? ''

async function getProducts(): Promise<TProduct[]> {
  return await fetch(`${appUrl}/api/products`).then((res) => res.json())
}

export default async function ProductList() {
  const products = await getProducts()

  if (!products) return (<div>no products found.</div>)

  return (
    <ul className="grid grid-cols-3 gap-6">
      {products.map((product) => (
        <li key={product.id}>
          <LinkCard
            title={product.name}
            image={product.images[0]}
            url={`/products/${product.id}`}
          >
            <p className="text-sm text-slate-600 text-right">
              {`¥ ${product.default_price.unit_amount.toLocaleString()}`}
            </p>
          </LinkCard>
        </li>
      ))}
    </ul>
  )
}
