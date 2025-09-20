export const metadata = { title: "Book — Hail to the Queen LLC" };
export default function Book() {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold text-blue-900">Book an Inspection</h1>
      <p className="mt-2 text-gray-700">Pick a time that works for you.</p>
      <div className="mt-6 bg-white border rounded shadow">
        <iframe
          src="https://cal.com/YOUR_CAL_HANDLE?hide_event_type_details=true&primary_color=0c4a6e"
          title="Book with Hail to the Queen"
          className="w-full"
          style={{ height: '800px', border: '0' }}
        />
      </div>
      <p className="mt-4 text-sm text-gray-600">
        Prefer the phone? Call us: <a href="tel:+15555555555" className="underline">(555) 555-5555</a>
      </p>
    </div>
  );
}
