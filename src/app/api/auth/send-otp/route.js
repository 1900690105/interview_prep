// import { NextResponse } from "next/server";
// import nodemailer from "nodemailer";

// const otpStore = global.otpStore || {};
// global.otpStore = otpStore;

// export async function POST(request) {
//   const { email } = await request.json();
//   const otp = Math.floor(100000 + Math.random() * 900000).toString();

//   // Store OTP with timestamp
//   otpStore[email] = { otp, timestamp: Date.now() };

//   const transporter = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//       user: process.env.EMAIL_USER,
//       pass: process.env.EMAIL_PASS,
//     },
//   });

//   const mailOptions = {
//     from: process.env.EMAIL_USER,
//     to: email,
//     subject: "Your OTP Code",
//     text: `Your OTP code is ${otp}`,
//   };

//   try {
//     await transporter.sendMail(mailOptions);
//     console.log("Email sent successfully to:", email);
//     return NextResponse.json({ success: true });
//   } catch (error) {
//     console.error("Error sending email:", error);
//     return NextResponse.json({ error: error.message }, { status: 500 });
//   }
// }



import { sendOTPEmail } from '@/lib/emailService';
import { NextResponse } from 'next/server';
export async function POST(req) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    // Store OTP temporarily
    global.otpStore = global.otpStore || new Map();
    global.otpStore.set(email, {
      otp,
      createdAt: new Date()
    });

    await sendOTPEmail(email, otp);

    return NextResponse.json(
      { message: 'OTP sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending OTP:', error);
    return NextResponse.json(
      { error: 'Failed to send OTP' },
      { status: 500 }
    );
  }
}