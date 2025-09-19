export const metadata = { title: "Services — Hail to the Queen LLC" };
export default function Services() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-semibold">Our Services</h1>
        <ul className="list-disc ml-6 mt-4 space-y-2">
          <li>Roof repair & replacement</li>
          <li>Storm / hail damage assessments</li>
          <li>Gutters & siding</li>
          <li>Public Adjuster services (policyholder advocacy)</li>
        </ul>
      </div>
    </main>
  );
}
