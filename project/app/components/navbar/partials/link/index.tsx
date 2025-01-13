import Link from 'next/link'

interface ComponentProps {
  href: string
  title: string
  active: boolean
}

export default function NavbarLink({ active, href, title }: ComponentProps) {
  return (
    <Link
      href={href}
      className={`text-sm font-bold capitalize ${
        active
          ? 'text-slate-600 underline underline-offset-4'
          : 'text-slate-900 hover:opacity-75'
      }`}
    >
      {title}
    </Link>
  )
}
