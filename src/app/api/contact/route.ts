import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

if (!process.env.RESEND_API_KEY) {
  throw new Error('RESEND_API_KEY is missing');
}


export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required.' },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: 'The Grand Icon <onboarding@resend.dev>', // change to your verified domain later
      to: 'amansb69@gmail.com',
      replyTo: email,
      subject: `New Sanctum Inquiry from ${name}`,
      html: `
        <div style="font-family: Georgia, serif; background: #0A0908; color: #F2ECE2; padding: 40px; max-width: 600px; margin: 0 auto; border: 1px solid #C4A472;">
          <div style="border-bottom: 1px solid #C4A472; padding-bottom: 20px; margin-bottom: 28px;">
            <p style="font-size: 10px; letter-spacing: 4px; text-transform: uppercase; color: #C4A472; margin: 0 0 8px 0; font-family: monospace;">
              THE GRAND ICON · SANCTUM INQUIRY
            </p>
            <h1 style="font-size: 24px; font-weight: 300; color: #F2ECE2; margin: 0;">
              New Message from <em style="color: #C4A472;">${name}</em>
            </h1>
          </div>

          <table style="width: 100%; border-collapse: collapse; margin-bottom: 28px;">
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid rgba(196,164,114,0.1);">
                <p style="font-size: 9px; letter-spacing: 3px; text-transform: uppercase; color: #7A7068; font-family: monospace; margin: 0 0 4px 0;">Full Name</p>
                <p style="font-size: 15px; color: #F2ECE2; margin: 0; font-weight: 300;">${name}</p>
              </td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid rgba(196,164,114,0.1);">
                <p style="font-size: 9px; letter-spacing: 3px; text-transform: uppercase; color: #7A7068; font-family: monospace; margin: 0 0 4px 0;">Email</p>
                <p style="font-size: 15px; color: #C4A472; margin: 0; font-weight: 300;">${email}</p>
              </td>
            </tr>
            <tr>
              <td style="padding: 10px 0;">
                <p style="font-size: 9px; letter-spacing: 3px; text-transform: uppercase; color: #7A7068; font-family: monospace; margin: 0 0 8px 0;">Message</p>
                <p style="font-size: 14px; color: #B0A898; margin: 0; line-height: 1.7; font-weight: 300;">${message.replace(/\n/g, '<br/>')}</p>
              </td>
            </tr>
          </table>

          <div style="border-top: 1px solid rgba(196,164,114,0.15); padding-top: 20px;">
            <p style="font-size: 9px; letter-spacing: 3px; text-transform: uppercase; color: #5A524A; font-family: monospace; margin: 0;">
              VIP Circle · Civil Lines · Chandrapur · Maharashtra
            </p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json({ error: 'Failed to send email.' }, { status: 500 });
    }

    return NextResponse.json({ success: true, id: data?.id });

  } catch (err) {
    console.error('Route error:', err);
    return NextResponse.json({ error: 'Internal server error.' }, { status: 500 });
  }
}