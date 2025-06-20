import React, { useState } from "react";
import { Mail, User, Phone, Linkedin, Send, Copy, Check } from "lucide-react";
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
import { AiColdMail } from "../../../../config/AllAiModels";
import LoadingDialog from "../../jobPreparation/components/LoadingDialog";

const MyColdMail = () => {
  const [copied, setCopied] = useState(false);
  const [open, setOpen] = useState(false);
  const [close, setClose] = useState(false);
  const [question, setQuestion] = useState("");
  const [loading, setLoading] = useState(false);
  const [mailtrue, setMailTrue] = useState(false);
  const [achievements, setAchievements] = useState("");
  const [values, setValues] = useState("");
  const [skills, setSkills] = useState("");
  const [mail, setMail] = useState("");

  const handleCopy = () => {
    const fullEmailText = `Subject: ${mail.subject}\n\n${mail.greeting}\n\n${mail.body}\n\n${mail.cta}\n\n${mail.end}`;
    navigator.clipboard.writeText(fullEmailText).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const OpenPopUp = async (e) => {
    e.preventDefault();
    setLoading(true);
    const role = "web developer";
    const BASIC_PROMPT = `valueiadd:${values},achivement:${achievements},skills:${skills}. write a profesional and effective cold mail as fresher for job post:${role},keep it short as 5-6 line,provide value,make it trasactional.also tell them how can i save time,increase revenue,save cost.inclue subject:write subject line that catch in eye and it should be 30-60 character.greating:give it personal toach.body:it should be 5-6 line and 60-120 words.cta:request for their time.end:end with my personal details.in json formate.`;
    try {
      const result = await AiColdMail.sendMessage(BASIC_PROMPT);
      const responseText = result.response.text();
      console.log("Response Text: ", responseText);
      const parsedResult = JSON.parse(responseText);
      setMail(parsedResult);
    } catch (error) {
      console.error("Error parsing JSON:", error);
    } finally {
      setLoading(false);
      setMailTrue(true);
    }
  };

  return (
    <>
      {mailtrue ? (
        // template
        <div className="min-h-screen bg-blue-50 flex items-center justify-center p-4">
          <div className="w-full max-w-2xl bg-white shadow-lg rounded-xl overflow-hidden border border-blue-200">
            <div className="bg-blue-600 text-white p-4 flex items-center justify-between">
              <div className="flex items-center">
                <Mail className="mr-3" />
                <h2 className="text-xl font-bold">{mail.subject}</h2>
              </div>
              <button
                onClick={handleCopy}
                className="text-white hover:bg-blue-700 p-2 rounded-full transition"
                title={copied ? "Copied!" : "Copy Email"}
              >
                {copied ? (
                  <Check className="w-5 h-5" />
                ) : (
                  <Copy className="w-5 h-5" />
                )}
              </button>
            </div>

            <div className="p-6 space-y-4">
              <p className="text-gray-800 font-medium">{mail.greeting}</p>

              <p className="text-gray-700 leading-relaxed">{mail.body}</p>

              <p className="italic">{mail.cta}</p>

              <div className="border-t border-blue-100 pt-4 mt-4">
                <pre className="text-gray-600 whitespace-pre-wrap">
                  {mail.end}
                </pre>
              </div>
            </div>
          </div>
        </div>
      ) : (
        // form
        <div className="">
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button
                variant="outline"
                className="hover:bg-blue-600 hover:text-white mt-5 "
              >
                Generate for me
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] bg-white dark:bg-gray-800">
              <DialogHeader>
                <DialogTitle className="text-blue-600 dark:text-blue-400">
                  Answer This Question
                </DialogTitle>
              </DialogHeader>
              <form className="space-y-4" onSubmit={OpenPopUp}>
                <div>
                  <Label
                    htmlFor="values"
                    className="text-blue-600 dark:text-blue-400"
                  >
                    Highlight Values that relete to company
                  </Label>
                  <Textarea
                    id="values"
                    value={values}
                    required
                    onChange={(e) => setValues(e.target.value)}
                    placeholder="Type your values here..."
                    className="mt-2 h-32 resize-none border-blue-200 focus:border-blue-400 focus:ring-blue-400"
                  />
                </div>
                <div>
                  <Label
                    htmlFor="achievements"
                    className="text-blue-600 dark:text-blue-400"
                  >
                    What are your achievements that relevent to position?
                  </Label>
                  <Textarea
                    id="achievements"
                    value={achievements}
                    required
                    onChange={(e) => setAchievements(e.target.value)}
                    placeholder="Type your achievements here..."
                    className="mt-2 h-32 resize-none border-blue-200 focus:border-blue-400 focus:ring-blue-400"
                  />
                </div>
                <div>
                  <Label
                    htmlFor="skills"
                    className="text-blue-600 dark:text-blue-400"
                  >
                    What are your skills that relevent to position?
                  </Label>
                  <Textarea
                    id="skills"
                    value={skills}
                    required
                    onChange={(e) => setSkills(e.target.value)}
                    placeholder="Type your Skills here..."
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
      )}
    </>
  );
};

export default MyColdMail;
