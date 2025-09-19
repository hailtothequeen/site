export const metadata = { title: "Services — Hail to the Queen LLC" };

export default function Services() {
  return (
    <div className="max-w-6xl mx-auto p-8">
      <h1 className="text-4xl font-bold text-blue-900">Our Services</h1>
      <div className="mt-6 grid md:grid-cols-3 gap-8">
        <div className="bg-white p-6 shadow rounded">
          <h2 className="font-semibold text-lg">Roofing</h2>
          <p className="mt-2 text-sm text-gray-600">
            Repairs, replacements, inspections, and storm damage assessments.
          </p>
        </div>
        <div className="bg-white p-6 shadow rounded">
          <h2 className="font-semibold text-lg">Construction</h2>
          <p className="mt-2 text-sm text-gray-600">
            Gutters, siding, and structural repairs to keep your property sound.
          </p>
        </div>
        <div className="bg-white p-6 shadow rounded">
          <h2 className="font-semibold text-lg">Public Adjusting</h2>
          <p className="mt-2 text-sm text-gray-600">
            Licensed adjusters advocating for you in the insurance claim process.
          </p>
        </div>
      </div>
    </div>
  );
}
