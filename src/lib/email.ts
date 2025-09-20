import { Resend } from 'resend';

export async function notifyLead(to: string, subject: string, text: string) {
  const apiKey = process.env.RESEND_API_KEY;
  const hasKey = !!apiKey && apiKey.length > 8;
  console.log('[notifyLead] to=%s | hasKey=%s | subj=%s', to, hasKey, subject);

  if (!hasKey) {
    console.warn('[notifyLead] RESEND_API_KEY missing. Email not sent.');
    return;
  }

  const resend = new Resend(apiKey);
  try {
    const result = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>', // no DNS needed
      to,
      subject,
      text,
    });
    console.log('[notifyLead] sent ok:', result?.id || result);
  } catch (err: any) {
    console.error('[notifyLead] send error:', err?.message || err);
    throw err;
  }
}
