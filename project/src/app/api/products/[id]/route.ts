import { NextResponse } from "next/server"
import StripeClientProvider from "@/providers/stripeClientProvider"
import { TProduct } from "@/@types/product"

const { stripe } = StripeClientProvider()

interface ParamProps {
  params: {
    id: TProduct['id']
  }
}

export async function GET(
  request: Request,
  { params }: ParamProps
) {
  const data = await stripe.products.retrieve(params.id, { expand: ['default_price'] })

  return NextResponse.json(data)
}
