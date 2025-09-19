export const metadata = { title: "Book — Hail to the Queen LLC" };

export default function Book() {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold text-blue-900">Book an Inspection</h1>
      <p className="mt-2">Choose a time that works for you using our scheduler below:</p>
      <div className="mt-6 border rounded p-4 bg-white shadow">
        {/* Replace iframe src with your Cal.com or Calendly embed link */}
        <iframe
          src="about:blank"
          title="Scheduler"
          className="w-full h-[600px] border-0"
        />
      </div>
    </div>
  );
}
