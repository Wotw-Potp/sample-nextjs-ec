import type { Stripe } from 'stripe'

export interface TProduct extends Stripe.Product {
  default_price: Stripe.Price
}
