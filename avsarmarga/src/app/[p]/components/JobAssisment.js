import React, { useState } from "react";

function JobAssessment() {
  const [formData, setFormData] = useState({
    userId: "",
    mobile: "",
    email: "",
  });

  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    validateField(name, value);
  };

  const validateField = (name, value) => {
    let newErrors = { ...errors };

    switch (name) {
      case "userId":
        if (!value.trim()) {
          newErrors.userId = "User ID is required";
        } else if (value.length < 4) {
          newErrors.userId = "User ID must be at least 4 characters";
        } else {
          delete newErrors.userId;
        }
        break;

      case "mobile":
        const mobileRegex = /^[0-9]{10}$/;
        if (!value.trim()) {
          newErrors.mobile = "Mobile number is required";
        } else if (!mobileRegex.test(value)) {
          newErrors.mobile = "Please enter a valid 10-digit mobile number";
        } else {
          delete newErrors.mobile;
        }
        break;

      case "email":
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!value.trim()) {
          newErrors.email = "Email address is required";
        } else if (!emailRegex.test(value)) {
          newErrors.email = "Please enter a valid email address";
        } else {
          delete newErrors.email;
        }
        break;

      default:
        break;
    }

    setErrors(newErrors);

    // Check if form is valid
    const isValid =
      Object.keys(newErrors).length === 0 &&
      formData.userId.trim() !== "" &&
      formData.mobile.trim() !== "" &&
      formData.email.trim() !== "";

    setIsFormValid(isValid);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate all fields
    validateField("userId", formData.userId);
    validateField("mobile", formData.mobile);
    validateField("email", formData.email);

    if (isFormValid) {
      // Start the assessment
      console.log("Assessment started with data:", formData);
      // Here you would typically navigate to the assessment page or start the assessment
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg border">
      <h1 className="text-2xl font-bold text-center mb-6">Job Assessment</h1>

      <div className="mb-6 p-4 bg-blue-50 rounded-md">
        <h2 className="font-semibold text-lg mb-2">Instructions:</h2>
        <ul className="list-disc pl-5 space-y-1 text-sm">
          <li>
            Complete all fields in the form below before starting the
            assessment.
          </li>
          <li>
            The assessment consists of multiple-choice questions and practical
            tasks.
          </li>
          <li>You will have 60 minutes to complete the assessment.</li>
          <li>Ensure you have a stable internet connection before starting.</li>
          <li>Do not refresh or close the browser during the assessment.</li>
        </ul>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="userId"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            User ID <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="userId"
            name="userId"
            value={formData.userId}
            onChange={handleChange}
            className={`w-full px-3 py-2 border rounded-md ${
              errors.userId ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Enter your user ID"
          />
          {errors.userId && (
            <p className="text-red-500 text-xs mt-1">{errors.userId}</p>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="mobile"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Mobile Number <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            id="mobile"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            className={`w-full px-3 py-2 border rounded-md ${
              errors.mobile ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Enter your 10-digit mobile number"
          />
          {errors.mobile && (
            <p className="text-red-500 text-xs mt-1">{errors.mobile}</p>
          )}
        </div>

        <div className="mb-6">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-3 py-2 border rounded-md ${
              errors.email ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Enter your email address"
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email}</p>
          )}
        </div>

        <button
          type="submit"
          className={`w-full py-3 px-4 rounded-md text-white font-medium ${
            isFormValid
              ? "bg-green-600 hover:bg-green-700"
              : "bg-gray-400 cursor-not-allowed"
          }`}
          disabled={!isFormValid}
        >
          Start Assessment
        </button>
      </form>
    </div>
  );
}

export default JobAssessment;
