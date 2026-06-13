'use client'

import { useEffect, useRef } from 'react'
import styles from './AdZone.module.css'

interface AdZoneProps {
  zoneId: number
  width: number
  height: number
  label?: string
}

const REVIVE_URL = process.env.NEXT_PUBLIC_REVIVE_URL || 'https://ads.sternbaureihe.com/www/delivery'

export default function AdZone({ zoneId, width, height, label }: AdZoneProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Load Revive async tag
    const script = document.createElement('script')
    script.src = `${REVIVE_URL}/asyncjs.php`
    script.async = true
    script.onload = () => {
      if (typeof window !== 'undefined' && (window as any).reviveAsync) {
        ;(window as any).reviveAsync[zoneId] = { zoneid: zoneId }
      }
    }
    ref.current?.appendChild(script)

    return () => {
      if (ref.current) {
        ref.current.innerHTML = ''
      }
    }
  }, [zoneId])

  // In development or when Revive is not configured, show placeholder
  if (process.env.NODE_ENV === 'development' || !process.env.NEXT_PUBLIC_REVIVE_URL) {
    return (
      <div
        className={styles.placeholder}
        style={{ width: '100%', height: `${height}px` }}
        aria-label="Advertisement"
      >
        <span className={styles.placeholderLabel}>
          {label || `Ad Zone ${zoneId}`} · {width}×{height}
        </span>
      </div>
    )
  }

  return (
    <div
      ref={ref}
      className={styles.zone}
      style={{ width: '100%', minHeight: `${height}px` }}
      aria-label="Advertisement"
      data-zone-id={zoneId}
    />
  )
}
