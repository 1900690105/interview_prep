import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Copy, Check } from "lucide-react";
import YouTube from "react-youtube";

const HelloWorld = ({ helloWorldFirst, videoId }) => {
  const [copiedStates, setCopiedStates] = useState({});

  const copyToClipboard = async (text, stepIndex) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedStates({ ...copiedStates, [stepIndex]: true });
      setTimeout(() => {
        setCopiedStates({ ...copiedStates, [stepIndex]: false });
      }, 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <div className="min-h-screen bg-blue-50 p-6">
      <div className="max-w-3xl mx-auto">
        <Card className="bg-white shadow-lg">
          <CardHeader className="bg-blue-600 text-white">
            <CardTitle className="text-2xl font-bold">
              {helloWorldFirst?.title}
            </CardTitle>
          </CardHeader>

          <CardContent className="p-6">
            <div className="space-y-6">
              <YouTube videoId={videoId} />
              {helloWorldFirst?.steps?.map((step, index) => (
                <Card key={index} className="border border-blue-100">
                  <CardHeader className="bg-blue-50 pb-2">
                    <CardTitle className="text-lg text-blue-800">
                      {step?.step}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-4">
                    <p className="text-gray-700 mb-3">{step?.description}</p>

                    {step.code && (
                      <div className="bg-gray-800 text-white p-4 rounded-md mb-3 flex justify-between">
                        <code className="block">{step?.code}</code>
                        <div className="flex items-center justify-between">
                          <button
                            onClick={() => copyToClipboard(step?.code, index)}
                            className="hover:bg-gray-700 p-2 rounded-md transition-colors duration-200 flex items-center gap-2"
                          >
                            {copiedStates[index] ? (
                              <>
                                <Check size={16} className="text-green-400" />
                                <span className="text-sm text-green-400">
                                  Copied!
                                </span>
                              </>
                            ) : (
                              <>
                                <Copy size={16} className="text-gray-400" />
                                <span className="text-sm text-gray-400">
                                  Copy
                                </span>
                              </>
                            )}
                          </button>
                        </div>
                      </div>
                    )}

                    {step.resources && (
                      <div className="mt-3">
                        <h4 className="text-sm font-semibold text-blue-700 mb-2">
                          Resources:
                        </h4>
                        <ul className="list-disc list-inside space-y-1 text-sm text-blue-600">
                          {step?.resources?.map((resource, idx) => (
                            <li key={idx}>{resource}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default HelloWorld;
