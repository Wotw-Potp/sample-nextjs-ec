import Stripe from 'stripe'

const stripeApiPublicKey = process.env.STRIPE_API_KEY_SECRET ?? ''

export default function StripeClientProvider() {
  const stripe = new Stripe(stripeApiPublicKey, {
    apiVersion: '2023-08-16',
    maxNetworkRetries: 3,
  })

  return { stripe }
}
