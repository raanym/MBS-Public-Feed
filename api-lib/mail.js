import nodemailer from 'nodemailer';

const nodemailerConfig = process.env.NODEMAILER_CONFIG
  ? JSON.parse(process.env.NODEMAILER_CONFIG)
  : {};

const transporter = nodemailer.createTransport(nodemailerConfig);

export async function sendMail({ from, to, subject, html }) {
  try {
    await transporter.sendMail({
      from,
      to,
      subject,
      html,
    });
  } catch (e) {
    console.error(e);
    throw new Error(`Could not send email: ${e.message}`);
  }
}

export const CONFIG = {
  from: nodemailerConfig?.auth?.user,
};
