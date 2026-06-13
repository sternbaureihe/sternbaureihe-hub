'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from './Nav.module.css'

const links = [
  { href: '/chassis', label: 'Chassis' },
  { href: '/models', label: 'Models' },
  { href: '/documentation', label: 'Documentation' },
  { href: '/articles', label: 'Articles' },
  { href: '/parts', label: 'Parts' },
  { href: '/classifieds', label: 'Classifieds' },
  { href: '/archive', label: 'Archive' },
  { href: '/about', label: 'About' },
  { href: '/advertise', label: 'Advertise' },
]

export default function Nav() {
  const pathname = usePathname()

  return (
    <nav className={styles.nav}>
      <ul className={styles.links}>
        {links.map(link => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={`${styles.link} ${pathname === link.href ? styles.active : ''}`}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
      <div className={styles.right}>
        <svg
          className={styles.search}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          aria-label="Search"
        >
          <circle cx="10.5" cy="10.5" r="6.5" />
          <path d="M15.5 15.5L20 20" />
        </svg>
      </div>
    </nav>
  )
}
