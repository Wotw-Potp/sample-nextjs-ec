'use server'

import { stripe } from '@/libs/stripe-client'
import { TProduct } from '../types'
import Stripe from 'stripe'

export async function getProducts() {
  return (await stripe.products.list({
    expand: ['data.default_price'],
  })) as Stripe.Response<Stripe.ApiList<TProduct>>
}
