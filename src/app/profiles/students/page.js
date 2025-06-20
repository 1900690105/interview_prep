"use client";
import React, { useState } from "react";
import {
  Eye,
  EyeOff,
  User,
  Mail,
  Lock,
  BookOpen,
  Target,
  Trophy,
  ArrowRight,
  Loader2,
} from "lucide-react";

// Firebase imports
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import {
  getFirestore,
  collection,
  addDoc,
  query,
  where,
  getDocs,
  serverTimestamp,
} from "firebase/firestore";
import { auth, db } from "@/lib/firebaseConfig";

// Auth providers
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

const AuthPortal = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    // Clear errors when user starts typing
    if (error) setError("");
  };

  // Check if email already exists in Firestore
  const checkEmailExists = async (email) => {
    try {
      const studentsRef = collection(db, "students");
      const q = query(studentsRef, where("email", "==", email));
      const querySnapshot = await getDocs(q);
      return !querySnapshot.empty;
    } catch (error) {
      console.error("Error checking email:", error);
      return false;
    }
  };

  // Add user data to Firestore
  const addUserToFirestore = async (userId, userData) => {
    try {
      const studentsRef = collection(db, "students");
      await addDoc(studentsRef, {
        uid: userId,
        name: userData.name,
        email: userData.email,
        createdAt: serverTimestamp(),
        lastLogin: serverTimestamp(),
        profileCompleted: false,
        totalInterviews: 0,
        averageScore: 0,
      });
    } catch (error) {
      console.error("Error adding user to Firestore:", error);
      throw error;
    }
  };

  // Handle user registration
  const handleRegister = async () => {
    try {
      // Validation
      if (!formData.name.trim()) {
        setError("Please enter your full name");
        return;
      }
      if (formData.password !== formData.confirmPassword) {
        setError("Passwords do not match");
        return;
      }
      if (formData.password.length < 6) {
        setError("Password must be at least 6 characters long");
        return;
      }

      setLoading(true);
      setError("");

      // Check if email already exists in Firestore
      const emailExists = await checkEmailExists(formData.email);
      if (emailExists) {
        setError("An account with this email already exists");
        return;
      }

      // Create user account
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );

      // Add user data to Firestore
      await addUserToFirestore(userCredential.user.uid, {
        name: formData.name,
        email: formData.email,
      });

      setSuccess("Account created successfully! You can now sign in.");
      setFormData({ name: "", email: "", password: "", confirmPassword: "" });

      // Switch to login form after successful registration
      setTimeout(() => {
        setIsLogin(true);
        setSuccess("");
      }, 2000);
    } catch (error) {
      console.error("Registration error:", error);
      switch (error.code) {
        case "auth/email-already-in-use":
          setError("This email is already registered");
          break;
        case "auth/invalid-email":
          setError("Please enter a valid email address");
          break;
        case "auth/weak-password":
          setError("Password is too weak");
          break;
        default:
          setError("Registration failed. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  // Handle user login
  const handleLogin = async () => {
    try {
      if (!formData.email || !formData.password) {
        setError("Please enter both email and password");
        return;
      }

      setLoading(true);
      setError("");

      const userCredential = await signInWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );

      setSuccess("Login successful! Welcome back.");
      console.log("User logged in:", userCredential.user);

      // Here you can redirect to dashboard or main app
      // window.location.href = "/dashboard";
    } catch (error) {
      console.error("Login error:", error);
      switch (error.code) {
        case "auth/user-not-found":
          setError("No account found with this email");
          break;
        case "auth/wrong-password":
          setError("Incorrect password");
          break;
        case "auth/invalid-email":
          setError("Please enter a valid email address");
          break;
        case "auth/too-many-requests":
          setError("Too many failed attempts. Please try again later.");
          break;
        default:
          setError("Login failed. Please check your credentials.");
      }
    } finally {
      setLoading(false);
    }
  };

  // Handle Google sign-in
  const handleGoogleSignIn = async () => {
    try {
      setLoading(true);
      setError("");

      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;

      // Check if user already exists in Firestore
      const emailExists = await checkEmailExists(user.email);

      if (!emailExists) {
        // Add new user to Firestore
        await addUserToFirestore(user.uid, {
          name: user.displayName || "Google User",
          email: user.email,
        });
      }

      setSuccess("Google sign-in successful!");
      console.log("Google user:", user);
    } catch (error) {
      console.error("Google sign-in error:", error);
      setError("Google sign-in failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Handle Facebook sign-in
  const handleFacebookSignIn = async () => {
    try {
      setLoading(true);
      setError("");

      const result = await signInWithPopup(auth, facebookProvider);
      const user = result.user;

      // Check if user already exists in Firestore
      const emailExists = await checkEmailExists(user.email);

      if (!emailExists) {
        // Add new user to Firestore
        await addUserToFirestore(user.uid, {
          name: user.displayName || "Facebook User",
          email: user.email,
        });
      }

      setSuccess("Facebook sign-in successful!");
      console.log("Facebook user:", user);
    } catch (error) {
      console.error("Facebook sign-in error:", error);
      setError("Facebook sign-in failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      handleLogin();
    } else {
      handleRegister();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-8 items-center">
        {/* Left Side - Branding & Features */}
        <div className="hidden lg:block space-y-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                InterviewAce
              </h1>
            </div>
            <p className="text-xl text-gray-600 leading-relaxed">
              Master your interviews with AI-powered practice sessions and
              personalized feedback
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <BookOpen className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">
                  Comprehensive Question Bank
                </h3>
                <p className="text-gray-600 text-sm">
                  Access 1000+ interview questions across all tech domains
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Target className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">
                  AI-Powered Mock Interviews
                </h3>
                <p className="text-gray-600 text-sm">
                  Practice with realistic interview simulations
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Trophy className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">
                  Performance Analytics
                </h3>
                <p className="text-gray-600 text-sm">
                  Track your progress and improve weak areas
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Auth Form */}
        <div className="w-full max-w-md mx-auto lg:mx-0">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            {/* Mobile Header */}
            <div className="lg:hidden text-center mb-8">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                  <Target className="w-5 h-5 text-white" />
                </div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  InterviewAce
                </h1>
              </div>
            </div>

            {/* Toggle Buttons */}
            <div className="flex bg-gray-100 rounded-lg p-1 mb-8">
              <button
                onClick={() => {
                  setIsLogin(true);
                  setError("");
                  setSuccess("");
                }}
                className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all duration-200 ${
                  isLogin
                    ? "bg-white text-gray-900 shadow-sm"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Sign In
              </button>
              <button
                onClick={() => {
                  setIsLogin(false);
                  setError("");
                  setSuccess("");
                }}
                className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all duration-200 ${
                  !isLogin
                    ? "bg-white text-gray-900 shadow-sm"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Sign Up
              </button>
            </div>

            {/* Error/Success Messages */}
            {error && (
              <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-700 rounded-lg text-sm">
                {error}
              </div>
            )}
            {success && (
              <div className="mb-4 p-3 bg-green-50 border border-green-200 text-green-700 rounded-lg text-sm">
                {success}
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field (Register Only) */}
              {!isLogin && (
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Full Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                      placeholder="Enter your full name"
                      required={!isLogin}
                      disabled={loading}
                    />
                  </div>
                </div>
              )}

              {/* Email Field */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                    placeholder="Enter your email"
                    required
                    disabled={loading}
                  />
                </div>
              </div>

              {/* Password Field */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                    placeholder="Enter your password"
                    required
                    disabled={loading}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                    disabled={loading}
                  >
                    {showPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Confirm Password Field (Register Only) */}
              {!isLogin && (
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Confirm Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                      placeholder="Confirm your password"
                      required={!isLogin}
                      disabled={loading}
                    />
                    <button
                      type="button"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                      disabled={loading}
                    >
                      {showConfirmPassword ? (
                        <EyeOff className="w-5 h-5" />
                      ) : (
                        <Eye className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                </div>
              )}

              {/* Forgot Password (Login Only) */}
              {isLogin && (
                <div className="flex justify-end">
                  <button
                    type="button"
                    className="text-sm text-blue-600 hover:text-blue-700 font-medium transition-colors"
                    disabled={loading}
                  >
                    Forgot password?
                  </button>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-gray-400 disabled:to-gray-400 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 disabled:transform-none disabled:shadow-lg"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Processing...</span>
                  </>
                ) : (
                  <>
                    <span>{isLogin ? "Sign In" : "Create Account"}</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>

              {/* Terms (Register Only) */}
              {!isLogin && (
                <p className="text-xs text-gray-600 text-center leading-relaxed">
                  By creating an account, you agree to our{" "}
                  <button className="text-blue-600 hover:text-blue-700 font-medium">
                    Terms of Service
                  </button>{" "}
                  and{" "}
                  <button className="text-blue-600 hover:text-blue-700 font-medium">
                    Privacy Policy
                  </button>
                </p>
              )}

              {/* Divider */}
              <div className="my-8 flex items-center">
                <div className="flex-1 border-t border-gray-300"></div>
                <span className="px-4 text-sm text-gray-500 bg-white">or</span>
                <div className="flex-1 border-t border-gray-300"></div>
              </div>

              {/* Social Login */}
              <div className="space-y-3">
                <button
                  type="button"
                  onClick={handleGoogleSignIn}
                  disabled={loading}
                  className="w-full flex items-center justify-center space-x-3 py-3 px-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors disabled:bg-gray-50 disabled:cursor-not-allowed"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path
                      fill="#4285F4"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    />
                  </svg>
                  <span className="text-gray-700 font-medium">
                    Continue with Google
                  </span>
                </button>

                <button
                  type="button"
                  onClick={handleFacebookSignIn}
                  disabled={loading}
                  className="w-full flex items-center justify-center space-x-3 py-3 px-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors disabled:bg-gray-50 disabled:cursor-not-allowed"
                >
                  <svg className="w-5 h-5" fill="#1877F2" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  <span className="text-gray-700 font-medium">
                    Continue with Facebook
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPortal;

// "use client";
// import React, { useState } from "react";
// import {
//   Eye,
//   EyeOff,
//   User,
//   Mail,
//   Lock,
//   BookOpen,
//   Target,
//   Trophy,
//   ArrowRight,
// } from "lucide-react";

// const AuthPortal = () => {
//   const [isLogin, setIsLogin] = useState(true);
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//   });

//   const handleInputChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form submitted:", formData);
//     // Handle form submission logic here
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center p-4">
//       <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-8 items-center">
//         {/* Left Side - Branding & Features */}
//         <div className="hidden lg:block space-y-8">
//           <div className="space-y-4">
//             <div className="flex items-center space-x-3">
//               <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
//                 <Target className="w-6 h-6 text-white" />
//               </div>
//               <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
//                 InterviewAce
//               </h1>
//             </div>
//             <p className="text-xl text-gray-600 leading-relaxed">
//               Master your interviews with AI-powered practice sessions and
//               personalized feedback
//             </p>
//           </div>

//           <div className="space-y-6">
//             <div className="flex items-start space-x-4">
//               <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
//                 <BookOpen className="w-5 h-5 text-blue-600" />
//               </div>
//               <div>
//                 <h3 className="font-semibold text-gray-900">
//                   Comprehensive Question Bank
//                 </h3>
//                 <p className="text-gray-600 text-sm">
//                   Access 1000+ interview questions across all tech domains
//                 </p>
//               </div>
//             </div>

//             <div className="flex items-start space-x-4">
//               <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
//                 <Target className="w-5 h-5 text-purple-600" />
//               </div>
//               <div>
//                 <h3 className="font-semibold text-gray-900">
//                   AI-Powered Mock Interviews
//                 </h3>
//                 <p className="text-gray-600 text-sm">
//                   Practice with realistic interview simulations
//                 </p>
//               </div>
//             </div>

//             <div className="flex items-start space-x-4">
//               <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
//                 <Trophy className="w-5 h-5 text-green-600" />
//               </div>
//               <div>
//                 <h3 className="font-semibold text-gray-900">
//                   Performance Analytics
//                 </h3>
//                 <p className="text-gray-600 text-sm">
//                   Track your progress and improve weak areas
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Right Side - Auth Form */}
//         <div className="w-full max-w-md mx-auto lg:mx-0">
//           <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
//             {/* Mobile Header */}
//             <div className="lg:hidden text-center mb-8">
//               <div className="flex items-center justify-center space-x-3 mb-4">
//                 <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
//                   <Target className="w-5 h-5 text-white" />
//                 </div>
//                 <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
//                   InterviewAce
//                 </h1>
//               </div>
//             </div>

//             {/* Toggle Buttons */}
//             <div className="flex bg-gray-100 rounded-lg p-1 mb-8">
//               <button
//                 onClick={() => setIsLogin(true)}
//                 className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all duration-200 ${
//                   isLogin
//                     ? "bg-white text-gray-900 shadow-sm"
//                     : "text-gray-600 hover:text-gray-900"
//                 }`}
//               >
//                 Sign In
//               </button>
//               <button
//                 onClick={() => setIsLogin(false)}
//                 className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all duration-200 ${
//                   !isLogin
//                     ? "bg-white text-gray-900 shadow-sm"
//                     : "text-gray-600 hover:text-gray-900"
//                 }`}
//               >
//                 Sign Up
//               </button>
//             </div>

//             {/* Form */}

//             <div className="space-y-6">
//               {/* Name Field (Register Only) */}
//               {!isLogin && (
//                 <div className="space-y-2">
//                   <label className="text-sm font-medium text-gray-700">
//                     Full Name
//                   </label>
//                   <div className="relative">
//                     <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
//                     <input
//                       type="text"
//                       name="name"
//                       value={formData.name}
//                       onChange={handleInputChange}
//                       className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
//                       placeholder="Enter your full name"
//                       required={!isLogin}
//                     />
//                   </div>
//                 </div>
//               )}

//               {/* Email Field */}
//               <div className="space-y-2">
//                 <label className="text-sm font-medium text-gray-700">
//                   Email Address
//                 </label>
//                 <div className="relative">
//                   <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
//                   <input
//                     type="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleInputChange}
//                     className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
//                     placeholder="Enter your email"
//                     required
//                   />
//                 </div>
//               </div>

//               {/* Password Field */}
//               <div className="space-y-2">
//                 <label className="text-sm font-medium text-gray-700">
//                   Password
//                 </label>
//                 <div className="relative">
//                   <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
//                   <input
//                     type={showPassword ? "text" : "password"}
//                     name="password"
//                     value={formData.password}
//                     onChange={handleInputChange}
//                     className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
//                     placeholder="Enter your password"
//                     required
//                   />
//                   <button
//                     type="button"
//                     onClick={() => setShowPassword(!showPassword)}
//                     className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
//                   >
//                     {showPassword ? (
//                       <EyeOff className="w-5 h-5" />
//                     ) : (
//                       <Eye className="w-5 h-5" />
//                     )}
//                   </button>
//                 </div>
//               </div>

//               {/* Confirm Password Field (Register Only) */}
//               {!isLogin && (
//                 <div className="space-y-2">
//                   <label className="text-sm font-medium text-gray-700">
//                     Confirm Password
//                   </label>
//                   <div className="relative">
//                     <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
//                     <input
//                       type={showConfirmPassword ? "text" : "password"}
//                       name="confirmPassword"
//                       value={formData.confirmPassword}
//                       onChange={handleInputChange}
//                       className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
//                       placeholder="Confirm your password"
//                       required={!isLogin}
//                     />
//                     <button
//                       type="button"
//                       onClick={() =>
//                         setShowConfirmPassword(!showConfirmPassword)
//                       }
//                       className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
//                     >
//                       {showConfirmPassword ? (
//                         <EyeOff className="w-5 h-5" />
//                       ) : (
//                         <Eye className="w-5 h-5" />
//                       )}
//                     </button>
//                   </div>
//                 </div>
//               )}

//               {/* Forgot Password (Login Only) */}
//               {isLogin && (
//                 <div className="flex justify-end">
//                   <button
//                     type="button"
//                     className="text-sm text-blue-600 hover:text-blue-700 font-medium transition-colors"
//                   >
//                     Forgot password?
//                   </button>
//                 </div>
//               )}

//               {/* Submit Button */}
//               <button
//                 type="submit"
//                 className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
//               >
//                 <span>{isLogin ? "Sign In" : "Create Account"}</span>
//                 <ArrowRight className="w-4 h-4" />
//               </button>

//               {/* Terms (Register Only) */}
//               {!isLogin && (
//                 <p className="text-xs text-gray-600 text-center leading-relaxed">
//                   By creating an account, you agree to our{" "}
//                   <button className="text-blue-600 hover:text-blue-700 font-medium">
//                     Terms of Service
//                   </button>{" "}
//                   and{" "}
//                   <button className="text-blue-600 hover:text-blue-700 font-medium">
//                     Privacy Policy
//                   </button>
//                 </p>
//               )}

//               {/* Divider */}
//               <div className="my-8 flex items-center">
//                 <div className="flex-1 border-t border-gray-300"></div>
//                 <span className="px-4 text-sm text-gray-500 bg-white">or</span>
//                 <div className="flex-1 border-t border-gray-300"></div>
//               </div>

//               {/* Social Login */}
//               <div className="space-y-3">
//                 <button className="w-full flex items-center justify-center space-x-3 py-3 px-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
//                   <svg className="w-5 h-5" viewBox="0 0 24 24">
//                     <path
//                       fill="#4285F4"
//                       d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
//                     />
//                     <path
//                       fill="#34A853"
//                       d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
//                     />
//                     <path
//                       fill="#FBBC05"
//                       d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
//                     />
//                     <path
//                       fill="#EA4335"
//                       d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
//                     />
//                   </svg>
//                   <span className="text-gray-700 font-medium">
//                     Continue with Google
//                   </span>
//                 </button>

//                 <button className="w-full flex items-center justify-center space-x-3 py-3 px-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
//                   <svg className="w-5 h-5" fill="#1877F2" viewBox="0 0 24 24">
//                     <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
//                   </svg>
//                   <span className="text-gray-700 font-medium">
//                     Continue with Facebook
//                   </span>
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AuthPortal;

// "use client";
// import dynamic from "next/dynamic";
// import { useSearchParams } from "next/navigation";

// const componentMap = {
//   AuthPortal: dynamic(() => import("@/app/profiles/students/components/Login")),
// };

// const student = () => {
//   const searchParams = useSearchParams();
//   const page_name = searchParams.get("page");
//   const Component =
//     componentMap[page_name] ||
//     dynamic(() => import("@/app/components/Instruction"));
//   return (
//     <>
//       <Component />
//     </>
//   );
// };

// export default student;
