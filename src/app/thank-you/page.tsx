import Link from "next/link";

export const dynamic = "force-static";

type SP = Record<string, string | string[] | undefined>;

export default function ThankYou({ searchParams }: { searchParams?: SP }) {
  const pick = (v: string | string[] | undefined) =>
    Array.isArray(v) ? (v[0] ?? "") : (v ?? "");

  const name  = pick(searchParams?.name);
  const email = pick(searchParams?.email);
  const phone = pick(searchParams?.phone);
  const svc   = pick(searchParams?.service);

  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-extrabold text-brand-navy">Thanks — we’ve received your request</h1>
      <p className="mt-3 text-slate-700">
        We’ll review your details and reach out soon.
        {email ? <> We also emailed a confirmation to <strong>{email}</strong>.</> : null}
      </p>

      <div className="mt-6 card p-6">
        <h2 className="font-semibold mb-2">Summary</h2>
        <ul className="text-slate-800 space-y-1">
          {name  ? <li><strong>Name:</strong> {name}</li> : null}
          {phone ? <li><strong>Phone:</strong> {phone}</li> : null}
          {email ? <li><strong>Email:</strong> {email}</li> : null}
          {svc   ? <li><strong>Service:</strong> {svc}</li> : null}
        </ul>
      </div>

      <div className="mt-8 flex gap-3">
        <Link href="/book"  className="btn">Book an Inspection</Link>
        <Link href="/"      className="btn-red">Back to Home</Link>
      </div>
    </div>
  );
}
