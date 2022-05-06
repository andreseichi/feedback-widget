import nodemailer from 'nodemailer';
import { MailAdapter, sendMailData } from '../mail-adapter';

const transport = nodemailer.createTransport({
  host: 'smtp.mailtrap.io',
  port: 2525,
  auth: {
    user: '95db27e11c0cfb',
    pass: 'f1eb29103783e9',
  },
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: sendMailData) {
    await transport.sendMail({
      from: 'Equipe Feedget <oi@feedget.com>',
      to: 'Tashiro <andre_seichi@hotmail.com>',
      subject,
      html: body,
    });
  }
}
