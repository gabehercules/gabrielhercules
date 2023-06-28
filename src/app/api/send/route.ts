import { EmailTemplate } from '../../../components/EmailTemplate';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function GET() {
  try {
    const data = await resend.emails.send({
      from: 'contato@poraogeek.com.br',
      to: 'gabrielsyze@gmail.com',
      subject: 'Teste - Contato',
      react: EmailTemplate({ firstName: 'Gabriel' }),
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({
      error,
      message: 'deu ruim mermão',
    });
  }
}
