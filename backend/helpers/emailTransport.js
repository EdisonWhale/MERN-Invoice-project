import "dotenv/config";
import nodemailer from "nodemailer";
import mg from "nodemailer-mailgun-transport";

let transporter;

if (process.env.NODE_ENV === "development") {
  transporter = nodemailer.createTransport({
    host: "mailhog",
    port: 1025,
  });
} else if (process.env.NODE_ENV === "production") {
  transporter = new MailerSend({
    api_key: process.env.MAILERSEND_API_KEY, // 确保在.env文件中设置了 MAILERSEND_API_KEY
  });
}

export default transporter;
