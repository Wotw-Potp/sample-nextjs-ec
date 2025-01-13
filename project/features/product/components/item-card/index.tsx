import Image from 'next/image'
import Link from 'next/link'
import type { TProduct } from '@/features/product/types'

interface ComponentProps {
  product: TProduct
}

export default function ProductItemCard({ product }: ComponentProps) {
  return (
    <article>
      <div className="overflow-hidden">
        {product.images.length > 0 && (
          <Link href="#" className="block aspect-square">
            <Image
              src={product.images[0]}
              alt={product.name}
              width={208}
              height={208}
              className="size-full object-scale-down"
            />
          </Link>
        )}
      </div>
      <div className="space-y-2">
        <h1 className="font-bold text-slate-900">{product.name}</h1>
        <p className="text-sm text-slate-700 text-right">
          {`¥ ${product.default_price.unit_amount?.toLocaleString()}`}
        </p>
      </div>
    </article>
  )
}
