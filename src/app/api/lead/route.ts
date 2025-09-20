import { NextResponse } from 'next/server';
import { notifyLead } from '@/lib/email';

export const runtime = 'nodejs';

export async function POST(req: Request) {
  const data = await req.formData();
  const ts = Number(data.get('ts') || 0);
  const hp = String(data.get('hp_company') || '');

  // spam guard
  const elapsed = Date.now() - ts;
  if (hp || elapsed < 400) {
    return NextResponse.redirect('/thank-you');
  }

  // fields
  const name = String(data.get('name') || '');
  const phone = String(data.get('phone') || '');
  const email = String(data.get('email') || data.get('customer_email') || data.get('email_address') || '');
  const service = String(data.get('service') || '');
  const address = String(data.get('address') || '');
  const city = String(data.get('city') || '');
  const state = String(data.get('state') || '');
  const zip = String(data.get('zip') || '');
  const sqft = String(data.get('sqft') || '');
  const stories = String(data.get('stories') || '');
  const material = String(data.get('material') || '');
  const pitch = String(data.get('pitch') || '');
  const ageYears = String(data.get('ageYears') || '');
  const notes = String(data.get('notes') || '');

  // insurance (new)
  const insProvider = String(data.get('insProvider') || '');
  const insPolicy   = String(data.get('insPolicy') || '');
  const insClaim    = String(data.get('insClaim') || '');

  // UTM
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

Roof:
- Size: ${sqft} sqft
- Stories: ${stories}
- Material: ${material}
- Pitch: ${pitch}
- Age: ${ageYears} yrs

Insurance:
- Provider: ${insProvider}
- Policy #: ${insPolicy}
- Claim #: ${insClaim}

Notes:
${notes || '(none)'}

UTM:
source=${utm_source}, medium=${utm_medium}, campaign=${utm_campaign}, term=${utm_term}, content=${utm_content}
  `;

  // send emails
  try {
    const inbox = process.env.SALES_INBOX || '';
    await notifyLead(inbox, `New Lead: ${name} (${service})`, body);
    if (email) {
      await notifyLead(
        email,
        "Thanks — we've received your request",
        `Hi ${name || 'there'},\n\nThanks for contacting Hail to the Queen LLC about "${service}". We'll review your details${insProvider ? ' and insurance info' : ''} and call you at ${phone} shortly.\n\n— Hail to the Queen LLC`
      );
    }
  } catch (e) {
    console.error('[lead] email error', e);
  }

  // redirect to thank-you with email in query for a friendly message
  const url = new URL('/thank-you', new URL(req.url).origin);
  if (email) url.searchParams.set('e', email);
  return NextResponse.redirect(url, { status: 303 });
}
