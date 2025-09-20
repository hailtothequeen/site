export const metadata = { title: 'Terms of Service — Hail to the Queen LLC' };
export default function Terms() {
  return (
    <div className="max-w-3xl mx-auto p-8 prose">
      <h1>Terms of Service</h1>
      <p>Estimates are subject to site inspection and a signed contract specifying scope and price.</p>
      <p>Public adjusting services are performed under applicable state regulations.</p>
      <p>Last updated {new Date().toLocaleDateString()}.</p>
    </div>
  );
}
