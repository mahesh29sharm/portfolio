import { ArrowUpRight } from 'lucide-react'
import { navItems } from '../../content/portfolio'
import { Container } from './Container'

export function SiteHeader() {
  const isHome = window.location.pathname === '/' || window.location.pathname === ''
  const homePrefix = isHome ? '' : '/'

  return (
    <header className="site-header">
      <Container className="site-header__inner">
        <a className="site-mark" href={isHome ? '#top' : '/'} aria-label="Mahesh, home">
          M<span className="site-mark__dot">.</span>
        </a>

        <nav className="site-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a key={item.href} href={`${homePrefix}${item.href}`}>
              {item.label}
            </a>
          ))}
        </nav>

        <a className="header-cta" href="mailto:hello@example.com">
          Email <ArrowUpRight size={14} strokeWidth={1.7} />
        </a>
      </Container>
    </header>
  )
}
