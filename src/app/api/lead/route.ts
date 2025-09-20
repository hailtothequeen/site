import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { estimateRoof } from '@/lib/estimator';
import { notifyLead } from '@/lib/email';

export const runtime = 'nodejs';

const LeadSchema = z.object({
  name: z.string().min(1),
  email: z.string().email().optional().or(z.literal('')),
  phone: z.string().min(7).max(30),
  address: z.string().min(1),
  city: z.string().min(1),
  state: z.string().min(2),
  zip: z.string().min(3),
  service: z.string().min(1),
  sqft: z.coerce.number().min(100).max(20000).default(1500),
  material: z.enum(['asphalt','metal','tile']),
  pitch: z.enum(['low','med','steep']),
  ageYears: z.coerce.number().min(0).max(80).default(15),
  stories: z.coerce.number().int().min(1).max(3).default(1),
  notes: z.string().optional().default(''),
  utm_source: z.string().optional().default(''),
  utm_medium: z.string().optional().default(''),
  utm_campaign: z.string().optional().default(''),
  utm_term: z.string().optional().default(''),
  utm_content: z.string().optional().default(''),
  hp_company: z.string().optional().default(''),
  ts: z.coerce.number().optional().default(0),
});

export async function POST(req: NextRequest) {
  const started = Date.now();
  const form = await req.formData();

  // spam traps
  const hp = String(form.get('hp_company') || '').trim();
  const ts = Number(form.get('ts') || 0);
  const elapsed = started - ts;
  if (hp) return NextResponse.redirect(new URL('/thank-you', req.url), { status: 303 });
  if (!ts || elapsed < 3000) return NextResponse.redirect(new URL('/thank-you', req.url), { status: 303 });

  const data = Object.fromEntries(form) as Record<string, string>;
  const parsed = LeadSchema.safeParse(data);
  if (!parsed.success) {
    console.error(parsed.error.flatten());
    return NextResponse.redirect(new URL('/quote?error=invalid', req.url), { status: 303 });
  }

  const lead = parsed.data;
  const est = estimateRoof({
    sqft: lead.sqft,
    pitch: lead.pitch,
    material: lead.material,
    ageYears: lead.ageYears,
    stories: lead.stories as 1|2|3,
  });

  const inbox = process.env.SALES_INBOX || 'sales@example.com';
  const subject = `New Lead: ${lead.name} — ${lead.service}`;
  const text = `New lead from website:

Name: ${lead.name}
Email: ${lead.email}
Phone: ${lead.phone}

Address: ${lead.address}, ${lead.city}, ${lead.state} ${lead.zip}
Service: ${lead.service}

Roof Info:
- Sq Ft: ${lead.sqft}
- Material: ${lead.material}
- Pitch: ${lead.pitch}
- Age (yrs): ${lead.ageYears}
- Stories: ${lead.stories}

Notes:
${lead.notes || '(none)'}

UTM:
source=${lead.utm_source} medium=${lead.utm_medium} campaign=${lead.utm_campaign} term=${lead.utm_term} content=${lead.utm_content}

Estimator v0:
Range: $${est.low.toLocaleString()} - $${est.high.toLocaleString()}`;

  try { await notifyLead(inbox, subject, text); } catch (e) { console.error(e); }

  return NextResponse.redirect(new URL('/thank-you', req.url), { status: 303 });
}
