// import { NextResponse } from "next/server";

// // Initialize global OTP store if it doesn't exist
// if (!global.otpStore) {
//   global.otpStore = {};
// }
// const OTP_TTL = 5 * 60 * 1000; // OTP time-to-live in milliseconds (e.g., 5 minutes)

// export async function POST(request) {
//   try {
//     const { email, otp } = await request.json();
//     console.log("Received request to verify OTP for:", email);

//     const record = global.otpStore[email];

//     if (!record) {
//       console.log("No OTP found for this email");
//       return NextResponse.json({ error: "No OTP found for this email" }, { status: 400 });
//     }

//     const { otp: storedOtp, timestamp } = record;

//     // Check if the OTP has expired
//     if (Date.now() - timestamp > OTP_TTL) {
//       delete global.otpStore[email]; // Remove expired OTP
//       console.log("OTP has expired");
//       return NextResponse.json({ error: "OTP has expired" }, { status: 400 });
//     }

//     // Check if the entered OTP matches the stored OTP
//     if (storedOtp !== otp) {
//       console.log("Invalid OTP");
//       return NextResponse.json({ error: "Invalid OTP" }, { status: 400 });
//     }

//     // If verification is successful, delete the OTP from the store
//     delete global.otpStore[email];

//     console.log("OTP verified successfully");
//     return NextResponse.json({ success: true });
//   } catch (error) {
//     console.error("Error verifying OTP:", error);
//     return NextResponse.json({ error: error.message }, { status: 500 });
//   }
// }









// pages/api/verify-otp.js
import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const { email, otp } = await req.json();

    if (!email || !otp) {
      return NextResponse.json(
        { error: 'Email and OTP are required' },
        { status: 400 }
      );
    }

    const storedOTPData = global.otpStore?.get(email);

    if (!storedOTPData) {
      return NextResponse.json(
        { error: 'OTP expired or not found' },
        { status: 400 }
      );
    }

    if (storedOTPData.otp !== otp) {
      return NextResponse.json(
        { error: 'Invalid OTP' },
        { status: 400 }
      );
    }

    // Check if OTP is not older than 5 minutes
    const now = new Date();
    const otpAge = now - storedOTPData.createdAt;
    
    if (otpAge > 5 * 60 * 1000) {
      global.otpStore.delete(email);
      return NextResponse.json(
        { error: 'OTP has expired' },
        { status: 400 }
      );
    }

    // Clear OTP after successful verification
    global.otpStore.delete(email);

    return NextResponse.json(
      { message: 'OTP verified successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error verifying OTP:', error);
    return NextResponse.json(
      { error: 'Failed to verify OTP' },
      { status: 500 }
    );
  }
}