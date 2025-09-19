import Link from 'next/link';

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto p-8">
      <section className="text-center py-20">
        <h1 className="text-5xl font-extrabold text-blue-900">Hail to the Queen LLC</h1>
        <p className="mt-4 text-lg">Roofing • Construction • Public Adjusting</p>
        <div className="mt-8 space-x-4">
          <Link href="/quote" className="bg-blue-900 text-white px-6 py-3 rounded font-semibold hover:bg-blue-800">
            Get a Free Estimate
          </Link>
          <Link href="/book" className="underline font-medium">Book Inspection</Link>
        </div>
      </section>
    </div>
  );
}
