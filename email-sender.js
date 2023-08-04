const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "your-email-service",
  auth: {
    user: "your-email@example.com",
    pass: "your-email-password",
  },
});

const mailOptions = {
  from: "your-email@example.com",
  to: "your-recipient@example.com",
  subject: "Test Email from Node.js",
  text: "This is a test email sent from Node.js using nodemailer.",
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log("Error:", error);
  } else {
    console.log("Email sent:", info.response);
  }
});
