import Link from 'next/link'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <span className={styles.wordmark}>SternBaureihe</span>
      <ul className={styles.links}>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/archive">Archive</Link></li>
        <li><Link href="/contact">Contact</Link></li>
        <li><Link href="/newsletter">Newsletter</Link></li>
        <li><Link href="/advertise">Advertise</Link></li>
      </ul>
    </footer>
  )
}
