import Link from "next/link"
import { PropsWithChildren } from "react"

interface ComponentProps {
  title: string
  image: string
  url: string
}

export default function LinkCard({
  title,
  image,
  url,
  children
}: PropsWithChildren<ComponentProps>) {
  return (
    <Link href={url} className="block shadow bg-white transition-shadow hover:shadow-lg">
      <div className="aspect-video overflow-hidden">
        <picture>
          <img
            src={image}
            alt={title}
            width={300}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover object-center"
          />
        </picture>
      </div>
      <div className="p-5 space-y-3">
        <div className="text-lg font-bold">{title}</div>
        {children}
      </div>
    </Link>
  )
}
