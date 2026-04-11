import nodemailer from "nodemailer";
import dotenv from "dotenv";
import env from "../../infrastructure/env.js";

dotenv.config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: env.MAILER_EMAIL,
    pass: env.MAILER_PASS,
  }
});

export async function sendPassResetEmail({ email, OTP }) {
  try {
    const mailConfig = {
      from: env.MAILER_EMAIL,
      to: email,
      subject: "Password Recovery - Booksy",
     html: `
  <div style="font-family: 'Segoe UI', Arial, sans-serif; background-color: #f6f8fb; padding: 20px;">
    <div style="max-width: 600px; margin: auto; background: #ffffff; border-radius: 10px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
      
      <!-- Header -->
      <div style="background: #2C3E50; padding: 20px; text-align: center;">
        <h1 style="color: #ffffff; margin: 0;">📚 Booksy</h1>
        <p style="color: #ddd; margin: 5px 0 0;">Your Online Book Store</p>
      </div>

      <!-- Body -->
      <div style="padding: 30px; color: #333;">
        <h2 style="color: #E74C3C;">Reset Your Password</h2>
        <p>Hello,</p>
        <p>We received a request to reset the password for your Booksy account linked with:</p>
        
        <p style="font-weight: bold; color: #2C3E50;">${email}</p>

        <p>Use the OTP below to reset your password:</p>

        <!-- OTP Box -->
        <div style="text-align: center; margin: 25px 0;">
          <span style="display: inline-block; background: #f1f1f1; padding: 15px 30px; font-size: 22px; letter-spacing: 3px; border-radius: 8px; color: #E74C3C; font-weight: bold;">
            ${OTP}
          </span>
        </div>

        <p>This OTP is valid for <strong>10 minutes</strong>.</p>

        <p>If you didn’t request this, you can safely ignore this email.</p>

        <p style="margin-top: 30px;">Regards,<br/><strong>Booksy Team</strong></p>
      </div>

      <!-- Footer -->
      <div style="background: #f1f1f1; padding: 15px; text-align: center; font-size: 12px; color: #777;">
        Need help? Contact us at 
        <a href="mailto:support@booksy.com" style="color: #2C3E50;">support@booksy.com</a>
      </div>

    </div>
  </div>
`
    };

    const info = await transporter.sendMail(mailConfig);
  } catch (error) {
    console.error("Error sending mail:", error);
    throw new Error("Failed to send OTP");
  }
}

export async function sendSignupEmail({ email, OTP }) {
  try {
    const mailConfig = {
      from: env.MAILER_EMAIL,
      to: email,
      subject: "Signup Verification - Booksy",
      html: `
  <div style="font-family: 'Segoe UI', Arial, sans-serif; background-color: #f6f8fb; padding: 20px;">
    <div style="max-width: 600px; margin: auto; background: #ffffff; border-radius: 10px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
      
      <!-- Header -->
      <div style="background: #27AE60; padding: 20px; text-align: center;">
        <h1 style="color: #ffffff; margin: 0;">📚 Welcome to Booksy</h1>
        <p style="color: #eafaf1; margin: 5px 0 0;">Explore. Read. Grow.</p>
      </div>

      <!-- Body -->
      <div style="padding: 30px; color: #333;">
        <h2 style="color: #27AE60;">Verify Your Email</h2>
        <p>Hello,</p>
        <p>Thank you for joining <strong>Booksy</strong> — your go-to destination for books.</p>

        <p>Please verify your email using the OTP below:</p>

        <!-- OTP Box -->
        <div style="text-align: center; margin: 25px 0;">
          <span style="display: inline-block; background: #f1f1f1; padding: 15px 30px; font-size: 22px; letter-spacing: 3px; border-radius: 8px; color: #27AE60; font-weight: bold;">
            ${OTP}
          </span>
        </div>

        <p>This OTP is valid for <strong>10 minutes</strong>.</p>

        <p>If you didn’t sign up, you can ignore this email.</p>

        <p style="margin-top: 30px;">Happy Reading 📖<br/><strong>Booksy Team</strong></p>
      </div>

      <!-- Footer -->
      <div style="background: #f1f1f1; padding: 15px; text-align: center; font-size: 12px; color: #777;">
        Support: 
        <a href="mailto:support@booksy.com" style="color: #27AE60;">support@booksy.com</a>
      </div>

    </div>
  </div>
`
    };

    const info = await transporter.sendMail(mailConfig);
  } catch (error) {
    console.error("Error sending signup email:", error);
    throw new Error("Could not send signup verification email.");
  }
}
