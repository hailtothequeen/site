export const metadata = { title: 'Privacy Policy — Hail to the Queen LLC' };
export default function Privacy() {
  return (
    <div className="max-w-3xl mx-auto p-8 prose">
      <h1>Privacy Policy</h1>
      <p>We collect contact and project details to respond to your requests, schedule inspections, and prepare estimates.</p>
      <p>We don’t sell personal data. For questions: hailtothequeenllc@gmail.com.</p>
      <p>Last updated {new Date().toLocaleDateString()}.</p>
    </div>
  );
}
