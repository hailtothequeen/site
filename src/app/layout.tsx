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
        <header className="bg-blue-900 text-white p-4">
          <div className="max-w-6xl mx-auto flex justify-between items-center">
            <Link href="/" className="text-xl font-bold">Hail to the Queen LLC</Link>
            <nav className="space-x-6">
              <Link href="/services" className="hover:underline">Services</Link>
              <Link href="/book" className="hover:underline">Book</Link>
              <a href="tel:+15555555555" className="bg-white text-blue-900 px-3 py-1 rounded font-semibold hover:bg-gray-100">
                (555) 555-5555
              </a>
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
              <p className="text-sm">Phone: (555) 555-5555</p>
              <p className="text-sm">Email: info@hail2thequeen.com</p>
            </div>
            <div>
              <h2 className="font-semibold">Service Area</h2>
              <p className="text-sm">Proudly serving [Your Region Here]</p>
            </div>
          </div>
          <div className="text-center text-xs mt-6">© {new Date().getFullYear()} Hail to the Queen LLC</div>
        </footer>
      </body>
    </html>
  );
}
