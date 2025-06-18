import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

// sgMail.setApiKey(process.env.SEND_GRID_API);

// const fromEmail = process.env.FROM_EMAIL;

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export const sendEmail = async (to, subject, html) => {
  const msg = {
    to,
    from: `Task Manager App <${process.env.EMAIL_USER}>`,
    subject,
    html,
  };
  try {
    transporter.sendMail(msg, function (error, info) {
      console.log("Email sent: ", info.response);
    });
    return true;
  } catch (error) {
    console.error("Error:", error);

    return false;
  }
};
