import NavbarLink from './partials/link'

export default function Navbar() {
  return (
    <header>
      <div className="px-10">
        <div className="flex justify-between items-center py-4">
          <div>LOGO</div>
          <nav>buttons</nav>
        </div>
        <nav className="border-y border-slate-900 py-3">
          <ul className="flex justify-center gap-5">
            <li>
              <NavbarLink active={true} href="/" title="Home" />
            </li>
            <li>
              <NavbarLink active={false} href="/items" title="All Items" />
            </li>
            <li>
              <NavbarLink active={false} href="/about" title="About" />
            </li>
            <li>
              <NavbarLink active={false} href="/contact" title="Contact" />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
