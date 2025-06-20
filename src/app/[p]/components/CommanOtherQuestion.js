import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import LoadingDialog from "../../jobPreparation/components/LoadingDialog";
import Link from "next/link";
import { AiOtherCommanQuestion } from "../../../../config/AllAiModels";

function InterviewGuide() {
  const [question, setQuestion] = useState("");
  const [open, setOpen] = useState(false);
  const [close, setClose] = useState(false);
  const [submittedValue, setSubmittedValue] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    setLoading(true);
    const role = "web developer";
    const jobDescripton = `Work closely with the various internal teams to publish high-quality, informative, and engaging website content that adheres to brand voice and style guidelines
    Edit and revise existing website content for accuracy, clarity, and best practices.
    Manage the quality control aspect for all web properties.
    Upload and format content using a variety of CMS platforms, with a primary focus on Drupal/WordPress.
    Maintain a keen eye for detail to ensure content is free of errors and adheres to visual style guides.
    Stay up-to-date on current web content trends and best practices.
    Work with developers to assist with implementing various search and performance website improvements.`;
    e.preventDefault();

    const BASIC_PROMPT = `as fresher i am applying for post ${role} ,with job description ${jobDescripton},
    how to answer this question ${question}.include question: that i provide. Answer: answer the question. method: method to answer the question.also add resourse and tips.in json formate.`;

    try {
      const result = await AiOtherCommanQuestion.sendMessage(BASIC_PROMPT);
      const responseText = await result.response.text();
      // console.log("Response Text: ", responseText);
      const parsedResult = JSON.parse(responseText);
      setSubmittedValue(parsedResult);
      setClose(true);
    } catch (error) {
      console.error("Error parsing JSON:", error);
    } finally {
      setLoading(false);
      setOpen(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-6">
      {close && (
        <Card className="border-blue-200">
          <CardHeader className="bg-blue-50">
            <CardTitle className="text-blue-800 text-2xl">
              {submittedValue.question}
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-6">
              <div>
                <div>
                  <h3 className="text-lg font-semibold text-blue-700 mb-2">
                    Answer
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {submittedValue.answer}
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-blue-700 mb-2">
                    Approach Method
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {submittedValue.method}
                  </p>
                </div>

                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="resources">
                    <AccordionTrigger className="text-lg font-semibold text-blue-700">
                      Resources to Prepare
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="list-disc pl-6 space-y-3">
                        {submittedValue.resources.map((resource, index) => (
                          <li
                            key={index}
                            className="text-gray-700 dark:text-gray-300"
                          >
                            <Link href={resource}>{resource}</Link>
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="tips">
                    <AccordionTrigger className="text-lg font-semibold text-blue-700">
                      Interview Tips
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="list-disc pl-6 space-y-3">
                        {submittedValue.tips.map((tip, index) => (
                          <li
                            key={index}
                            className="text-gray-700 dark:text-gray-300"
                          >
                            {tip}
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Question Dialog Button */}
      <div className="mt-5">
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              Do you have a question that isn't listed here?
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px] bg-white dark:bg-gray-800">
            <DialogHeader>
              <DialogTitle className="text-blue-600 dark:text-blue-400">
                Ask Your Question
              </DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label
                  htmlFor="question"
                  className="text-blue-600 dark:text-blue-400"
                >
                  What would you like to ask?
                </Label>
                <Textarea
                  id="question"
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  placeholder="Type your question here..."
                  className="mt-2 h-32 resize-none border-blue-200 focus:border-blue-400 focus:ring-blue-400"
                />
              </div>
              <div className="flex justify-end">
                <Button
                  type="submit"
                  disabled={loading}
                  className={`w-full py-3 rounded-lg text-white font-semibold transition duration-200 ${
                    loading
                      ? "bg-blue-400 cursor-not-allowed"
                      : "bg-blue-500 hover:bg-blue-600"
                  }`}
                >
                  {loading ? "Generating..." : "Generate"}
                </Button>
              </div>
            </form>
            {loading && <LoadingDialog loading={loading} />}
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}

export default InterviewGuide;
