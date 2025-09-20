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

export default function QuoteClient() {
  const utm = useUTM();
  return (
    <div className="max-w-3xl mx-auto p-8">
      <h1 className="text-3xl font-bold text-blue-900">Get a Free Estimate</h1>
      <p className="mt-2 text-gray-700">Tell us a few details and we’ll follow up quickly.</p>

      <form method="POST" action="/api/lead" className="mt-8 grid gap-4 bg-white p-6 shadow rounded">
        {/* spam honeypot + timestamp */}
        <input type="hidden" name="hp_company" value="" />
        <input type="hidden" id="ts" name="ts" value="" />

        <div className="grid md:grid-cols-2 gap-4">
          <div><label className="block text-sm font-medium">Full Name</label>
            <input name="name" required className="mt-1 w-full border rounded px-3 py-2" /></div>
          <div><label className="block text-sm font-medium">Phone</label>
            <input name="phone" required className="mt-1 w-full border rounded px-3 py-2" /></div>
          <div><label className="block text-sm font-medium">Email (optional)</label>
            <input type="email" name="email" className="mt-1 w-full border rounded px-3 py-2" /></div>
          <div><label className="block text-sm font-medium">Service</label>
            <select name="service" className="mt-1 w-full border rounded px-3 py-2">
              <option>Roof Repair</option><option>Roof Replacement</option>
              <option>Storm / Hail Assessment</option><option>Gutters / Siding</option>
              <option>Public Adjusting</option>
            </select></div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div><label className="block text-sm font-medium">Address</label>
            <input name="address" required className="mt-1 w-full border rounded px-3 py-2" /></div>
          <div><label className="block text-sm font-medium">City</label>
            <input name="city" required className="mt-1 w-full border rounded px-3 py-2" /></div>
          <div><label className="block text-sm font-medium">State</label>
            <input name="state" required className="mt-1 w-full border rounded px-3 py-2" /></div>
          <div><label className="block text-sm font-medium">ZIP</label>
            <input name="zip" required className="mt-1 w-full border rounded px-3 py-2" /></div>
        </div>

        <fieldset className="grid md:grid-cols-5 gap-4">
          <div className="md:col-span-2"><label className="block text-sm font-medium">Roof Size (sq ft)</label>
            <input type="number" name="sqft" min="100" max="20000" defaultValue="1500" className="mt-1 w-full border rounded px-3 py-2" /></div>
          <div><label className="block text-sm font-medium">Stories</label>
            <select name="stories" className="mt-1 w-full border rounded px-3 py-2" defaultValue="1">
              <option value="1">1</option><option value="2">2</option><option value="3">3</option>
            </select></div>
          <div><label className="block text-sm font-medium">Material</label>
            <select name="material" className="mt-1 w-full border rounded px-3 py-2">
              <option value="asphalt">Asphalt</option><option value="metal">Metal</option><option value="tile">Tile</option>
            </select></div>
          <div><label className="block text-sm font-medium">Pitch</label>
            <select name="pitch" className="mt-1 w-full border rounded px-3 py-2">
              <option value="low">Low</option><option value="med">Medium</option><option value="steep">Steep</option>
            </select></div>
          <div><label className="block text-sm font-medium">Roof Age (years)</label>
            <input type="number" name="ageYears" min="0" max="80" defaultValue="15" className="mt-1 w-full border rounded px-3 py-2" /></div>
        </fieldset>

        <div><label className="block text-sm font-medium">Notes</label>
          <textarea name="notes" rows={4} className="mt-1 w-full border rounded px-3 py-2" placeholder="Anything helpful…" /></div>

        {/* UTM passthrough */}
        <input type="hidden" name="utm_source" value={utm.utm_source || ''} />
        <input type="hidden" name="utm_medium" value={utm.utm_medium || ''} />
        <input type="hidden" name="utm_campaign" value={utm.utm_campaign || ''} />
        <input type="hidden" name="utm_term" value={utm.utm_term || ''} />
        <input type="hidden" name="utm_content" value={utm.utm_content || ''} />

        <button className="bg-blue-900 text-white px-6 py-3 rounded font-semibold hover:bg-blue-800">
          Get My Estimate
        </button>
      </form>
    </div>
  );
}
