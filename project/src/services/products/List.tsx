import LinkCard from "@/components/elements/card/LinkCard"
import { getProducts } from "../api/product"
import FormattedPrice from "@/components/elements/typography/FormattedPrice"

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
              <FormattedPrice value={product.default_price.unit_amount} />
            </p>
          </LinkCard>
        </li>
      ))}
    </ul>
  )
}
