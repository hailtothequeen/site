export const metadata = { title: "Book — Hail to the Queen LLC" };
const CAL_HANDLE = "hail-queen-79ucid"; // update if needed

export default function Book() {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold text-blue-900">Book an Inspection</h1>
      <p className="mt-2 text-gray-700">
        This books a call with a representative who will schedule your inspection. (Crews are dispatched after the call.)
      </p>
      <div className="mt-6 bg-white border rounded shadow">
        <iframe
          src={`https://cal.com/${CAL_HANDLE}?hide_event_type_details=true&primary_color=0c4a6e`}
          title="Book with Hail to the Queen"
          className="w-full"
          style={{ height: '800px', border: '0' }}
        />
      </div>
      <p className="mt-4 text-sm text-gray-600">
        Prefer the phone? Call us: <a href="tel:+13128265284" className="underline">(312) 826-5284</a> or <a href="tel:+17738933356" className="underline">(773) 893-3356</a>
      </p>
    </div>
  );
}
