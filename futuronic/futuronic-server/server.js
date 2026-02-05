const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Transporter setup
const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: parseInt(process.env.EMAIL_PORT),
    secure: process.env.EMAIL_SECURE === 'true',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

// Verify connection
transporter.verify((error, success) => {
    if (error) {
        console.log('SMTP Connection Error:', error);
    } else {
        console.log('SMTP Server is ready to take messages');
    }
});

// Contact API Endpoint
app.post('/api/contact', async (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ error: 'All fields are required.' });
    }

    const mailOptions = {
        from: `"${name}" <${process.env.EMAIL_USER}>`,
        to: process.env.EMAIL_USER, // Send to yourself
        replyTo: email,
        subject: `New Contact Form Submission from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
        html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; border: 1px solid #e0e0e0; padding: 30px; border-radius: 15px;">
        <h2 style="color: #f97316; margin-bottom: 20px;">New Contact Message</h2>
        <p><strong>From:</strong> ${name} (${email})</p>
        <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;">
        <p style="white-space: pre-wrap;">${message}</p>
        <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;">
        <footer style="font-size: 12px; color: #888;">
          Sent from Futuronic AI Contact Form
        </footer>
      </div>
    `,
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: 'Email sent successfully!' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ error: 'Failed to send email. Please try again later.' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
