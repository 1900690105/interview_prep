// app/api/auth/login/route.js
import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

const JWT_SECRET =process.env.JWT_SECRET

export async function POST(req) {
  try {
    const body = await req.json();
    const { userId, username, email, rememberMe } = body;

    if (!userId || !username || !email) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Set expiration based on rememberMe
    const expiresIn = rememberMe ? '30d' : '1m';
    const maxAge = rememberMe ? 30 * 24 * 60 * 60 : 60; // 30 days or 24 hours in seconds

    // Generate JWT token with dynamic expiration
    const token = jwt.sign(
      { userId, username, email },
      JWT_SECRET,
      { expiresIn }
    );

    // Create response
    const response = NextResponse.json(
      { success: true },
      { status: 200 }
    );

    // Set HTTP-only cookie with dynamic maxAge
    response.cookies.set({
      name: 'token',
      value: token,
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: maxAge,
      path: '/'
    });

    return response;

  } catch (error) {
    console.error('Login API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// Add a route to check authentication status
// export async function GET(req) {
//   const token = req.cookies.get('token')?.value;
  
//   if (!token) {
//     return NextResponse.json(
//       { authenticated: false },
//       { status: 401 }
//     );
//   }

//   try {
//     jwt.verify(token, JWT_SECRET);
//     return NextResponse.json(
//       { authenticated: true },
//       { status: 200 }
//     );
//   } catch (error) {
//     return NextResponse.json(
//       { authenticated: false },
//       { status: 401 }
//     );
//   }
// }

// Add logout route to clear the cookie
export async function DELETE() {
  const response = NextResponse.json(
    { success: true },
    { status: 200 }
  );
  response.cookies.delete('token');
  return response;
}