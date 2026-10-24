import { createClientFromRequest } from 'npm:@base44/sdk@0.8.54';
import { secrets } from 'base44:runtime';

const INTENTS = ['plan', 'trial', 'enterprise', 'guide', 'pricing'];

const PERSONAL_DOMAINS = [
  'gmail.com', 'googlemail.com', 'yahoo.com', 'yahoo.co.in', 'yahoo.in',
  'outlook.com', 'hotmail.com', 'hotmail.co.in', 'live.com', 'msn.com',
  'aol.com', 'icloud.com', 'me.com', 'proton.me', 'protonmail.com',
  'rediffmail.com', 'yandex.com', 'yandex.ru', 'gmx.com', 'mail.com',
];

const escapeHtml = (value) => value
  .replace(/&/g, '&amp;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;')
  .replace(/'/g, '&#39;');

export default async function(req) {
  try {
    const base44 = createClientFromRequest(req);

    let body;
    try {
      body = await req.json();
    } catch {
      return Response.json({ error: 'Invalid request body.' }, { status: 400 });
    }

    const str = (value) => (typeof value === 'string' ? value.trim() : '');
    const name = str(body.name);
    const workEmail = str(body.workEmail).toLowerCase();
    const company = str(body.company);
    const companySize = str(body.companySize);
    const mainTask = str(body.mainTask);
    const intent = str(body.intent);
    const planOfInterest = str(body.planOfInterest);
    const sourcePage = str(body.sourcePage) || 'unknown';
    const submissionId = str(body.submissionId);

    if (!name || !company || !mainTask || !INTENTS.includes(intent)) {
      return Response.json({ error: 'Missing required fields.' }, { status: 400 });
    }

    const domain = workEmail.split('@')[1] || '';
    if (!/^[^\s@]+@[^\s@]+\.[a-z]{2,}$/.test(workEmail) || PERSONAL_DOMAINS.includes(domain)) {
      return Response.json({ error: 'Please use your work email so we can set up your plan.' }, { status: 400 });
    }

    // Same work email and intent within 10 minutes: update that Lead, do not create a duplicate.
    const tenMinutesAgo = new Date(Date.now() - 10 * 60 * 1000).toISOString();
    const existing = await base44.asServiceRole.entities.Lead.filter(
      { work_email: workEmail, intent, created_date: { $gte: tenMinutesAgo } },
      { sort: '-created_date', limit: 1 }
    );
    const recent = (existing.items || existing)[0];

    const lead = {
      name,
      work_email: workEmail,
      company,
      company_size: companySize,
      main_task: mainTask,
      plan_of_interest: planOfInterest,
      intent,
      source_page: sourcePage,
      submission_id: submissionId,
    };

    if (recent) {
      await base44.asServiceRole.entities.Lead.update(recent.id, lead);
    } else {
      await base44.asServiceRole.entities.Lead.create(lead);
    }

    let ownerEmail = '';
    try {
      ownerEmail = secrets.get('SITE_OWNER_EMAIL') || '';
    } catch {
      ownerEmail = '';
    }

    const recipients = ['contact@jagoai.com'];
    if (ownerEmail && !recipients.includes(ownerEmail)) {
      recipients.push(ownerEmail);
    }

    const rows = [
      ['Name', name],
      ['Work email', workEmail],
      ['Company', company],
      ['Company size', companySize || 'Not given'],
      ['Main task', mainTask],
      ['Plan of interest', planOfInterest || 'Not given'],
      ['Intent', intent],
      ['Source page', sourcePage],
    ]
      .map(([k, v]) => `<tr><td style="padding:6px 12px;color:#666">${k}</td><td style="padding:6px 12px">${escapeHtml(v)}</td></tr>`)
      .join('');
    const subject = 'New ' + intent + ' lead: ' + name + ', ' + company;
    const html = '<div style="font-family:Arial,sans-serif;max-width:520px"><h2 style="font-size:18px;margin:0 0 12px">New lead from your website</h2><table style="border-collapse:collapse;font-size:14px">' + rows + '</table><p style="font-size:12px;color:#999;margin-top:12px">Sent from the Jago AI website lead form.</p></div>';
    const text = 'New lead: ' + name + ' (' + workEmail + ') at ' + company + '. Task: ' + mainTask + '. Intent: ' + intent + '. Source: ' + sourcePage + '.';

    // Each recipient is tried on its own: one failure never stops the others.
    const notified = [];
    for (const to of recipients) {
      try {
        await base44.asServiceRole.integrations.Core.SendEmail({ to, subject, html, text });
        notified.push({ to, sent: true });
      } catch (error) {
        // The lead is saved. A failed notification must not affect the visitor.
        notified.push({ to, sent: false, error: error.message });
      }
    }

    return Response.json({ ok: true, notified });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}