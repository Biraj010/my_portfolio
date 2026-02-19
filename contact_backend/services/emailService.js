const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
});

const sendContactEmail = async ({ name, email, phone, message }) => {
  const mailOptions = {
    from: `"Portfolio Contact Form" <${process.env.EMAIL_FROM}>`,
    to: process.env.EMAIL_TO,
    subject: `New Contact Form Submission from ${name}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
        <h2 style="color: #333; border-bottom: 2px solid #915EFF; padding-bottom: 10px;">New Contact Form Submission</h2>
        
        <div style="margin: 20px 0;">
          <p style="margin: 10px 0;"><strong style="color: #555;">Name:</strong> ${name}</p>
          <p style="margin: 10px 0;"><strong style="color: #555;">Email:</strong> <a href="mailto:${email}" style="color: #915EFF;">${email}</a></p>
          ${phone ? `<p style="margin: 10px 0;"><strong style="color: #555;">Phone:</strong> ${phone}</p>` : ''}
        </div>
        
        <div style="margin: 20px 0; padding: 15px; background-color: #f9f9f9; border-left: 4px solid #915EFF; border-radius: 5px;">
          <strong style="color: #555;">Message:</strong>
          <p style="margin: 10px 0; line-height: 1.6; color: #333;">${message}</p>
        </div>
        
        <hr style="margin: 20px 0; border: none; border-top: 1px solid #ddd;">
        
        <p style="color: #888; font-size: 12px; text-align: center;">
          This email was sent from your portfolio contact form
        </p>
      </div>
    `,
    text: `
      New Contact Form Submission
      
      Name: ${name}
      Email: ${email}
      ${phone ? `Phone: ${phone}` : ''}
      
      Message:
      ${message}
    `
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', info.messageId);
    return info;
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
};

module.exports = { sendContactEmail };
