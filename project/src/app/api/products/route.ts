import { NextResponse } from 'next/server'
import StripeClientProvider from '@/providers/stripeClientProvider'

const { stripe } = StripeClientProvider()

export async function GET() {
  const { data } = await stripe.products.list({
    expand: ['data.default_price'],
  })

  return NextResponse.json(data)
}
