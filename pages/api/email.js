import nodemailer from 'nodemailer';

export default async (req, res) => {
  if (req.method === 'POST') {
    const { name, subject, email, message } = req.body;

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    try {
      const mailOptions = {
        from: process.env.GMAIL_USER,
        to: email,
        envelope: {
          from: email,
          to: process.env.GMAIL_USER,
        },
        subject: 'Contact',
        text: `Name: ${name}\nSubject: ${subject}\nEmail: ${email}\nMessage: ${message}`,
      };

      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Sent' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error' });
    }
  } else {
    res.status(405).end();
  }
};