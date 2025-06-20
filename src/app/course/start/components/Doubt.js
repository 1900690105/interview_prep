// import { AlertDialog, AlertDialogContent } from "@/components/ui/alert-dialog";
// import { ImCross } from "react-icons/im";
// import { Textarea } from "@/components/ui/textarea";
// import React, { useState } from "react";
// import { AiDoubtSuggestion } from "../../../../../config/AllAiModels";
// import { Button } from "@/components/ui/button";
// import { Cross } from "lucide-react";

// function Doubt({ doubt, setSolve, setDoubt }) {
//   const [question, setQuestion] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleDoubt = async () => {
//     setLoading(true);
//     const prompt = `give me detailed and clear explanation of my doubt given below. include Acknowledge, clear explanation, example, simplified summary, further classification, encouragement to student, root cause of doubt.in json formate .doubt description:${question}`;
//     try {
//       const result = await AiDoubtSuggestion.sendMessage(prompt);
//       const text = await result.response.text();
//       const json = JSON.parse(text);
//       console.log(json);
//       setSolve(json);
//       setDoubt(false);
//       setQuestion("");
//     } catch (error) {
//       console.error(error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div>
//       <AlertDialog open={doubt}>
//         <AlertDialogContent className="w-[420px] md:w-full md:max-w-3xl">
//           <div className="flex justify-between">
//             <p>Do You Have Any Doubt?</p>
//             <p>
//               <ImCross
//                 onClick={() => setDoubt(false)}
//                 className="h-4 w-4 cursor-pointer"
//               />
//             </p>
//           </div>
//           <Textarea
//             placeholder="Describe your Doubt"
//             className="w-full"
//             rows={5}
//             onChange={(e) => setQuestion(e.target.value)}
//           />
//           <Button
//             onClick={() => {
//               handleDoubt();
//             }}
//             diasable={loading}
//           >
//             {loading ? "Loading..." : "Solve With AI"}
//           </Button>
//           <Button className="mt-2 bg-blue-500 text-white hover:bg-blue-600">
//             {loading ? "Loading..." : "Ask to Student"}
//           </Button>
//         </AlertDialogContent>
//       </AlertDialog>
//     </div>
//   );
// }

// export default Doubt;

import React, { useState } from "react";
import { X, HelpCircle } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { AiDoubtSuggestion } from "../../../../../config/AllAiModels";

function DoubtModal({ isOpen, onClose, setSolve }) {
  const [question, setQuestion] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleDoubt = async () => {
    // Validate input
    if (!question.trim()) {
      setError("Please describe your doubt before submitting.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const prompt = JSON.stringify({
        instruction: "Provide a comprehensive doubt resolution",
        doubtDescription: question,
      });

      const result = await AiDoubtSuggestion.sendMessage(prompt);
      const text = await result.response.text();
      const json = JSON.parse(text);

      setSolve(json);
      onClose();
      setQuestion("");
    } catch (error) {
      console.error("Doubt resolution error:", error);
      setError("Failed to resolve doubt. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-[95%] max-w-md mx-auto rounded-lg shadow-xl">
        <DialogHeader className="space-y-2">
          <div className="flex justify-between items-center">
            <DialogTitle className="flex items-center gap-2">
              <HelpCircle className="w-6 h-6 text-blue-500" />
              Doubt Clarification
            </DialogTitle>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="hover:bg-gray-100"
            >
              {/* <X className="w-5 h-5 text-gray-600" /> */}
            </Button>
          </div>
          <DialogDescription>
            Describe your doubt in detail to get a comprehensive explanation.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          <Textarea
            placeholder="Describe your doubt thoroughly..."
            className="w-full min-h-[150px] resize-y"
            value={question}
            onChange={(e) => {
              setQuestion(e.target.value);
              setError("");
            }}
          />

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              onClick={handleDoubt}
              disabled={loading}
              className="w-full sm:w-auto"
            >
              {loading ? "Resolving Doubt..." : "Solve with AI"}
            </Button>
            <Button
              variant="secondary"
              className="w-full sm:w-auto"
              disabled={loading}
              title="this help you to ask to other students"
            >
              Ask Others
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default function Doubt({ doubt, setSolve, setDoubt }) {
  return (
    <DoubtModal
      isOpen={doubt}
      onClose={() => setDoubt(false)}
      setSolve={setSolve}
    />
  );
}
