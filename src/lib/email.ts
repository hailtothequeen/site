import { Resend } from 'resend';

export async function notifyLead(to: string, subject: string, text: string) {
  const apiKey = process.env.RESEND_API_KEY;
  const hasKey = !!apiKey && apiKey.length > 8;
  console.log('[notifyLead] to=%s | hasKey=%s | subj=%s', to, hasKey, subject);

  if (!hasKey) {
    console.warn('[notifyLead] RESEND_API_KEY missing. Email not sent.');
    return { ok:false, reason:'no-key' };
  }

  const resend = new Resend(apiKey);
  try {
    const result = await resend.emails.send({
      // ✅ use your verified domain now
      from: 'Hail to the Queen LLC <noreply@hail2thequeen.com>',
      to,
      subject,
      text,
    });
    if (result.error) {
      console.error('[notifyLead] send error:', result.error);
      return { ok:false, error: String(result.error) };
    } else {
      console.log('[notifyLead] sent ok:', result.data);
      return { ok:true, id: result.data?.id || null };
    }
  } catch (err: any) {
    console.error('[notifyLead] send exception:', err?.message || err);
    return { ok:false, error: String(err?.message || err) };
  }
}
