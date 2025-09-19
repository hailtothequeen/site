export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <section className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold">Hail to the Queen LLC</h1>
        <p className="mt-4 text-lg">Roofing • Construction • Public Adjusting</p>
        <div className="mt-6 space-x-4">
          <a className="underline" href="/services">Services</a>
          <a className="underline" href="/book">Book an Inspection</a>
        </div>
      </section>
    </main>
  );
}
