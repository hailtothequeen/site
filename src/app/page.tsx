export default function Home() {
  return (
    <div>
      {/* HERO */}
      <section className="relative">
        <img
          src="https://images.unsplash.com/photo-1591158902271-9a5b5fef64d5?q=80&w=1600&auto=format&fit=crop"
          alt="" className="w-full h-[320px] md:h-[420px] object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-black/10" />
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto max-w-6xl px-4 text-white">
            <h1 className="text-3xl md:text-5xl font-extrabold drop-shadow">
              Durable roofs. Fast response. Fair claims.
            </h1>
            <p className="mt-3 max-w-2xl text-white/90">
              Hail, wind, and wear — we’ve got you covered. Licensed construction & public adjusting.
            </p>
            <div className="mt-6 flex gap-3">
              <a href="/quote" className="btn-red">Get a Free Estimate</a>
              <a href="/book" className="btn">Book an Inspection</a>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="mx-auto max-w-6xl px-4 py-12 grid md:grid-cols-3 gap-6">
        <div className="card p-6">
          <div className="text-2xl">🏠</div>
          <h3 className="mt-3 font-bold text-lg">Roof Repair & Replacement</h3>
          <p className="mt-2 text-slate-700">Asphalt, metal, flat—precision installs built to last.</p>
        </div>
        <div className="card p-6">
          <div className="text-2xl">🌨️</div>
          <h3 className="mt-3 font-bold text-lg">Storm & Hail Response</h3>
          <p className="mt-2 text-slate-700">Rapid tarping, damage assessments, and documentation.</p>
        </div>
        <div className="card p-6">
          <div className="text-2xl">📄</div>
          <h3 className="mt-3 font-bold text-lg">Public Adjusting</h3>
          <p className="mt-2 text-slate-700">We handle the claim so you don’t have to.</p>
        </div>
      </section>
    </div>
  );
}
