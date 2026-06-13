import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import AdZone from '@/components/AdZone'
import { featuredChassis, chassisData } from '@/data/chassis'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'SternBaureihe — Mercedes-Benz Chassis Authority',
  description:
    'Technical reference platform for Mercedes-Benz chassis. Factory specifications, engineering documentation, and primary source data across 100+ chassis codes.',
  openGraph: {
    title: 'SternBaureihe — Mercedes-Benz Chassis Authority',
    description:
      'Factory specifications, engineering documentation, and primary source data across 100+ Mercedes-Benz chassis codes.',
    images: [{ url: '/og/sternbaureihe-og-homepage.jpg', width: 1200, height: 630 }],
  },
}

const recentArticles = [
  { date: 'Jun 2025', title: 'Cylinder Head Failure Modes: Factory Tolerance Margins and Documented Remediation', chassis: 'E-Class · C-Class', href: '/articles/cylinder-head-failure-modes' },
  { date: 'May 2025', title: 'Air Suspension System Architecture and Primary Source Diagnosis Procedures', chassis: 'S-Class', href: '/articles/air-suspension-diagnosis' },
  { date: 'May 2025', title: 'V8 Roadster Specification Comparison and Production Data', chassis: 'SL-Class', href: '/articles/sl-v8-comparison' },
  { date: 'Apr 2025', title: 'Classic S-Class Restoration: OEM-Equivalent Parts Sourcing and Supersession Documentation', chassis: 'S-Class', href: '/articles/s-class-restoration-parts' },
]

export default function HomePage() {
  return (
    <>
      <Nav />

      {/* HERO — video capable, wordmark overlay */}
      <section className={styles.hero}>
        {process.env.NEXT_PUBLIC_HERO_VIDEO_URL && (
          <video
            className={styles.heroVideo}
            autoPlay
            muted
            loop
            playsInline
            poster="/images/hero/sternbaureihe-hero-homepage-poster.jpg"
          >
            <source src={process.env.NEXT_PUBLIC_HERO_VIDEO_URL} type="video/mp4" />
          </video>
        )}
        {/* Fallback image */}
        <div
          className={styles.heroBg}
          style={{
            backgroundImage: 'url(/images/hero/sternbaureihe-hero-homepage.jpg)',
          }}
        />
        <div className={styles.heroOverlay} />
        <div className={styles.heroWordmark}>
          <span className={styles.heroWordmarkText}>SternBaureihe</span>
          <span className={styles.heroWordmarkSub}>Mercedes-Benz Chassis Authority</span>
        </div>
      </section>

      {/* STAT ROW */}
      <div className={styles.statRow}>
        <div className={styles.statCell}>
          <span className={styles.statNum}>Primary</span>
          <span className={styles.statLabel}>Source Documentation Only</span>
        </div>
        <div className={styles.statCell}>
          <span className={styles.statNum}>Factory</span>
          <span className={styles.statLabel}>Specifications & Engineering Data</span>
        </div>
        <div className={styles.statCell}>
          <span className={styles.statNum}>100+</span>
          <span className={styles.statLabel}>Chassis Documented</span>
        </div>
      </div>

      {/* CHASSIS INDEX */}
      <div className={styles.sectionHeader}>
        <span className={styles.sectionTitle}>Chassis Index</span>
        <Link href="/chassis" className={styles.sectionLink}>View all →</Link>
      </div>

      <div className={styles.chassisGrid}>
        {featuredChassis.slice(0, 4).map(chassis => (
          <a
            key={chassis.code}
            href={`https://${chassis.domain}`}
            className={styles.chassisCard}
            target="_blank"
            rel="noopener"
          >
            <div className={styles.chassisThumb}>
              <img
                src={`/images/chassis/${chassis.code.toLowerCase()}-card.jpg`}
                alt={`Mercedes-Benz ${chassis.code} ${chassis.name} — technical reference`}
                className={styles.chassisImg}
                loading="lazy"
              />
              <span className={styles.chassisCode}>{chassis.code}</span>
            </div>
            <div className={styles.chassisInfo}>
              <span className={styles.chassisName}>{chassis.code}</span>
              <span className={styles.chassisYears}>{chassis.years} · {chassis.class}</span>
              <div className={styles.chassisMeta}>
                {chassis.bodies.slice(0, 3).map(b => (
                  <span key={b} className={styles.chassisTag}>{b}</span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* AD STRIP — leaderboard */}
      <div className={styles.adStrip}>
        <span className={styles.adStripLabel}>Sponsored</span>
        <div className={styles.adStripRule} />
        <AdZone zoneId={1} width={728} height={90} label="Leaderboard" />
      </div>

      {/* DOCUMENTATION */}
      <div className={styles.sectionHeader}>
        <span className={styles.sectionTitle}>Documentation</span>
        <Link href="/documentation" className={styles.sectionLink}>Browse archive →</Link>
      </div>

      <div className={styles.docGrid}>
        {[
          { type: 'Workshop Manual', title: 'Complete Service Documentation — Classic E-Class', body: 'Factory workshop manual covering all inline-6 and V8 engine variants. Electrical diagrams included.', href: '/documentation/e-class-workshop-manual' },
          { type: 'Parts Reference', title: 'Classic S-Class Genuine Parts Catalog', body: 'Complete OEM parts reference with supersession chains and interchangeability data across all production years.', href: '/documentation/s-class-parts-catalog' },
          { type: 'Technical Bulletin', title: 'V8 Engine Technical Reference', body: 'Engineering specifications, service intervals, known failure modes, and factory tolerance data.', href: '/documentation/v8-technical-reference' },
        ].map(doc => (
          <Link key={doc.href} href={doc.href} className={styles.docCard}>
            <span className={styles.docType}>{doc.type}</span>
            <p className={styles.docTitle}>{doc.title}</p>
            <p className={styles.docBody}>{doc.body}</p>
            <span className={styles.docArrow}>→</span>
          </Link>
        ))}
      </div>

      {/* ARTICLES */}
      <div className={styles.sectionHeader}>
        <span className={styles.sectionTitle}>Latest Articles</span>
        <Link href="/articles" className={styles.sectionLink}>All articles →</Link>
      </div>

      <div className={styles.articleList}>
        {recentArticles.map(article => (
          <Link key={article.href} href={article.href} className={styles.articleRow}>
            <div className={styles.articleDate}>{article.date.split(' ').join('\n')}</div>
            <div className={styles.articleTitle}>{article.title}</div>
            <div className={styles.articleChassis}>{article.chassis}</div>
          </Link>
        ))}
      </div>

      {/* NEWSLETTER */}
      <section className={styles.newsletter}>
        <div>
          <div className={styles.nlAccent} />
          <p className={styles.nlEyebrow}>Technical Dispatch</p>
          <h2 className={styles.nlHeadline}>Documentation updates and chassis research, direct.</h2>
          <p className={styles.nlBody}>No editorial. No roundups. When new technical documentation is added to the archive, we send it.</p>
        </div>
        <div>
          <form className={styles.nlForm} action="/api/newsletter" method="POST">
            <input className={styles.nlInput} type="email" name="email" placeholder="your@email.com" required />
            <button className={styles.nlBtn} type="submit">Subscribe</button>
          </form>
          <p className={styles.nlNote}>Technical documentation updates only. No promotional content.</p>
        </div>
      </section>

      <Footer />
    </>
  )
}
