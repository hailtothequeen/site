import './globals.css';
import Link from 'next/link';

export const metadata = {
  title: 'Hail to the Queen LLC',
  description: 'Roofing • Construction • Public Adjusting',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col font-sans bg-gray-50 text-gray-900">
        <header className="bg-blue-900 text-white">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between p-4 gap-2">
            <Link href="/" className="text-xl font-bold">Hail to the Queen LLC</Link>
            <nav className="flex flex-col md:flex-row md:items-center gap-3 md:gap-6">
              <Link href="/services" className="hover:underline">Services</Link>
              <Link href="/book" className="hover:underline">Book</Link>
              <a href="mailto:hailtothequeenllc@gmail.com" className="hover:underline">
                hailtothequeenllc@gmail.com
              </a>
              <div className="flex flex-col md:flex-row md:items-center gap-2">
                <a href="tel:+13128265284" className="bg-white text-blue-900 px-3 py-1 rounded font-semibold hover:bg-gray-100 text-center">
                  (312) 826-5284
                </a>
                <a href="tel:+17738933356" className="bg-white text-blue-900 px-3 py-1 rounded font-semibold hover:bg-gray-100 text-center">
                  (773) 893-3356
                </a>
              </div>
            </nav>
          </div>
        </header>
        <main className="flex-grow">{children}</main>
        <footer className="bg-gray-800 text-gray-200 p-6 mt-12">
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
            <div>
              <h2 className="font-semibold">Hail to the Queen LLC</h2>
              <p className="text-sm">Roofing • Construction • Public Adjusting</p>
            </div>
            <div>
              <h2 className="font-semibold">Contact</h2>
              <p className="text-sm">Email: <a className="underline" href="mailto:hailtothequeenllc@gmail.com">hailtothequeenllc@gmail.com</a></p>
              <p className="text-sm">Phone: <a className="underline" href="tel:+13128265284">(312) 826-5284</a> • <a className="underline" href="tel:+17738933356">(773) 893-3356</a></p>
            </div>
            <div>
              <h2 className="font-semibold">Service Area</h2>
              <p className="text-sm">Proudly serving [Your Region Here]</p>
              <div className="mt-2 space-x-4 text-sm">
                <a className="underline" href="/privacy">Privacy</a>
                <a className="underline" href="/terms">Terms</a>
              </div>
            </div>
          </div>
          <div className="text-center text-xs mt-6">© {new Date().getFullYear()} Hail to the Queen LLC</div>
        </footer>
      </body>
    </html>
  );
}
