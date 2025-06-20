import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
 // Assuming you have Firebase config
import { collection, getDoc, doc } from 'firebase/firestore';
import { db } from '@/lib/firebaseConfig';


export async function GET(request) {
    try {
        // Get token from cookies
        const authToken = request.cookies.get("token")?.value || "";

        // Check if token exists
        if (!authToken) {
            return NextResponse.json(
                { error: "Please login first" },
                { status: 401 }
            );
        }

        // Verify JWT token
        try {
            const decodedToken = jwt.verify(authToken, process.env.JWT_SECRET);
            const userId = decodedToken.userId;

            // Get user from Firebase
            const userRef = doc(db, 'users', userId);
            const userSnap = await getDoc(userRef);

            if (!userSnap.exists()) {
                return NextResponse.json(
                    { error: "User not found" },
                    { status: 404 }
                );
            }

            // Get user data and remove sensitive information
            const userData = userSnap.data();
            const { password, ...userWithoutPassword } = userData;

            // Return user data
            return NextResponse.json({
                message: "User found successfully",
                data: userWithoutPassword
            });

        } catch (error) {
            // Handle invalid token
            return NextResponse.json(
                { error: "Invalid token" },
                { status: 401 }
            );
        }

    } catch (error) {
        console.error("Error in profile API:", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}

