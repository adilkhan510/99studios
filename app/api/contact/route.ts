import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  const body = await req.json();
  const { name, email, phone, subject } = body;

  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });

  let mailOptions = {
    from: process.env.EMAIL,
    to: process.env.EMAIL,
    subject: 'Contact form submission',
    text: `Name: ${name} \nEmail: ${email} \nMessage: ${subject} \nPhone: ${phone}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return new Response(
      JSON.stringify({ message: 'Email sent successfully', status: 200 }),
      { status: 200 }
    );
  } catch (err) {
    return new Response(JSON.stringify({ message: 'Email failed to send' }), {
      status: 500,
    });
  }
}
