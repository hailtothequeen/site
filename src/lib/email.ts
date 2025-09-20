import { Resend } from 'resend';

export async function notifyLead(to: string, subject: string, text: string) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.log('[notifyLead] RESEND_API_KEY missing; would send to:', to, '\n', text);
    return;
  }
  const resend = new Resend(apiKey);
  await resend.emails.send({
    // Use onboarding sender so you don't need DNS yet
    from: 'Acme <onboarding@resend.dev>',
    to,
    subject,
    text,
  });
}
