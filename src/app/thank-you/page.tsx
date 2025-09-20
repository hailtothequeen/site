export const metadata = { title: 'Thank You — Hail to the Queen LLC' };

export default function ThankYou({ searchParams }: { searchParams: { e?: string } }) {
  const email = searchParams?.e;
  return (
    <div className="min-h-[60vh] grid place-items-center p-8 text-center">
      <div className="max-w-xl">
        <h1 className="text-3xl font-bold text-blue-900">Thanks — we got your request!</h1>
        <p className="mt-3 text-gray-700">
          Our team will review your details and contact you shortly.
        </p>
        {email && (
          <p className="mt-2 text-gray-700">
            We’ve also emailed a confirmation to <span className="font-semibold">{email}</span>.
          </p>
        )}
        <a href="/book" className="mt-6 inline-block bg-blue-900 text-white px-5 py-3 rounded font-semibold hover:bg-blue-800">
          Prefer to book a time now?
        </a>
      </div>
    </div>
  );
}
