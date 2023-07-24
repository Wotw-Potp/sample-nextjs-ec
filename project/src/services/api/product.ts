import { TProduct } from "@/@types/product"

const appUrl = process.env.NEXT_PUBLIC_APP_URL ?? ''

async function getProducts(): Promise<TProduct[]> {
  return await fetch(`${appUrl}/api/products`).then((res) => res.json())
}

async function getProduct(id: string): Promise<TProduct> {
  return await fetch(`${appUrl}/api/products/${id}`).then((res) => res.json())
}

export {
  getProducts,
  getProduct,
}
