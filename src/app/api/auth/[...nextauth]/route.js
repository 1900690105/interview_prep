// import NextAuth from "next-auth";
// import GoogleProvider from "next-auth/providers/google";
// import CredentialsProvider from "next-auth/providers/credentials";
// import bcrypt from "bcryptjs";

// const users = [
//   {
//     id: "1",
//     email: "user@gmail.com",
//     name: "Test User",
//     hashedPassword: bcrypt.hashSync("password123", 10), // Hashing the password
//   },
// ];

// export const authOptions = {
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//     }),
//     CredentialsProvider({
//       name: "Credentials",
//       credentials: {
//         email: { label: "Email", type: "email" },
//         password: { label: "Password", type: "password" },
//       },
//       async authorize(credentials) {
//         if (!credentials?.email || !credentials?.password) {
//           throw new Error("Please enter an email and password");
//         }

//         // Find user in the hardcoded list
//         const user = users.find((user) => user.email === credentials.email);

//         if (!user) {
//           throw new Error("No user found with this email");
//         }

//         // Check password
//         const passwordMatch = await bcrypt.compare(credentials.password, user.hashedPassword);

//         if (!passwordMatch) {
//           throw new Error("Incorrect password");
//         }

//         return {
//           id: user.id,
//           email: user.email,
//           name: user.name,
//           method: "credentials", // Indicating login method
//         };
//       },
//     }),
//   ],
//   callbacks: {
//     async jwt({ token, user, account }) {
//       // Add method information to the token
//       if (user) {
//         token.id = user.id;
//         token.name = user.name;
//         token.email = user.email;
//         token.method = user.method || (account?.provider === "google" ? "google" : "credentials");
//       }
//       return token;
//     },
//     async session({ session, token }) {
//       // Add method information to the session
//       if (token) {
//         session.user.id = token.id;
//         session.user.name = token.name;
//         session.user.email = token.email;
//         session.user.method = token.method;
//       }
//       return session;
//     },
//   },
//   pages: {
//     signIn: "/auth/signin",
//   },
//   session: {
//     strategy: "jwt",
//     maxAge: 60, // 30 minutes - Set the maxAge of the session (expiry time in seconds)
//   },
//   jwt: {
//     secret: process.env.NEXTAUTH_SECRET,
//     maxAge: 60, // 30 minutes - Set the expiry time for JWT (in seconds)
//   },
//   secret: process.env.NEXTAUTH_SECRET,
// };

// const handler = NextAuth(authOptions);
// export { handler as GET, handler as POST };





import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  pages: {
    signIn: "/auth/signin", // Optional custom sign-in page
  },
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };
