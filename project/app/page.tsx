import ProductItemList from '@/features/product/components/item-list'
import { Suspense } from 'react'

export default function Home() {
  return (
    <>
      <section className="pt-12 pb-20">
        <div className="px-10 mx-auto">
          <h2 className="text-2xl font-bold">Item List</h2>
          <div className="mt-5">
            <Suspense fallback={<div>Loading...</div>}>
              <ProductItemList />
            </Suspense>
          </div>
        </div>
      </section>
    </>
  )
}
