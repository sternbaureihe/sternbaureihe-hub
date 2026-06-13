import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Advertise',
  description:
    'Reach Mercedes-Benz owners, restorers, and independent specialists across 100+ chassis-specific domains. Direct placement and chassis-targeted newsletter advertising.',
  robots: { index: true, follow: true },
}

export default function AdvertisePage() {
  return (
    <>
      <Nav />

      {/* UNIVERSAL COLOR KEY */}
      <div className={styles.colorKey}>
        <div className={styles.keyHeader}>
          <span className={styles.keyHeaderTitle}>Advertising real estate guide — color key</span>
          <span className={styles.keyHeaderSub}>Applies to all pages · website · newsletter · classifieds</span>
        </div>
        <div className={styles.keyGrid}>
          {[
            { bar: '#8B1A4A', bg: 'var(--ad-bg)', border: '2px dashed #8B1A4A', icon: '$', nameColor: 'var(--ad-text)', name: 'Advertiser zone', desc: 'Paid display. Parts retailers, shops, insurers. Pink = available to buy.' },
            { bar: '#C4900A', bg: 'var(--gold-bg)', border: '2px solid #C4900A', icon: '★', nameColor: 'var(--gold-text)', name: 'Featured placement', desc: 'Premium paid. Featured classified or direct-sold exclusive zone. Top of page.' },
            { bar: '#1A6B62', bg: 'var(--teal-bg)', border: '1px solid #1A6B62', icon: '≡', nameColor: 'var(--teal-text)', name: 'Standard / adjacent', desc: 'Standard listings or organic content. Context for where paid placements sit.' },
            { bar: '#2A3F6F', bg: 'var(--blue-bg, #0A0F1A)', border: '1px solid #2A3F6F', icon: '✦', nameColor: 'var(--accent-l)', name: 'Site chrome', desc: 'SternBaureihe interface. Navigation, labels, headers. Not ad inventory.' },
          ].map(item => (
            <div key={item.name} className={styles.keyCell} style={{ '--bar-color': item.bar } as React.CSSProperties}>
              <div className={styles.keyBar} style={{ background: item.bar }} />
              <div className={styles.keySwatch} style={{ background: item.bg, border: item.border }}>
                <span className={styles.keyIcon} style={{ color: item.bar }}>{item.icon}</span>
              </div>
              <span className={styles.keyName} style={{ color: item.nameColor }}>{item.name}</span>
              <p className={styles.keyDesc}>{item.desc}</p>
            </div>
          ))}
        </div>
        <div className={styles.keyNote}>
          <div className={styles.keyNoteRule} />
          <p className={styles.keyNoteText}><strong>Pink is always money.</strong> Every pink zone on every page is available to buy. Gold means premium — featured, exclusive, top placement. Teal is context. Blue is the site itself.</p>
        </div>
      </div>

      {/* HERO */}
      <div className={styles.hero}>
        <div>
          <div className={styles.heroAccent} />
          <div className={styles.heroEyebrow}>Advertising</div>
          <h1 className={styles.heroHeadline}>Reach the people<br />who work on<br />these cars.</h1>
          <p className={styles.heroBody}>SternBaureihe is a technical reference platform for Mercedes-Benz chassis. Every visitor is an owner, restorer, collector, or independent specialist — actively researching a specific vehicle and spending money on it. Not browsing. Not passing through.</p>
          <a href="#consultation" className={styles.heroCta}>Request a consultation ↓</a>
          <p className={styles.heroCtaNote}>Speak with a SternBaureihe Media Specialist</p>
        </div>
        <div className={styles.heroStats}>
          {[
            ['Chassis domains', '100+'],
            ['Pages with live ad inventory', '2,600+'],
            ['Ad zones per article page', '4'],
            ['Newsletter slots per send', '3 · direct sold'],
            ['Empty zones at any time', 'Zero'],
            ['One domain buy covers', 'Every page on that domain'],
          ].map(([k, v]) => (
            <div key={k} className={styles.heroStat}>
              <span className={styles.heroStatK}>{k}</span>
              <span className={styles.heroStatV}>{v}</span>
            </div>
          ))}
        </div>
      </div>

      {/* WHERE YOUR AD APPEARS */}
      <div className={styles.secHeader}><span className={styles.secTitle}>Where your ad appears</span></div>

      <div className={styles.scaleCallout}>
        <div className={styles.scaleRule} />
        <p className={styles.scaleText}>One direct buy on a chassis domain puts your ad on every article, every specs page, every guide, every model page, every classifieds listing — <strong>every page on that domain.</strong> A network buy across all chassis domains means every Mercedes owner researching any chassis sees your ad on every page, every session. <strong>2,600+ pages of live inventory.</strong></p>
      </div>

      {/* PROOF GRID */}
      <div className={styles.proofGrid}>
        {/* Article */}
        <div className={styles.proofCol}>
          <span className={styles.proofTag} style={{ borderColor: '#3A2A1A', color: '#8A6A3A' }}>Highest dwell time</span>
          <div className={styles.proofLabel}>Article & technical pages</div>
          <div className={styles.proofSub}>4 zones · reader engaged throughout</div>
          <div className={styles.proofMock}>
            <div className={styles.mockNav}><div className={styles.mockDot} /><div className={styles.mockDot} /><div className={styles.mockDot} /></div>
            <div className={styles.mockLdr}><div className={styles.adZonePink} style={{ height: 24 }}><span className={styles.adLabel}>① Leaderboard 728×90</span></div></div>
            <div className={styles.mockBody}>
              <div className={styles.mockMain}>
                <div className={styles.mockLine} /><div className={styles.mockLine} /><div className={styles.mockLineMid} />
                <div className={styles.adZonePink} style={{ height: 32, marginTop: 6, marginBottom: 6 }}><span className={styles.adLabel}>② Rectangle in-content</span></div>
                <div className={styles.mockLine} /><div className={styles.mockLineShort} />
              </div>
              <div className={styles.mockSidebar}>
                <div className={styles.adZonePink} style={{ height: 36, marginBottom: 4 }}><span className={styles.adLabel}>③</span></div>
                <div className={styles.adZonePink} style={{ height: 96 }}><span className={styles.adLabel}>④ Half Page</span></div>
              </div>
            </div>
          </div>
          <div className={styles.zoneLegend}>
            <div className={styles.zoneRow}><div className={styles.zbPink}>1</div><div className={styles.zoneDesc}>Leaderboard 728×90 — top of page</div></div>
            <div className={styles.zoneRow}><div className={styles.zbPink}>2</div><div className={styles.zoneDesc}>Rectangle 300×250 — in-content</div></div>
            <div className={styles.zoneRow}><div className={styles.zbPink}>3</div><div className={styles.zoneDesc}>Rectangle 300×250 — sidebar</div></div>
            <div className={styles.zoneRow}><div className={styles.zbPink}>4</div><div className={styles.zoneDesc}>Half page 300×600 — full read dwell</div></div>
          </div>
        </div>

        {/* Market/Specs */}
        <div className={styles.proofCol}>
          <span className={styles.proofTag} style={{ borderColor: '#1A3A6A', color: '#4A6AAA' }}>High save & print rate</span>
          <div className={styles.proofLabel}>Market · Specs · Guides pages</div>
          <div className={styles.proofSub}>2–3 zones · researcher in active study</div>
          <div className={styles.proofMock}>
            <div className={styles.mockNav}><div className={styles.mockDot} /><div className={styles.mockDot} /><div className={styles.mockDot} /></div>
            <div className={styles.mockLdr}><div className={styles.adZonePink} style={{ height: 24 }}><span className={styles.adLabel}>① Leaderboard 728×90</span></div></div>
            <div className={styles.mockBody}>
              <div className={styles.mockMain}>
                <div style={{ background: '#141414', height: 32, marginBottom: 6, border: '1px solid var(--rule)' }} />
                <div className={styles.adZonePink} style={{ height: 28, marginBottom: 6 }}><span className={styles.adLabel}>② Rectangle in-content</span></div>
                <div className={styles.mockLine} /><div className={styles.mockLineMid} />
              </div>
              <div className={styles.mockSidebar}>
                <div className={styles.adZonePink} style={{ height: 96 }}><span className={styles.adLabel}>③ Half Page</span></div>
              </div>
            </div>
          </div>
          <div className={styles.zoneLegend}>
            <div className={styles.zoneRow}><div className={styles.zbPink}>1</div><div className={styles.zoneDesc}>Leaderboard 728×90 — top</div></div>
            <div className={styles.zoneRow}><div className={styles.zbPink}>2</div><div className={styles.zoneDesc}>Rectangle 300×250 — in-content</div></div>
            <div className={styles.zoneRow}><div className={styles.zbPink}>3</div><div className={styles.zoneDesc}>Half page 300×600 — sidebar</div></div>
          </div>
        </div>

        {/* Classifieds */}
        <div className={styles.proofCol}>
          <span className={styles.proofTag} style={{ borderColor: '#1A4A1A', color: '#4A8A4A' }}>Highest buyer intent</span>
          <div className={styles.proofLabel}>Classifieds pages</div>
          <div className={styles.proofSub}>5 zones · active purchase session</div>
          <div className={styles.proofMock}>
            <div className={styles.mockNav}><div className={styles.mockDot} /><div className={styles.mockDot} /><div className={styles.mockDot} /></div>
            <div className={styles.mockLdr}><div className={styles.adZonePink} style={{ height: 24 }}><span className={styles.adLabel}>① Leaderboard top</span></div></div>
            <div className={styles.mockBody}>
              <div className={styles.mockMain} style={{ padding: 0 }}>
                <div className={styles.adZoneTeal} style={{ height: 28 }}><span className={styles.adLabelTeal}>Other seller</span></div>
                <div className={styles.adZoneGold} style={{ height: 28 }}><span className={styles.adLabelGold}>★ Featured listing</span></div>
                <div className={styles.adZonePink} style={{ height: 22 }}><span className={styles.adLabel}>② Native sponsored</span></div>
                <div className={styles.adZoneTeal} style={{ height: 28 }}><span className={styles.adLabelTeal}>Other seller</span></div>
                <div className={styles.adZonePink} style={{ height: 18 }}><span className={styles.adLabel}>③ Leaderboard mid</span></div>
              </div>
              <div className={styles.mockSidebar}>
                <div className={styles.adZonePink} style={{ height: 36, marginBottom: 4 }}><span className={styles.adLabel}>④</span></div>
                <div className={styles.adZonePink} style={{ height: 88 }}><span className={styles.adLabel}>⑤ Half</span></div>
              </div>
            </div>
          </div>
          <div className={styles.zoneLegend}>
            <div className={styles.zoneRow}><div className={styles.zbPink}>1</div><div className={styles.zoneDesc}>Leaderboard top + mid refresh</div></div>
            <div className={styles.zoneRow}><div className={styles.zbGold}>★</div><div className={styles.zoneDesc} style={{ color: 'var(--gold-text)' }}>Featured listing — seller&apos;s placement</div></div>
            <div className={styles.zoneRow}><div className={styles.zbPink}>2</div><div className={styles.zoneDesc}>Native sponsored listing</div></div>
            <div className={styles.zoneRow}><div className={styles.zbPink}>3</div><div className={styles.zoneDesc}>Rectangle + half page sidebar</div></div>
          </div>
        </div>
      </div>

      {/* NEWSLETTER */}
      <div className={styles.secHeader}><span className={styles.secTitle}>Newsletter · Chassis-specific · Direct sold</span></div>
      <div className={styles.nlWrap}>
        <div className={styles.nlIntro}>
          <div>
            <p className={styles.nlEyebrow}>Newsletter · Direct sold only</p>
            <h2 className={styles.nlHeadline}>Inbox delivery to chassis owners.<br />No programmatic. Your creative, our list.</h2>
            <p className={styles.nlBody}>Every SternBaureihe newsletter is chassis-specific. A deployment reaches only subscribers who signed up for that chassis. Three ad slots per send — flat rate, direct sold. No auction. You buy the slot, we send it.</p>
          </div>
          <div className={styles.nlFacts}>
            {[
              ['Ad slots per send', '3'],
              ['Targeting', 'Per chassis segment'],
              ['Pricing model', 'Flat rate per deployment'],
              ['Programmatic in email', 'Not possible · direct only'],
            ].map(([k, v]) => (
              <div key={k} className={styles.nlFact}>
                <span className={styles.nlFactK}>{k}</span>
                <span className={styles.nlFactV}>{v}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Email preview */}
        <div className={styles.emailWrap}>
          <p className={styles.emailWrapLabel}>What subscribers see when they open this email</p>
          <div className={styles.emailClient}>
            <div className={styles.emailChrome}>
              <div className={styles.emailDots}>
                <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#5A2A2A' }} />
                <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#5A5A2A' }} />
                <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#2A5A2A' }} />
              </div>
              <span className={styles.emailSubj}>Technical Dispatch — [Chassis] · SternBaureihe</span>
            </div>
            <div className={styles.emailMeta}>
              <span className={styles.emailFrom}>From: <strong>SternBaureihe Technical Dispatch</strong></span>
              <span className={styles.emailDate}>dispatch@sternbaureihe.com</span>
            </div>
            <div className={styles.emailBody}>
              <div className={styles.emailBrand}>
                <span className={styles.emailWm}>SternBaureihe</span>
                <span className={styles.emailChassis}>Technical Dispatch</span>
              </div>
              <div className={styles.adZonePink} style={{ height: 80, position: 'relative' }}>
                <div className={styles.zbPink} style={{ position: 'absolute', top: 8, left: 10 }}>1</div>
                <span className={styles.adLabel}>Header Banner · 600×150 · First thing seen</span>
              </div>
              <div className={styles.emailContent}>
                <div className={styles.emailTag}>This month in [chassis]</div>
                <div className={styles.emailLine} /><div className={styles.emailLine} /><div className={styles.emailLineMid} />
              </div>
              <div className={styles.adZonePink} style={{ height: 88, position: 'relative' }}>
                <div className={styles.zbPink} style={{ position: 'absolute', top: 8, left: 10 }}>2</div>
                <span className={styles.adLabel}>Mid-Content · 600×200 · Highest click-through</span>
              </div>
              <div className={styles.emailContent}>
                <div className={styles.emailTag}>New documentation added</div>
                <div className={styles.emailLine} /><div className={styles.emailLineMid} />
              </div>
              <div className={styles.emailClassified}>
                <div className={styles.emailClfLabel}>Classifieds · [chassis]</div>
                <div className={styles.emailListing} style={{ background: '#FFF8E8', borderBottom: '1px solid #C4900A' }}>
                  <div style={{ background: '#FFF4D8', borderRight: '1px solid #C4900A', height: 30, width: 44, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 10, color: '#C4900A' }}>★</div>
                  <div style={{ padding: '4px 8px' }}><div style={{ height: 2, background: '#E8C86A', marginBottom: 3, width: '80%' }} /><div style={{ height: 2, background: '#C8A84A', width: '55%' }} /></div>
                </div>
                <div className={styles.emailListing} style={{ background: '#F0FAF9' }}>
                  <div style={{ background: '#E8F8F6', borderRight: '1px solid #1A6B62', height: 30, width: 44 }} />
                  <div style={{ padding: '4px 8px' }}><div style={{ height: 2, background: '#88CCC8', marginBottom: 3, width: '80%' }} /><div style={{ height: 2, background: '#6AACAA', width: '55%' }} /></div>
                </div>
              </div>
              <div className={styles.adZonePink} style={{ height: 60, position: 'relative' }}>
                <div className={styles.zbPink} style={{ position: 'absolute', top: 8, left: 10 }}>3</div>
                <span className={styles.adLabel}>Footer Banner · 600×100 · Last impression</span>
              </div>
              <div className={styles.emailFooter}>
                <span>SternBaureihe · Technical Dispatch</span>
                <span>Unsubscribe</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* TWO FORMAT TIERS */}
      <div className={styles.secHeader}><span className={styles.secTitle}>Advertising formats</span></div>
      <div className={styles.formats}>
        <div className={styles.formatCard}>
          <div className={styles.formatRec}>Recommended</div>
          <span className={styles.formatTier}>Tier 1 — Direct</span>
          <div className={styles.formatName}>Own a chassis page</div>
          <p className={styles.formatBody}>Flat monthly rate. Your ad on every page of a specific chassis domain — exclusively your category. One transmission specialist per domain. One parts supplier per domain. No auction, no competition from your category.</p>
          <div className={styles.formatRows}>
            {[['Coverage', 'Every page on that domain'], ['Exclusivity', 'Category exclusive'], ['Rate', 'Flat monthly']].map(([k, v]) => (
              <div key={k} className={styles.formatRow}><span className={styles.formatK}>{k}</span><span className={styles.formatV}>{v}</span></div>
            ))}
          </div>
          <a href="#consultation" className={styles.formatCta}>Contact a Media Specialist →</a>
        </div>
        <div className={styles.formatCard}>
          <span className={styles.formatTier}>Tier 2 — Newsletter</span>
          <div className={styles.formatName}>Chassis-specific list</div>
          <p className={styles.formatBody}>Reach subscribers who registered for updates on a specific chassis. Direct sold, flat rate per deployment. Your creative, our list, inbox delivery. No programmatic, no auction.</p>
          <div className={styles.formatRows}>
            {[['Format', '3 slots per send'], ['Targeting', 'Per chassis segment'], ['Rate', 'Flat per deployment']].map(([k, v]) => (
              <div key={k} className={styles.formatRow}><span className={styles.formatK}>{k}</span><span className={styles.formatV}>{v}</span></div>
            ))}
          </div>
          <a href="#consultation" className={styles.formatCta}>Contact a Media Specialist →</a>
        </div>
      </div>

      {/* AUDIENCE */}
      <div className={styles.secHeader}><span className={styles.secTitle}>The audience</span></div>
      <div className={styles.audience}>
        <div className={styles.audBlock}>
          <div className={styles.audTitle}>Who reads these pages</div>
          <p className={styles.audBody}>Independent Mercedes specialists researching failure modes before a job. Collectors sourcing OEM parts for a restoration. Owners comparing models before purchase. People with a specific chassis and a specific problem — reading the one page that addresses it directly.</p>
          <div className={styles.audTags}>
            {['Independent shops', 'Collectors', 'Restorers', 'Owners', 'Enthusiasts'].map(t => <span key={t} className={styles.audTag}>{t}</span>)}
          </div>
        </div>
        <div className={styles.audBlock}>
          <div className={styles.audTitle}>What they are doing here</div>
          <p className={styles.audBody}>Active research with purchase intent. A shop reading about engine tolerances is about to order parts. A collector on the market page is about to insure a vehicle. A buyer on classifieds is making a purchase decision right now. Every page view represents someone actively engaged with a specific Mercedes chassis.</p>
          <div className={styles.audTags}>
            {['Parts research', 'Restoration planning', 'Pre-purchase', 'Valuation', 'Diagnosis'].map(t => <span key={t} className={styles.audTag}>{t}</span>)}
          </div>
        </div>
      </div>

      {/* MEDIA SPECIALIST CTA */}
      <div id="consultation" className={styles.cta}>
        <div>
          <div className={styles.ctaAccent} />
          <div className={styles.ctaEyebrow}>Media Specialist</div>
          <h2 className={styles.ctaHeadline}>Request a consultation.<br />No rate card.<br />Serious inquiries only.</h2>
          <p className={styles.ctaBody}>Tell us which chassis and what you sell. A SternBaureihe Media Specialist will respond within one business day to discuss placement, availability, and pricing.</p>
          <div className={styles.ctaSpecialist}>
            <div className={styles.ctaAvatar}>MS</div>
            <div>
              <span className={styles.ctaRole}>SternBaureihe Media Specialist</span>
              <span className={styles.ctaName}>Available for direct and newsletter placement</span>
            </div>
          </div>
        </div>
        <div>
          <ConsultationForm />
        </div>
      </div>

      <Footer />
    </>
  )
}

function ConsultationForm() {
  return (
    <form className={styles.ctaForm} action="/api/consultation" method="POST">
      <input className={styles.ctaInput} type="text" name="name" placeholder="Name" required />
      <input className={styles.ctaInput} type="text" name="company" placeholder="Company" required />
      <input className={styles.ctaInput} type="email" name="email" placeholder="Email" required />
      <input className={styles.ctaInput} type="tel" name="phone" placeholder="Phone (optional)" />
      <input className={styles.ctaInput} type="text" name="chassis" placeholder="Chassis of interest — e.g. W124, W126, all" />
      <textarea className={styles.ctaTextarea} name="message" placeholder="What you sell and what you are looking for" />
      <button className={styles.ctaBtn} type="submit">Request consultation</button>
      <p className={styles.ctaFormNote}>A Media Specialist will respond within one business day.</p>
    </form>
  )
}
