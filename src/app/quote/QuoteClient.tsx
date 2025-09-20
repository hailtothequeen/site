'use client';
import { useEffect, useState } from 'react';

function useUTM() {
  const [utm, setUTM] = useState<Record<string,string>>({});
  useEffect(() => {
    const p = new URLSearchParams(window.location.search);
    setUTM({
      utm_source: p.get('utm_source') || '',
      utm_medium: p.get('utm_medium') || '',
      utm_campaign: p.get('utm_campaign') || '',
      utm_term: p.get('utm_term') || '',
      utm_content: p.get('utm_content') || '',
    });
    const tsEl = document.getElementById('ts') as HTMLInputElement | null;
    if (tsEl) tsEl.value = String(Date.now());
  }, []);
  return utm;
}

const input = "mt-1 w-full border border-gray-300 rounded px-3 py-2 bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600";

export default function QuoteClient() {
  const utm = useUTM();
  return (
    <div className="max-w-3xl mx-auto p-8">
      <h1 className="text-3xl font-bold text-blue-900">Get a Free Estimate</h1>
      <p className="mt-2 text-gray-700">Tell us a few details and we’ll follow up quickly.</p>

      <form method="POST" action="/api/lead" className="mt-8 grid gap-4 bg-white p-6 shadow rounded">
        {/* anti-spam */}
        <input type="hidden" name="hp_company" value="" />
        <input type="hidden" id="ts" name="ts" value="" />

        {/* Contact */}
        <div className="grid md:grid-cols-2 gap-4">
          <div><label className="block text-sm font-medium text-gray-800">Full Name</label>
            <input name="name" required placeholder="Jane Doe" className={input} /></div>
          <div><label className="block text-sm font-medium text-gray-800">Phone</label>
            <input name="phone" required placeholder="(555) 555-5555" className={input} /></div>
          <div><label className="block text-sm font-medium text-gray-800">Email</label>
            <input type="email" name="email" placeholder="you@example.com" className={input} /></div>
          <div><label className="block text-sm font-medium text-gray-800">Service</label>
            <select name="service" className={input}>
              <option>Roof Repair</option>
              <option>Roof Replacement</option>
              <option>Storm / Hail Assessment</option>
              <option>Gutters / Siding</option>
              <option>Public Adjusting</option>
            </select></div>
        </div>

        {/* Address */}
        <div className="grid md:grid-cols-2 gap-4">
          <div><label className="block text-sm font-medium text-gray-800">Address</label>
            <input name="address" required placeholder="123 Main St" className={input} /></div>
          <div><label className="block text-sm font-medium text-gray-800">City</label>
            <input name="city" required placeholder="Springfield" className={input} /></div>
          <div><label className="block text-sm font-medium text-gray-800">State</label>
            <input name="state" required placeholder="IL" className={input} /></div>
          <div><label className="block text-sm font-medium text-gray-800">ZIP</label>
            <input name="zip" required placeholder="60601" className={input} /></div>
        </div>

        {/* Roof details */}
        <fieldset className="grid md:grid-cols-5 gap-4">
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-800">Roof Size (sq ft)</label>
            <input type="number" name="sqft" min="100" max="20000" defaultValue="1500" className={input} />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-800">Stories</label>
            <select name="stories" className={input} defaultValue="1">
              <option value="1">1</option><option value="2">2</option><option value="3">3</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-800">Material</label>
            <select name="material" className={input}>
              <option value="asphalt">Asphalt</option><option value="metal">Metal</option><option value="tile">Tile</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-800">Pitch</label>
            <select name="pitch" className={input}>
              <option value="low">Low</option><option value="med">Medium</option><option value="steep">Steep</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-800">Roof Age (years)</label>
            <input type="number" name="ageYears" min="0" max="80" defaultValue="15" className={input} />
          </div>
        </fieldset>

        {/* Insurance (new) */}
        <div className="grid md:grid-cols-3 gap-4">
          <div><label className="block text-sm font-medium text-gray-800">Insurance Provider (optional)</label>
            <input name="insProvider" placeholder="State Farm, Allstate…" className={input} /></div>
          <div><label className="block text-sm font-medium text-gray-800">Policy # (optional)</label>
            <input name="insPolicy" placeholder="ABC1234567" className={input} /></div>
          <div><label className="block text-sm font-medium text-gray-800">Claim # (if any)</label>
            <input name="insClaim" placeholder="(if already filed)" className={input} /></div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-800">Notes</label>
          <textarea name="notes" rows={4} placeholder="Anything helpful…" className={input} />
        </div>

        {/* UTM passthrough */}
        <input type="hidden" name="utm_source" value={utm.utm_source || ''} />
        <input type="hidden" name="utm_medium" value={utm.utm_medium || ''} />
        <input type="hidden" name="utm_campaign" value={utm.utm_campaign || ''} />
        <input type="hidden" name="utm_term" value={utm.utm_term || ''} />
        <input type="hidden" name="utm_content" value={utm.utm_content || ''} />

        <button className="bg-blue-900 text-white px-6 py-3 rounded font-semibold hover:bg-blue-800">Get My Estimate</button>
      </form>
    </div>
  );
}
