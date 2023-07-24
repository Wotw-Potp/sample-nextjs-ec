import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="fixed z-30 top-0 left-0 right-0 bg-white shadow-md">
      <div className="px-10 py-4">
        <Link href="/">Next.js Sample EC with Stripe</Link>
      </div>
    </nav>
  )
}
