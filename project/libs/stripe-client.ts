import { Stripe } from 'stripe'

export const stripe = new Stripe(process.env.STRIPE_API_KEY_SECRET || '', {
  apiVersion: '2024-12-18.acacia',
  maxNetworkRetries: 2,
})
