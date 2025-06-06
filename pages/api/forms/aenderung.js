import { createMail } from "@/utils/email_service";

const nodemailer = require("nodemailer");

const handler = (req, res) => {
  console.log(req.body);
  const receiver = req.body.email;
  const formData = req.body;

  const subject = `Änderung: ${req.body.employer} - ${formData.firstnameDN} ${formData.lastnameDN}`;
  const message = createMail(
    "aenderung",
    receiver,
    subject,
    "Empfangsbestätigung",
    formData
  );

  let transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: 587,
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  if (req.method === "POST") {
    transporter.sendMail(message, (err, info) => {
      if (err) {
        console.log(err);
        res.status(400).json({
          error: [err.response, err.message],
        });
      } else {
        res.status(250).json({
          success: `Message delivered to ${info.accepted}`,
        });
      }
    });
  }
};
export default handler;
