import React from "react";
import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import { Activelisteing } from "../data/ActiveListening";

const steps = Activelisteing;

const StepCard = ({ step, index }) => (
  <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300">
    <div className="md:flex md:justify-between">
      <div>
        <div className="absolute top-4 left-4 bg-indigo-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
          {index + 1}
        </div>
        <div className="p-6 pt-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            {step.title}
          </h2>
          <p className="text-gray-600 mb-4">{step.description}</p>
          <ul className="space-y-3 mb-6">
            {step.actions.map((action, actionIndex) => (
              <li key={actionIndex} className="flex items-start">
                <ArrowRightIcon className="h-5 w-5 text-indigo-600 mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-700">{action}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="p-6 md:pt-16 pt-6 sm:flex sm:justify-center">
        <Image
          src={`/${step.img}`}
          height={300}
          width={300}
          alt="Body Animation"
        />
      </div>
    </div>
  </div>
);

const ActiveListenerSteps = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Master the Art of Active Listening
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Transform your conversations with these essential active listening
            techniques
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-8">
          {steps.map((step, index) => (
            <StepCard key={index} step={step} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ActiveListenerSteps;
