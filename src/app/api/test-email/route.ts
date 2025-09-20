import { NextResponse } from 'next/server';
import { notifyLead } from '@/lib/email';

export const runtime = 'nodejs';

export async function GET() {
  const inbox = process.env.SALES_INBOX || '';
  const hasKey = !!process.env.RESEND_API_KEY && process.env.RESEND_API_KEY.length > 8;

  try {
    await notifyLead(
      inbox,
      'Test email from Hail to the Queen',
      'If you received this, Resend + env vars are working. 🎉'
    );
    return NextResponse.json({ ok: true, inbox, hasKey });
  } catch (e:any) {
    return NextResponse.json(
      { ok: false, inbox, hasKey, error: String(e?.message || e) },
      { status: 500 }
    );
  }
}
