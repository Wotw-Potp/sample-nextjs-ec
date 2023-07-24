import { NextRequest, NextResponse } from "next/server"
import StripeClientProvider from "@/providers/stripeClientProvider"

const { stripe } = StripeClientProvider()

const appUrl = process.env.NEXT_PUBLIC_APP_URL ?? ''

export async function POST(req: NextRequest) {
  const formData = await req.formData()
  const priceId = formData.get('price_id')

  const session = await stripe.checkout.sessions.create({
    mode: 'payment',
    line_items: [{
      price: priceId?.toString(),
      quantity: 1,
    }],
    success_url: `${appUrl}`,
    cancel_url: `${appUrl}`,
  })

  if (!session || !session.url) return NextResponse.error()

  return NextResponse.redirect(session.url, {
    status: 301,
  })
}
