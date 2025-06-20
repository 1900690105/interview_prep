import React from "react";
import { Check, Pencil, Eye } from "lucide-react";
import { FaWpforms } from "react-icons/fa";
const ProgressSteps = ({ activeStep }) => {
  const steps = [
    { number: 1, title: "Basic Info", icon: FaWpforms },
    { number: 2, title: "Content", icon: Pencil },
    { number: 3, title: "Review", icon: Eye },
  ];

  return (
    <div className="container mx-auto px-4 mt-8">
      <nav
        className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-6"
        role="navigation"
        aria-label="Course Progress Steps"
      >
        <div className="relative flex justify-between">
          {/* Progress Line */}
          <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-200 -translate-y-1/2" />
          <div
            className="absolute top-1/2 left-0 h-1 bg-blue-600 -translate-y-1/2 transition-all duration-300"
            style={{
              width: `${
                (Math.max(0, activeStep - 1) / (steps.length - 1)) * 100
              }%`,
            }}
            aria-hidden="true"
          />

          {/* Steps */}
          <ol className="flex w-full justify-between relative z-10" role="list">
            {steps.map((step, index) => {
              const isCompleted = step.number < activeStep;
              const isActive = step.number === activeStep;
              const isUpcoming = step.number > activeStep;

              return (
                <li
                  key={step.number}
                  className="flex flex-col items-center text-center w-full"
                  role="listitem"
                  aria-current={isActive ? "step" : undefined}
                >
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 focus:outline-none ${
                      isCompleted
                        ? "bg-blue-600 text-white"
                        : isActive
                        ? "bg-blue-600 text-white ring-4 ring-blue-100"
                        : "bg-white border-2 border-gray-200 text-gray-400"
                    }`}
                    aria-label={`Step ${step.number}: ${step.title}`}
                  >
                    {isCompleted ? (
                      <Check className="w-6 h-6" aria-hidden="true" />
                    ) : (
                      <step.icon className="w-5 h-5" aria-hidden="true" />
                    )}
                  </div>

                  <div className="mt-3">
                    <p
                      className={`text-sm font-medium ${
                        step.number <= activeStep
                          ? "text-blue-600"
                          : "text-gray-400"
                      }`}
                    >
                      {step.title}
                    </p>
                    {isActive && (
                      <div
                        className="w-full h-1 bg-blue-600 mt-1 rounded-full"
                        aria-hidden="true"
                      />
                    )}
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </nav>
    </div>
  );
};

export default ProgressSteps;
