import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import {
  ExternalLink,
  Search,
  Award,
  BookOpen,
  Zap,
  Globe,
} from "lucide-react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { cn } from "@/lib/utils";
import { AiCertifications } from "../../../../config/AllAiModels";
import CertificateUpload from "./CertificateUpload";

function Certificate() {
  const [submittedValue, setSubmittedValue] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [error, setError] = useState(null);
  const [upload, setUpload] = useState(false);
  useEffect(() => {
    const role = localStorage.getItem("role");
    const storedValue = localStorage.getItem(`${role}_certification`);
    if (storedValue) {
      setSubmittedValue(JSON.parse(storedValue));
      setShowResults(true);
    }
  }, []);

  const HandleCertificate = async () => {
    setLoading(true);
    setError(null);
    setShowResults(false);

    const role = localStorage.getItem("role");
    const BASIC_PROMPT = `suggest list of platform that give certificate and course for free on ${role},include platform:name of platform.url:link of that platform.certificate:certificate name.description:short description.cost:free or paid.in json formate`;

    try {
      const result = await AiCertifications.sendMessage(BASIC_PROMPT);
      const responseText = await result.response.text();

      if (!responseText) {
        throw new Error("No content received from the server");
      }

      const parsedResult = JSON.parse(responseText);
      localStorage.setItem(
        `${role}_certification`,
        JSON.stringify(parsedResult)
      );

      if (!Array.isArray(parsedResult) || parsedResult.length === 0) {
        throw new Error("Invalid or empty response format");
      }

      setSubmittedValue(parsedResult);
      setShowResults(true);
    } catch (error) {
      console.error("Error:", error);
      setError(
        error.message === "Invalid or empty response format"
          ? "Unable to find certification data. Please try again."
          : "Role is not selected."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-50 p-4 md:p-8 lg:p-12">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12 transition-all duration-300 ease-in-out transform hover:scale-[1.01]">
          <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-500 mb-4 animate-fade-in">
            Certification Explorer
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Discover personalized learning paths and certification opportunities
            tailored to your professional growth
          </p>

          <div className="transition-transform duration-200 hover:scale-105 active:scale-95">
            <Button
              onClick={HandleCertificate}
              className={cn(
                "px-10 py-6 rounded-xl text-lg font-bold shadow-lg transition-all duration-300 group",
                loading
                  ? "bg-gradient-to-r from-gray-400 to-gray-500 cursor-not-allowed"
                  : "bg-gradient-to-r from-indigo-600 to-cyan-500 hover:from-indigo-700 hover:to-cyan-600 hover:shadow-xl"
              )}
              disabled={loading}
            >
              {loading ? (
                <div className="flex items-center gap-3">
                  <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-white"></div>
                  <span>Searching Courses...</span>
                </div>
              ) : (
                <div className="flex items-center gap-3">
                  <Search className="w-6 h-6 group-hover:animate-pulse" />
                  <span>Find Certifications</span>
                </div>
              )}
            </Button>
          </div>
        </div>

        {/* Error Handling */}
        {error && (
          <div className="mb-8 max-w-2xl mx-auto animate-slide-in-down">
            <div className="bg-red-50 border border-red-200 rounded-xl p-4 flex items-center space-x-4 transition-all duration-300 hover:shadow-md">
              <div className="bg-red-100 p-2 rounded-full">
                <Zap className="text-red-500 w-6 h-6" />
              </div>
              <p className="text-red-700 flex-grow">
                Can not recognize your role, please try again letter.
              </p>
            </div>
          </div>
        )}

        {/* Results Section */}
        {showResults && submittedValue.length > 0 && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
              {submittedValue.map((item, index) => (
                <div
                  key={index}
                  className="transition-all duration-300 ease-in-out transform hover:scale-105"
                >
                  <Card className="h-full border-2 border-transparent hover:border-indigo-200 transition-all duration-300 shadow-lg hover:shadow-xl rounded-2xl overflow-hidden">
                    <CardHeader className="bg-gradient-to-r from-indigo-50 to-cyan-50 p-6">
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-2xl font-bold text-indigo-800 mb-2">
                            {item.platform}
                          </CardTitle>
                          <CardDescription className="text-cyan-700 font-semibold">
                            {item.certificate}
                          </CardDescription>
                        </div>
                        <Award className="text-indigo-500 w-10 h-10" />
                      </div>
                    </CardHeader>
                    <CardContent className="p-6 space-y-4">
                      <div className="flex items-start space-x-3">
                        <BookOpen className="w-6 h-6 text-indigo-500 flex-shrink-0 mt-1" />
                        <p className="text-gray-700 flex-grow">
                          {item.description}
                        </p>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Globe className="w-6 h-6 text-cyan-500" />
                        <span className="text-gray-600 font-medium">
                          {item.cost}
                        </span>
                      </div>
                    </CardContent>
                    <CardFooter className="p-6 bg-gray-50 border-t">
                      <Button
                        variant="outline"
                        className="w-full bg-white border-indigo-200 text-indigo-600 hover:bg-indigo-50 transition-colors"
                        onClick={() => window.open(item.url, "_blank")}
                      >
                        <ExternalLink className="w-5 h-5 mr-2" />
                        Explore Course
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              ))}
            </div>

            <Drawer>
              <DrawerTrigger>
                <div className="flex justify-end mt-5">
                  <Button
                    variant="outline"
                    className="w-full bg-blue-500 border-indigo-200   transition-colors text-white w-25"
                    onClick={() => setUpload(true)}
                  >
                    Upload certificate
                  </Button>
                </div>
              </DrawerTrigger>
              <DrawerContent>
                <DrawerHeader>
                  <DrawerTitle>Are you absolutely sure?</DrawerTitle>
                  <DrawerDescription>
                    <CertificateUpload />
                  </DrawerDescription>
                </DrawerHeader>
                <DrawerFooter>
                  <DrawerClose>
                    <Button variant="outline">Cancel</Button>
                  </DrawerClose>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          </>
        )}

        {/* No Results Message */}
        {showResults && submittedValue.length === 0 && !error && (
          <div className="max-w-md mx-auto text-center bg-yellow-50 border border-yellow-200 rounded-xl p-8 animate-slide-in-up">
            <div className="bg-yellow-100 p-3 rounded-full inline-block mb-4">
              <Zap className="text-yellow-600 w-8 h-8" />
            </div>
            <p className="text-yellow-800 text-lg">
              No certification courses found. Please broaden your search or try
              again later.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Certificate;
