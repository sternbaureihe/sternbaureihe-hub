import { NextRequest, NextResponse } from 'next/server'

const N8N_WEBHOOK = 'https://ops-automation.proselyteholdings.com/webhook/sternbaureihe-consultation'

export async function POST(req: NextRequest) {
  try {
    const data = await req.formData()

    const payload = {
      source: 'sternbaureihe.com/advertise',
      timestamp: new Date().toISOString(),
      name: data.get('name'),
      company: data.get('company'),
      email: data.get('email'),
      phone: data.get('phone') || null,
      chassis: data.get('chassis') || null,
      message: data.get('message'),
    }

    // Fire to n8n — non-blocking, don't let n8n failure break the UX
    try {
      await fetch(N8N_WEBHOOK, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
        signal: AbortSignal.timeout(5000),
      })
    } catch (webhookError) {
      // Log but don't fail the response — form submission succeeds regardless
      console.error('n8n webhook failed:', webhookError)
    }

    // Redirect to thank you
    return NextResponse.redirect(new URL('/advertise/thank-you', req.url))
  } catch (err) {
    console.error('Consultation form error:', err)
    return NextResponse.redirect(new URL('/advertise?error=1', req.url))
  }
}
