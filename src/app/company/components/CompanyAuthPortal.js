"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Eye,
  EyeOff,
  User,
  Mail,
  Lock,
  Building,
  Users,
  BarChart3,
  Shield,
  Globe,
  Phone,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

// Add a basic CSS for sr-only. In a real app, this would be in your main CSS file.
// Or if using a utility-first framework, ensure these classes are defined.
// .sr-only {
//   position: absolute;
//   width: 1px;
//   height: 1px;
//   padding: 0;
//   margin: -1px;
//   overflow: hidden;
//   clip: rect(0, 0, 0, 0);
//   white-space: nowrap;
//   border-width: 0;
// }
// .sr-only-focusable:active,
// .sr-only-focusable:focus {
//   position: static;
//   width: auto;
//   height: auto;
//   overflow: visible;
//   clip: auto;
//   white-space: normal;
// }

const CompanyAuthPortal = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    companyName: "",
    contactName: "",
    email: "",
    phone: "",
    companySize: "",
    industry: "",
    website: "",
    password: "",
    confirmPassword: "",
  });
  const [liveRegionMessage, setLiveRegionMessage] = useState(""); // State for ARIA live region

  // Refs for focus management
  const emailInputRef = useRef(null);
  const companyNameInputRef = useRef(null);
  const authFormRef = useRef(null);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Company form submitted:", formData);
    // Handle form submission logic here
    if (isLogin) {
      setLiveRegionMessage("Sign in attempt submitted.");
    } else {
      setLiveRegionMessage("Registration attempt submitted.");
    }
    // For a real application, you'd likely redirect or show a success/error message
  };

  const companySizes = [
    { value: "1-10", label: "1-10 employees" },
    { value: "11-50", label: "11-50 employees" },
    { value: "51-200", label: "51-200 employees" },
    { value: "201-1000", label: "201-1000 employees" },
    { value: "1000+", label: "1000+ employees" },
  ];

  const industries = [
    "Technology",
    "Finance",
    "Healthcare",
    "E-commerce",
    "Manufacturing",
    "Consulting",
    "Education",
    "Media",
    "Real Estate",
    "Other",
  ];

  // Effect for focus management when switching between login/register forms
  useEffect(() => {
    if (isLogin && emailInputRef.current) {
      emailInputRef.current.focus();
      setLiveRegionMessage("Switched to Company Sign In form.");
    } else if (!isLogin && companyNameInputRef.current) {
      companyNameInputRef.current.focus();
      setLiveRegionMessage("Switched to Get Started (Registration) form.");
    }
  }, [isLogin]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Skip Navigation Link */}
      <a href="#main-content" className="sr-only-focusable skip-link">
        Skip to main content
      </a>

      {/* Live Region for ARIA announcements */}
      <div
        className="sr-only"
        aria-live="polite"
        aria-atomic="true"
        role="status"
      >
        {liveRegionMessage}
      </div>

      <div className="flex items-center justify-center p-4 pt-8">
        <main
          id="main-content"
          className="w-full max-w-6xl grid lg:grid-cols-2 gap-12 items-start"
        >
          {/* Left Side - Company Benefits */}
          <section aria-labelledby="benefits-heading" className="space-y-8">
            <header className="space-y-4">
              <h1
                id="benefits-heading"
                className="text-4xl font-bold text-gray-900 leading-tight"
              >
                Streamline Your
                <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Hiring Process
                </span>
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                Join 500+ companies using InterviewAce to conduct efficient,
                AI-powered technical interviews and find the best talent faster.
              </p>
            </header>
            {/* Company Stats */}
            <div
              className="grid grid-cols-3 gap-6 bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
              aria-label="Company Statistics"
            >
              <div
                className="text-center"
                role="group"
                aria-label="500 plus companies"
              >
                <div className="text-2xl font-bold text-blue-600">500+</div>
                <div className="text-sm text-gray-600">Companies</div>
              </div>
              <div
                className="text-center"
                role="group"
                aria-label="50 thousand plus interviews"
              >
                <div className="text-2xl font-bold text-indigo-600">50K+</div>
                <div className="text-sm text-gray-600">Interviews</div>
              </div>
              <div
                className="text-center"
                role="group"
                aria-label="85 percent time saved"
              >
                <div className="text-2xl font-bold text-purple-600">85%</div>
                <div className="text-sm text-gray-600">Time Saved</div>
              </div>
            </div>
            {/* Features */}
            <h2 className="sr-only" id="features-heading">
              Key Features
            </h2>{" "}
            {/* Hidden heading for features list */}
            <ul className="space-y-6" aria-labelledby="features-heading">
              <li className="flex items-start space-x-4">
                <div
                  className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0"
                  aria-hidden="true"
                >
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg">
                    Team Collaboration
                  </h3>
                  <p className="text-gray-600">
                    Invite team members, share interview results, and
                    collaborate on hiring decisions in real-time.
                  </p>
                </div>
              </li>

              <li className="flex items-start space-x-4">
                <div
                  className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center flex-shrink-0"
                  aria-hidden="true"
                >
                  <BarChart3 className="w-6 h-6 text-indigo-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg">
                    Advanced Analytics
                  </h3>
                  <p className="text-gray-600">
                    Get detailed insights on candidate performance, team
                    efficiency, and hiring metrics.
                  </p>
                </div>
              </li>

              <li className="flex items-start space-x-4">
                <div
                  className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0"
                  aria-hidden="true"
                >
                  <Shield className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg">
                    Enterprise Security
                  </h3>
                  <p className="text-gray-600">
                    SOC 2 compliant with advanced security features and data
                    protection.
                  </p>
                </div>
              </li>
            </ul>
            {/* Trusted by */}
            <div className="space-y-4">
              <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                Trusted by leading companies
              </p>
              <div
                className="flex items-center space-x-8 opacity-60"
                aria-label="Placeholder logos for trusted companies"
              >
                <span className="sr-only">Placeholder company logo 1</span>
                <div
                  className="bg-gray-200 h-8 w-20 rounded"
                  aria-hidden="true"
                ></div>
                <span className="sr-only">Placeholder company logo 2</span>
                <div
                  className="bg-gray-200 h-8 w-16 rounded"
                  aria-hidden="true"
                ></div>
                <span className="sr-only">Placeholder company logo 3</span>
                <div
                  className="bg-gray-200 h-8 w-24 rounded"
                  aria-hidden="true"
                ></div>
                <span className="sr-only">Placeholder company logo 4</span>
                <div
                  className="bg-gray-200 h-8 w-18 rounded"
                  aria-hidden="true"
                ></div>
              </div>
            </div>
          </section>

          {/* Right Side - Auth Form */}
          <section
            aria-labelledby="auth-form-heading"
            className="w-full max-w-lg mx-auto lg:mx-0"
          >
            <h2 id="auth-form-heading" className="sr-only">
              Company Authentication Portal
            </h2>
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              {/* Toggle Buttons */}
              <div
                role="tablist"
                className="flex bg-gray-100 rounded-lg p-1 mb-8"
              >
                <button
                  role="tab"
                  id="tab-signin"
                  aria-controls="panel-signin"
                  aria-selected={isLogin}
                  tabIndex={isLogin ? 0 : -1}
                  onClick={() => setIsLogin(true)}
                  className={`flex-1 py-3 px-4 rounded-md text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    isLogin
                      ? "bg-white text-gray-900 shadow-sm"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  Company Sign In
                </button>
                <button
                  role="tab"
                  id="tab-getstarted"
                  aria-controls="panel-register"
                  aria-selected={!isLogin}
                  tabIndex={!isLogin ? 0 : -1}
                  onClick={() => setIsLogin(false)}
                  className={`flex-1 py-3 px-4 rounded-md text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    !isLogin
                      ? "bg-white text-gray-900 shadow-sm"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  Get Started
                </button>
              </div>

              {/* Forms */}
              {/* Login Form Panel */}
              <div
                id="panel-signin"
                role="tabpanel"
                aria-labelledby="tab-signin"
                tabIndex={isLogin ? 0 : -1} // Make panel focusable when active
                hidden={!isLogin} // Hide visually and from accessibility tree when not active
              >
                <form
                  onSubmit={handleSubmit}
                  className="space-y-6"
                  ref={authFormRef}
                >
                  {/* Email Field */}
                  <div className="space-y-2">
                    <label
                      htmlFor="email-login"
                      className="text-sm font-medium text-gray-700"
                    >
                      Company Email{" "}
                      <span className="text-red-500" aria-hidden="true">
                        *
                      </span>
                    </label>
                    <div className="relative">
                      <Mail
                        className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                        aria-hidden="true"
                      />
                      <input
                        type="email"
                        id="email-login"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                        placeholder="company@example.com"
                        required
                        aria-required="true"
                        ref={emailInputRef} // Attach ref for programmatic focus
                      />
                    </div>
                  </div>

                  {/* Password Field */}
                  <div className="space-y-2">
                    <label
                      htmlFor="password-login"
                      className="text-sm font-medium text-gray-700"
                    >
                      Password{" "}
                      <span className="text-red-500" aria-hidden="true">
                        *
                      </span>
                    </label>
                    <div className="relative">
                      <Lock
                        className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                        aria-hidden="true"
                      />
                      <input
                        type={showPassword ? "text" : "password"}
                        id="password-login"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                        placeholder="Enter your password"
                        required
                        aria-required="true"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-full p-0.5"
                        aria-label={
                          showPassword ? "Hide password" : "Show password"
                        }
                        aria-controls="password-login" // Links button to the input it controls
                        aria-expanded={showPassword} // Indicates if password is currently shown
                      >
                        {showPassword ? (
                          <EyeOff className="w-5 h-5" aria-hidden="true" />
                        ) : (
                          <Eye className="w-5 h-5" aria-hidden="true" />
                        )}
                        <span className="sr-only">
                          {showPassword ? "Hide password" : "Show password"}
                        </span>
                      </button>
                    </div>
                  </div>

                  {/* Forgot Password (Login Only) */}
                  <div className="flex justify-end">
                    <button
                      type="button"
                      className="text-sm text-blue-600 hover:text-blue-700 font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      Forgot password?
                    </button>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit" // Changed to type="submit" for form
                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-4 px-4 rounded-lg transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <span>Sign In to Dashboard</span>
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </button>
                </form>
              </div>

              {/* Register Form Panel */}
              <div
                id="panel-register"
                role="tabpanel"
                aria-labelledby="tab-getstarted"
                tabIndex={!isLogin ? 0 : -1} // Make panel focusable when active
                hidden={isLogin} // Hide visually and from accessibility tree when not active
              >
                <form
                  onSubmit={handleSubmit}
                  className="space-y-6"
                  ref={authFormRef}
                >
                  {/* Company Name */}
                  <div className="space-y-2">
                    <label
                      htmlFor="companyName"
                      className="text-sm font-medium text-gray-700"
                    >
                      Company Name{" "}
                      <span className="text-red-500" aria-hidden="true">
                        *
                      </span>
                    </label>
                    <div className="relative">
                      <Building
                        className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                        aria-hidden="true"
                      />
                      <input
                        type="text"
                        id="companyName"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                        placeholder="Enter your company name"
                        required
                        aria-required="true"
                        ref={companyNameInputRef} // Attach ref for programmatic focus
                      />
                    </div>
                  </div>

                  {/* Contact Name */}
                  <div className="space-y-2">
                    <label
                      htmlFor="contactName"
                      className="text-sm font-medium text-gray-700"
                    >
                      Contact Person{" "}
                      <span className="text-red-500" aria-hidden="true">
                        *
                      </span>
                    </label>
                    <div className="relative">
                      <User
                        className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                        aria-hidden="true"
                      />
                      <input
                        type="text"
                        id="contactName"
                        name="contactName"
                        value={formData.contactName}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                        placeholder="Your full name"
                        required
                        aria-required="true"
                      />
                    </div>
                  </div>

                  {/* Phone and Company Size Row */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label
                        htmlFor="phone"
                        className="text-sm font-medium text-gray-700"
                      >
                        Phone
                      </label>
                      <div className="relative">
                        <Phone
                          className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                          aria-hidden="true"
                        />
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                          placeholder="+1 (555) 000-0000"
                          aria-describedby="phone-description"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="companySize"
                        className="text-sm font-medium text-gray-700"
                      >
                        Company Size
                      </label>
                      <select
                        id="companySize"
                        name="companySize"
                        value={formData.companySize}
                        onChange={handleInputChange}
                        className="w-full py-3 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                        aria-label="Select your company size"
                      >
                        <option value="">Select size</option>
                        {companySizes.map((size) => (
                          <option key={size.value} value={size.value}>
                            {size.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Industry and Website Row */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label
                        htmlFor="industry"
                        className="text-sm font-medium text-gray-700"
                      >
                        Industry
                      </label>
                      <select
                        id="industry"
                        name="industry"
                        value={formData.industry}
                        onChange={handleInputChange}
                        className="w-full py-3 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                        aria-label="Select your company industry"
                      >
                        <option value="">Select industry</option>
                        {industries.map((industry) => (
                          <option key={industry} value={industry}>
                            {industry}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="website"
                        className="text-sm font-medium text-gray-700"
                      >
                        Website
                      </label>
                      <div className="relative">
                        <Globe
                          className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                          aria-hidden="true"
                        />
                        <input
                          type="url"
                          id="website"
                          name="website"
                          value={formData.website}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                          placeholder="company.com"
                          aria-describedby="Enter your company website URL, optional field"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Email Field */}
                  <div className="space-y-2">
                    <label
                      htmlFor="email-register"
                      className="text-sm font-medium text-gray-700"
                    >
                      Work Email{" "}
                      <span className="text-red-500" aria-hidden="true">
                        *
                      </span>
                    </label>
                    <div className="relative">
                      <Mail
                        className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                        aria-hidden="true"
                      />
                      <input
                        type="email"
                        id="email-register"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                        placeholder="your@company.com"
                        required
                        aria-required="true"
                      />
                    </div>
                  </div>

                  {/* Password Field */}
                  <div className="space-y-2">
                    <label
                      htmlFor="password-register"
                      className="text-sm font-medium text-gray-700"
                    >
                      Password{" "}
                      <span className="text-red-500" aria-hidden="true">
                        *
                      </span>
                    </label>
                    <div className="relative">
                      <Lock
                        className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                        aria-hidden="true"
                      />
                      <input
                        type={showPassword ? "text" : "password"}
                        id="password-register"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                        placeholder="Enter your password"
                        required
                        aria-required="true"
                        aria-describedby="password-requirements"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-full p-0.5"
                        aria-label={
                          showPassword ? "Hide password" : "Show password"
                        }
                        aria-controls="password-register"
                        aria-expanded={showPassword}
                      >
                        {showPassword ? (
                          <EyeOff className="w-5 h-5" aria-hidden="true" />
                        ) : (
                          <Eye className="w-5 h-5" aria-hidden="true" />
                        )}
                        <span className="sr-only">
                          {showPassword ? "Hide password" : "Show password"}
                        </span>
                      </button>
                    </div>
                    <p
                      id="password-requirements"
                      className="text-xs text-gray-500 mt-1 sr-only"
                    >
                      Password must be at least 8 characters long and include a
                      mix of uppercase letters, lowercase letters, numbers, and
                      symbols.
                    </p>
                  </div>

                  {/* Confirm Password Field (Register Only) */}
                  <div className="space-y-2">
                    <label
                      htmlFor="confirmPassword"
                      className="text-sm font-medium text-gray-700"
                    >
                      Confirm Password{" "}
                      <span className="text-red-500" aria-hidden="true">
                        *
                      </span>
                    </label>
                    <div className="relative">
                      <Lock
                        className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                        aria-hidden="true"
                      />
                      <input
                        type={showConfirmPassword ? "text" : "password"}
                        id="confirmPassword"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                        placeholder="Confirm your password"
                        required
                        aria-required="true"
                        aria-describedby="Re-enter your password for confirmation"
                      />
                      <button
                        type="button"
                        onClick={() =>
                          setShowConfirmPassword(!showConfirmPassword)
                        }
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-full p-0.5"
                        aria-label={
                          showConfirmPassword
                            ? "Hide confirm password"
                            : "Show confirm password"
                        }
                        aria-controls="confirmPassword"
                        aria-expanded={showConfirmPassword}
                      >
                        {showConfirmPassword ? (
                          <EyeOff className="w-5 h-5" aria-hidden="true" />
                        ) : (
                          <Eye className="w-5 h-5" aria-hidden="true" />
                        )}
                        <span className="sr-only">
                          {showConfirmPassword
                            ? "Hide confirm password"
                            : "Show confirm password"}
                        </span>
                      </button>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-4 px-4 rounded-lg transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <span>Start Free Trial</span>
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </button>

                  {/* Free Trial Benefits (Register Only) */}
                  <div
                    className="bg-blue-50 rounded-lg p-4 space-y-3"
                    aria-label="Free Trial Benefits"
                  >
                    <div className="flex items-center space-x-2">
                      <CheckCircle
                        className="w-4 h-4 text-blue-600"
                        aria-hidden="true"
                      />
                      <span className="text-sm text-blue-800 font-medium">
                        14-day free trial
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle
                        className="w-4 h-4 text-blue-600"
                        aria-hidden="true"
                      />
                      <span className="text-sm text-blue-800">
                        No credit card required
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle
                        className="w-4 h-4 text-blue-600"
                        aria-hidden="true"
                      />
                      <span className="text-sm text-blue-800">
                        Full platform access
                      </span>
                    </div>
                  </div>

                  {/* Terms (Register Only) */}
                  <p className="text-xs text-gray-600 text-center leading-relaxed">
                    By creating an account, you agree to our{" "}
                    <button
                      type="button"
                      className="text-blue-600 hover:text-blue-700 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      Terms of Service
                    </button>{" "}
                    and{" "}
                    <button
                      type="button"
                      className="text-blue-600 hover:text-blue-700 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      Privacy Policy
                    </button>
                  </p>
                </form>
              </div>

              {/* Enterprise Contact */}
              <div className="mt-8 pt-6 border-t border-gray-200 text-center">
                <p className="text-sm text-gray-600">
                  Need enterprise features?{" "}
                  <button
                    type="button"
                    className="text-blue-600 hover:text-blue-700 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    Contact our sales team
                  </button>
                </p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default CompanyAuthPortal;
