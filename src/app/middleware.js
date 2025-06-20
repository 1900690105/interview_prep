import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET; // Your JWT secret

export async function middleware(req) {
  const token = req.cookies.get('token')?.value; // Get token from cookies
  const url = req.nextUrl.pathname; // Get the requested route

  // Debugging: Log token and requested URL
  console.log('Requested URL:', url);
  console.log('Token found:', token);

  // If there's no token (unauthenticated user)
  if (!token) {
    console.log('No token found. Unauthenticated user.');

    // Allow access to all routes except /profile
    if (url === '/profile') {
      console.log('Redirecting to loginform as user is unauthenticated and tried to access /profile');
      return NextResponse.redirect(new URL('/loginform', req.url)); // Redirect to login
    }
    console.log('Allowing access to:', url);
    return NextResponse.next(); // Allow access to other routes
  }

  // If there's a token (authenticated user)
  try {
    console.log('Verifying token...');
    // Verify the token
    jwt.verify(token, JWT_SECRET);

    // If on the profile page, restrict access to other pages
    if (url !== '/home' && url !== '/profile') {
      console.log('Redirecting to home as authenticated user tried to access:', url);
      return NextResponse.redirect(new URL('/home', req.url)); // Redirect to home
    }

    console.log('Authenticated user allowed to access:', url);
    return NextResponse.next(); // Allow access to home and profile

  } catch (error) {
    console.error('Token verification failed:', error.message);
    // If token verification fails, redirect to loginform
    return NextResponse.redirect(new URL('/loginform', req.url));
  }
}

export const config = {
  matcher: ['/home', '/profile', '/loginform', '/signupform', '/api/:path*'],
};
