import { NextResponse } from 'next/server';
import { notifyLead } from '@/lib/email';

export const runtime = 'nodejs';

export async function POST(req: Request) {
  const data = await req.formData();
  const ts = Number(data.get('ts') || 0);
  const hp = String(data.get('hp_company') || '');

  // spam check
  const elapsed = Date.now() - ts;
  if (hp || elapsed < 400) {
    console.warn('[lead] spam blocked', { elapsed, hp });
    return NextResponse.redirect('/thank-you');
  }

  // collect fields
  const name = String(data.get('name') || '');
  const phone = String(data.get('phone') || '');
  const email = String(data.get('email') || '');
  const service = String(data.get('service') || '');
  const address = String(data.get('address') || '');
  const city = String(data.get('city') || '');
  const state = String(data.get('state') || '');
  const zip = String(data.get('zip') || '');
  const notes = String(data.get('notes') || '');
  const sqft = String(data.get('sqft') || '');
  const stories = String(data.get('stories') || '');
  const material = String(data.get('material') || '');
  const pitch = String(data.get('pitch') || '');
  const ageYears = String(data.get('ageYears') || '');
  const utm_source = String(data.get('utm_source') || '');
  const utm_medium = String(data.get('utm_medium') || '');
  const utm_campaign = String(data.get('utm_campaign') || '');
  const utm_term = String(data.get('utm_term') || '');
  const utm_content = String(data.get('utm_content') || '');

  const body = `
New lead request:

Name: ${name}
Phone: ${phone}
Email: ${email}
Service: ${service}
Address: ${address}, ${city}, ${state} ${zip}
Roof: ${sqft} sqft, ${stories} stories, ${material}, ${pitch}, ${ageYears} yrs
Notes: ${notes}

UTM: source=${utm_source}, medium=${utm_medium}, campaign=${utm_campaign}, term=${utm_term}, content=${utm_content}
  `;

  const inbox = process.env.SALES_INBOX || '';

  try {
    // internal notification
    await notifyLead(inbox, `New Lead: ${name} (${service})`, body);

    // customer confirmation (if email entered)
    if (email) {
      await notifyLead(
        email,
        "Thanks — we've received your request",
        `Hi ${name || 'there'},\n\nThanks for contacting Hail to the Queen LLC about "${service}". We’ll review your request and call you at ${phone} shortly.\n\n— Hail to the Queen LLC`
      );
    }
  } catch (err) {
    console.error('[lead] email send error:', err);
  }

  return NextResponse.redirect('/thank-you');
}
