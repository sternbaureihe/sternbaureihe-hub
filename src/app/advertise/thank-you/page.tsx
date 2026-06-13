import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Link from 'next/link'
import styles from './page.module.css'

export default function ThankYouPage() {
  return (
    <>
      <Nav />
      <div className={styles.wrap}>
        <div className={styles.inner}>
          <div className={styles.accent} />
          <div className={styles.eyebrow}>Media Specialist</div>
          <h1 className={styles.headline}>Inquiry received.</h1>
          <p className={styles.body}>A SternBaureihe Media Specialist will respond within one business day to discuss placement, availability, and pricing.</p>
          <Link href="/" className={styles.back}>← Return to SternBaureihe</Link>
        </div>
      </div>
      <Footer />
    </>
  )
}
