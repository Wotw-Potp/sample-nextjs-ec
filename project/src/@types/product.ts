import type { TPrice } from "./price"

export type TProduct = {
  id: string
  active: boolean
  attributes: []
  created: number
  default_price: TPrice
  description: string
  images: string[]
  metadata: {}
  name: string
  updated: number
}
