import './globals.css'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Hail to the Queen LLC',
  description: 'Roofing • Construction • Public Adjusting',
  icons: { icon: '/favicon.svg' }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <header className="bg-white border-b border-slate-200">
          <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <img src="/logo.svg" alt="Hail to the Queen" className="h-7 w-auto" />
              <span className="sr-only">Hail to the Queen LLC</span>
            </Link>
            <nav className="flex items-center gap-6 text-sm">
              <Link href="/services" className="no-underline hover:underline">Services</Link>
              <Link href="/quote" className="no-underline hover:underline">Free Estimate</Link>
              <Link href="/book" className="btn">Book an Inspection</Link>
            </nav>
          </div>
        </header>

        <main className="flex-1">{children}</main>

        <footer className="bg-brand-navy text-white">
          <div className="mx-auto max-w-6xl px-4 py-8 grid md:grid-cols-3 gap-6">
            <div>
              <div className="font-bold text-lg">Hail to the Queen LLC</div>
              <div className="text-slate-200">Roofing • Construction • Public Adjusting</div>
            </div>
            <div>
              <div className="font-semibold mb-1">Contact</div>
              <div><a className="underline" href="mailto:hailtothequeenllc@gmail.com">hailtothequeenllc@gmail.com</a></div>
              <div className="mt-1">
                <a className="underline" href="tel:+13128265284">(312) 826-5284</a> ·
                <a className="underline ml-2" href="tel:+17738933356">(773) 893-3356</a>
              </div>
            </div>
            <div>
              <div className="font-semibold mb-1">Service Area</div>
              <div className="text-slate-200">Proudly serving Chicagoland & surrounding areas</div>
              <div className="mt-2 text-slate-300 text-sm">
                <Link href="/privacy" className="mr-4 underline">Privacy</Link>
                <Link href="/terms" className="underline">Terms</Link>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
