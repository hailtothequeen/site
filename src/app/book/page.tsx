export const metadata = { title: "Book — Hail to the Queen LLC" };
export default function Book() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-semibold">Book an Inspection</h1>
        <p className="mt-2">Scheduler embed goes here.</p>
        <div className="mt-6 border rounded p-4 bg-white">
          {/* Replace this iframe with your Cal.com/Calendly embed when ready */}
          <iframe
            src="about:blank"
            title="Scheduler"
            className="w-full h-96"
          />
        </div>
      </div>
    </main>
  );
}
