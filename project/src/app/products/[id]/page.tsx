import type { TProduct } from "@/@types/product"

const appUrl = process.env.NEXT_PUBLIC_APP_URL ?? ''

interface PageProps {
  params: {
    id: TProduct['id']
  }
}

export default async function Product({ params }: PageProps) {
  const product = await getProduct(params.id)

  return (
    <main>
      <section>
        <div className="container mx-auto">
          <h1 className="text-2xl font-bold mb-2">Product Detail</h1>
          <article className="py-8">
            <div className="flex gap-8 mb-10">
              <div className="grow">
                <div className="p-4 bg-white rounded font-bold mb-4">{`¥ ${product.default_price.unit_amount.toLocaleString()}`}</div>
                <h2 className="text-3xl font-bold pb-2 border-b border-slate-200 mb-4">{product.name}</h2>
                <p className="leading-relaxed">{product.description}</p>
              </div>
              <div className="basis-1/3 shrink-0">
                <picture>
                  <img src={product.images[0]} alt={product.name} width={400} />
                </picture>
              </div>
            </div>
            <div>
              <form
                method="POST"
                action="/api/checkout"
                className="text-center"
              >
                <input type="hidden" name="price_id" value={product.default_price.id} readOnly />
                <button
                  type="submit"
                  className="inline-flex justify-center items-baseline gap-4 px-8 py-4 rounded-md bg-blue-600 text-white font-bold min-w-[20ch] hover:bg-opacity-80">
                  <span>購入する</span>
                  <span className="text-xl">{`¥ ${product.default_price.unit_amount.toLocaleString()}`}</span>
                </button>
              </form>
            </div>
          </article>
        </div>
      </section>
    </main>
  )
}

async function getProduct(id: string): Promise<TProduct> {
  return await fetch(`${appUrl}/api/products/${id}`).then((res) => res.json())
}
