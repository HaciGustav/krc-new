import { createMail } from "@/utils/email_service";
import formidable from "formidable";

const nodemailer = require("nodemailer");

export const config = {
  api: {
    bodyParser: false, // Important: Disable default Next.js body parser
  },
};

const handleFormData = async (req, res) => {
  const form = formidable({ multiples: true });

  const formData = new Promise((resolve, reject) => {
    form.parse(req, async (err, fields, files) => {
      if (err) {
        reject("error");
      }
      resolve({ fields, files });
    });
  });

  try {
    const { fields, files } = await formData;

    try {
      form.uploadDir = "./public/uploads"; // Temporary storage
      form.keepExtensions = true; // Keep file extensions

      const attachments = Object.values(files)
        .flat()
        .map((file) => ({
          filename: file.originalFilename,
          path: file.filepath,
        }));

      return { fields, files, attachments };
    } catch (e) {
      console.log({ ERROR: e });
      return;
    }
  } catch (e) {
    console.log({ ERROR: e });
    return;
  }
};

const handler = async (req, res) => {
  if (req.method === "POST") {
    const { fields, attachments } = await handleFormData(req);
    const receiver = fields.email;
    console.log({ fields });

    const subject = `Anmeldung: ${fields.employer} - ${fields.firstnameDN} ${fields.lastnameDN}`;
    const message = createMail(
      "anmeldung",
      receiver,
      subject,
      "Empfangsbestätigung",
      fields
    );
    message.attachments = attachments;
    let transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    transporter.sendMail(message, (err, info) => {
      if (err) {
        console.log(err);
        console.log(err.message);
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
