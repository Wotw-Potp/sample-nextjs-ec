import { Suspense } from "react"
import Loading from "./loading"
import ProductList from "@/services/products/List"

export default function Home() {
  return (
    <main>
      <section>
        <div className="container mx-auto">
          <h1 className="text-2xl font-bold mb-2">Products</h1>
          <Suspense fallback={<Loading />}>
            <ProductList />
          </Suspense>
        </div>
      </section>
    </main>
  )
}
