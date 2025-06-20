"use client";
import React, { useState } from "react";

const Registration = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    } else if (formData.firstName.trim().length < 2) {
      newErrors.firstName = "First name must be at least 2 characters";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    } else if (formData.lastName.trim().length < 2) {
      newErrors.lastName = "Last name must be at least 2 characters";
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(formData.password)) {
      newErrors.password =
        "Password must contain at least one uppercase letter, one lowercase letter, and one number";
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    if (!acceptTerms) {
      newErrors.terms = "You must accept the terms and conditions";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log("Registration attempt:", formData);
      // Handle successful registration here
    } catch (error) {
      console.error("Registration error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSignup = () => {
    console.log("Google signup clicked");
    // Implement Google OAuth here
  };

  const getPasswordStrength = () => {
    const password = formData.password;
    let strength = 0;

    if (password.length >= 8) strength++;
    if (/[a-z]/.test(password)) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/\d/.test(password)) strength++;
    if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) strength++;

    return strength;
  };

  const getPasswordStrengthText = () => {
    const strength = getPasswordStrength();
    if (strength <= 1) return { text: "Very Weak", color: "text-red-600" };
    if (strength === 2) return { text: "Weak", color: "text-orange-600" };
    if (strength === 3) return { text: "Fair", color: "text-yellow-600" };
    if (strength === 4) return { text: "Good", color: "text-blue-600" };
    return { text: "Strong", color: "text-green-600" };
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        {/* Header */}
        <header className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Create Account
          </h1>
          <p className="text-gray-600">
            Join us today and get started in minutes
          </p>
        </header>

        {/* Main Registration Form */}
        <main>
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            {/* Google Signup Button */}
            <button
              type="button"
              onClick={handleGoogleSignup}
              className="w-full flex items-center justify-center px-4 py-3 border border-gray-300 rounded-lg shadow-sm bg-white text-gray-700 font-medium hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-colors duration-200 mb-6"
              aria-label="Sign up with Google"
            >
              <svg
                className="w-5 h-5 mr-3"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
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
              Sign up with Google
            </button>

            {/* Divider */}
            <div className="relative mb-6">
              <div
                className="absolute inset-0 flex items-center"
                aria-hidden="true"
              >
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">
                  Or create account with email
                </span>
              </div>
            </div>

            {/* Registration Form */}
            <div role="form">
              {/* Name Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                {/* First Name */}
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors duration-200 ${
                      errors.firstName
                        ? "border-red-300 bg-red-50"
                        : "border-gray-300 hover:border-gray-400"
                    }`}
                    placeholder="John"
                    autoComplete="given-name"
                    aria-describedby={
                      errors.firstName ? "firstName-error" : undefined
                    }
                    aria-invalid={errors.firstName ? "true" : "false"}
                  />
                  {errors.firstName && (
                    <p
                      id="firstName-error"
                      className="mt-2 text-sm text-red-600"
                      role="alert"
                    >
                      {errors.firstName}
                    </p>
                  )}
                </div>

                {/* Last Name */}
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors duration-200 ${
                      errors.lastName
                        ? "border-red-300 bg-red-50"
                        : "border-gray-300 hover:border-gray-400"
                    }`}
                    placeholder="Doe"
                    autoComplete="family-name"
                    aria-describedby={
                      errors.lastName ? "lastName-error" : undefined
                    }
                    aria-invalid={errors.lastName ? "true" : "false"}
                  />
                  {errors.lastName && (
                    <p
                      id="lastName-error"
                      className="mt-2 text-sm text-red-600"
                      role="alert"
                    >
                      {errors.lastName}
                    </p>
                  )}
                </div>
              </div>

              {/* Email Field */}
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors duration-200 ${
                    errors.email
                      ? "border-red-300 bg-red-50"
                      : "border-gray-300 hover:border-gray-400"
                  }`}
                  placeholder="john.doe@example.com"
                  autoComplete="email"
                  aria-describedby={errors.email ? "email-error" : undefined}
                  aria-invalid={errors.email ? "true" : "false"}
                />
                {errors.email && (
                  <p
                    id="email-error"
                    className="mt-2 text-sm text-red-600"
                    role="alert"
                  >
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Password Field */}
              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 pr-12 border rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors duration-200 ${
                      errors.password
                        ? "border-red-300 bg-red-50"
                        : "border-gray-300 hover:border-gray-400"
                    }`}
                    placeholder="Create a strong password"
                    autoComplete="new-password"
                    aria-describedby={`${
                      errors.password ? "password-error" : ""
                    } password-requirements password-strength`}
                    aria-invalid={errors.password ? "true" : "false"}
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 focus:outline-none focus:text-gray-600"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                  >
                    {showPassword ? (
                      <svg
                        className="h-5 w-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="h-5 w-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                    )}
                  </button>
                </div>

                {/* Password Strength Indicator */}
                {formData.password && (
                  <div className="mt-2">
                    <div className="flex items-center space-x-2">
                      <div className="flex-1 bg-gray-200 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full transition-all duration-300 ${
                            getPasswordStrength() <= 1
                              ? "bg-red-500 w-1/5"
                              : getPasswordStrength() === 2
                              ? "bg-orange-500 w-2/5"
                              : getPasswordStrength() === 3
                              ? "bg-yellow-500 w-3/5"
                              : getPasswordStrength() === 4
                              ? "bg-blue-500 w-4/5"
                              : "bg-green-500 w-full"
                          }`}
                        ></div>
                      </div>
                      <span
                        id="password-strength"
                        className={`text-sm font-medium ${
                          getPasswordStrengthText().color
                        }`}
                      >
                        {getPasswordStrengthText().text}
                      </span>
                    </div>
                  </div>
                )}

                <p
                  id="password-requirements"
                  className="mt-2 text-sm text-gray-500"
                >
                  Must be at least 8 characters with uppercase, lowercase, and
                  number
                </p>

                {errors.password && (
                  <p
                    id="password-error"
                    className="mt-2 text-sm text-red-600"
                    role="alert"
                  >
                    {errors.password}
                  </p>
                )}
              </div>

              {/* Confirm Password Field */}
              <div className="mb-6">
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Confirm Password
                </label>
                <div className="relative">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 pr-12 border rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors duration-200 ${
                      errors.confirmPassword
                        ? "border-red-300 bg-red-50"
                        : "border-gray-300 hover:border-gray-400"
                    }`}
                    placeholder="Confirm your password"
                    autoComplete="new-password"
                    aria-describedby={
                      errors.confirmPassword
                        ? "confirmPassword-error"
                        : undefined
                    }
                    aria-invalid={errors.confirmPassword ? "true" : "false"}
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 focus:outline-none focus:text-gray-600"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    aria-label={
                      showConfirmPassword
                        ? "Hide confirm password"
                        : "Show confirm password"
                    }
                  >
                    {showConfirmPassword ? (
                      <svg
                        className="h-5 w-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="h-5 w-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                    )}
                  </button>
                </div>
                {errors.confirmPassword && (
                  <p
                    id="confirmPassword-error"
                    className="mt-2 text-sm text-red-600"
                    role="alert"
                  >
                    {errors.confirmPassword}
                  </p>
                )}
              </div>

              {/* Terms and Conditions */}
              <div className="mb-6">
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="terms"
                    checked={acceptTerms}
                    onChange={(e) => {
                      setAcceptTerms(e.target.checked);
                      if (errors.terms) {
                        setErrors((prev) => ({
                          ...prev,
                          terms: "",
                        }));
                      }
                    }}
                    className="mt-1 h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                    aria-describedby={
                      errors.terms ? "terms-error" : "terms-description"
                    }
                    aria-invalid={errors.terms ? "true" : "false"}
                  />
                  <div className="ml-3">
                    <label htmlFor="terms" className="text-sm text-gray-700">
                      I agree to the{" "}
                      <a
                        href="#terms"
                        className="text-purple-600 hover:text-purple-500 underline focus:outline-none focus:ring-2 focus:ring-purple-500 rounded"
                      >
                        Terms of Service
                      </a>{" "}
                      and{" "}
                      <a
                        href="#privacy"
                        className="text-purple-600 hover:text-purple-500 underline focus:outline-none focus:ring-2 focus:ring-purple-500 rounded"
                      >
                        Privacy Policy
                      </a>
                    </label>
                    <p
                      id="terms-description"
                      className="text-xs text-gray-500 mt-1"
                    >
                      Required to create an account
                    </p>
                  </div>
                </div>
                {errors.terms && (
                  <p
                    id="terms-error"
                    className="mt-2 text-sm text-red-600"
                    role="alert"
                  >
                    {errors.terms}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                onClick={handleSubmit}
                disabled={isLoading}
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
                aria-describedby="submit-button-description"
              >
                {isLoading ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Creating Account...
                  </>
                ) : (
                  "Create Account"
                )}
              </button>
              <p id="submit-button-description" className="sr-only">
                Click to create your new account
              </p>
            </div>
          </div>

          {/* Sign In Link */}
          <p className="mt-8 text-center text-sm text-gray-600">
            Already have an account?{" "}
            <a
              href="#signin"
              className="font-medium text-purple-600 hover:text-purple-500 focus:outline-none focus:underline transition-colors duration-200"
            >
              Sign in here
            </a>
          </p>
        </main>
      </div>
    </div>
  );
};

export default Registration;
