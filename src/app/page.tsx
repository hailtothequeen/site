export default function Home() {
  return (
    <div>
      {/* HERO */}
      <section className="relative bg-brand-navy">
        <img
          src="https://images.unsplash.com/photo-1604014237800-1c9102c9d8a3?q=80&w=1800&auto=format&fit=crop"
          alt="Roofing crew at work"
          className="w-full h-[360px] md:h-[460px] object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-brand-navy/70 to-brand-navy/40" />
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto max-w-6xl px-4 text-white">
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight drop-shadow">
              Durable roofs. Fast response. Fair claims.
            </h1>
            <p className="mt-3 max-w-2xl text-white/90">
              Hail, wind, and wear — we’ve got you covered. Licensed construction & public adjusting.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="/quote" className="btn-red">Get a Free Estimate</a>
              <a href="/book" className="btn bg-white text-brand-navy hover:bg-white/90">Book an Inspection</a>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="mx-auto max-w-6xl px-4 py-12 grid md:grid-cols-3 gap-6">
        <div className="card overflow-hidden">
          <img src="https://images.unsplash.com/photo-1523419409543-8a3d4a0d3c5b?q=80&w=1200&auto=format&fit=crop"
               alt="Roof replacement" className="h-36 w-full object-cover" />
          <div className="p-6">
            <h3 className="font-bold text-lg">Roof Repair & Replacement</h3>
            <p className="mt-2 text-slate-700">Asphalt, metal, flat—precision installs built to last.</p>
          </div>
        </div>

        <div className="card overflow-hidden">
          <img src="https://images.unsplash.com/photo-1597007065721-4a9b3fb13fcb?q=80&w=1200&auto=format&fit=crop"
               alt="Storm response" className="h-36 w-full object-cover" />
          <div className="p-6">
            <h3 className="font-bold text-lg">Storm & Hail Response</h3>
            <p className="mt-2 text-slate-700">Rapid tarping, damage assessments, and documentation.</p>
          </div>
        </div>

        <div className="card overflow-hidden">
          <img src="https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?q=80&w=1200&auto=format&fit=crop"
               alt="Public adjusting" className="h-36 w-full object-cover" />
          <div className="p-6">
            <h3 className="font-bold text-lg">Public Adjusting</h3>
            <p className="mt-2 text-slate-700">We handle the claim so you don’t have to.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
