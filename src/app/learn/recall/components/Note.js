import React, { useState, useRef } from "react";
import { AlertDialog, AlertDialogContent } from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

import jsPDF from "jspdf";
import "jspdf/dist/polyfills.es.js"; // Import polyfills if needed
import { AiDoubtSuggestion } from "../../../../../config/AllAiModels";

function Note({ Course, active2 }) {
  const [question, setQuestion] = useState("");
  const [loading, setLoading] = useState(false);
  const [dialog, setDialog] = useState(false);
  const [solve, setSolve] = useState("");
  const notesRef = useRef(null);

  const handleDoubt = async () => {
    setLoading(true);
    const prompt = `give me detailed and clear explanation of my doubt given below. include Acknowledge, clear explanation, example, simplified summary, further classification, encouragement to student, root cause of doubt.in json formate .doubt description:${question}`;
    try {
      const result = await AiDoubtSuggestion.sendMessage(prompt);
      const text = await result.response.text();
      const json = JSON.parse(text);
      console.log(json);
      setSolve(json);
      setDialog(false);
      setQuestion("");
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = () => {
    const input = notesRef.current;
    if (input) {
      const pdf = new jsPDF({
        orientation: "p",
        unit: "pt",
        format: "a4",
      });
      pdf.html(input, {
        callback: (doc) => {
          doc.save("notes.pdf");
        },
        x: 10,
        y: 10,
        html2canvas: {
          scale: 0.5, // Adjusts the scale of the content in the PDF
        },
      });
    }
  };

  return (
    <>
      {Course?.notes ? (
        <section
          aria-labelledby="notes-title"
          className="p-4"
          role="region"
          aria-label="Course notes section"
        >
          <article>
            <header>
              <h2 id="notes-title" className="sr-only">
                Course Notes
              </h2>
            </header>
            <div
              ref={notesRef}
              dangerouslySetInnerHTML={{
                __html:
                  Course?.notes?.[active2]
                    ?.replace("```html", "")
                    .replace("```", "") || ``,
              }}
            />
            <div className="flex justify-center mb-5 space-x-3 mt-6">
              <Button
                onClick={() => setDialog(true)}
                className="px-8 py-[26px] bg-blue-900 text-white border hover:text-white font-semibold rounded-full"
                aria-label="Open doubt form dialog"
              >
                I have a Doubt? 🤔
              </Button>
              <Button
                onClick={handleDownload}
                className="px-8 py-[26px] bg-green-600 text-white border hover:text-white font-semibold rounded-full"
                aria-label="Download current course notes"
              >
                Download Notes 📄
              </Button>
            </div>
          </article>
        </section>
      ) : (
        <section
          className="flex flex-col items-center justify-center p-4"
          role="region"
          aria-label="No notes available section"
        >
          <p className="text-center text-gray-500" role="alert">
            No Notes available
          </p>
          <Button aria-label="Go back to previous page">Go Back</Button>
        </section>
      )}

      {/* Doubt Dialog */}
      <AlertDialog open={dialog}>
        <AlertDialogContent
          className="w-[420px] md:w-full md:max-w-3xl"
          role="dialog"
          aria-modal="true"
          aria-labelledby="doubt-dialog-title"
        >
          <h2 id="doubt-dialog-title" className="text-lg font-semibold mb-2">
            Do You Have Any Doubt?
          </h2>
          <Textarea
            placeholder="Describe your Doubt"
            className="w-full"
            rows={5}
            onChange={(e) => setQuestion(e.target.value)}
            aria-label="Describe your doubt in the text area"
          />
          <Button
            onClick={handleDoubt}
            disabled={loading}
            aria-busy={loading}
            aria-label="Submit your doubt"
          >
            {loading ? "Loading..." : "Solve It"}
          </Button>
        </AlertDialogContent>
      </AlertDialog>

      {/* Solved Doubt Response */}
      {solve && (
        <section
          className="p-5"
          role="region"
          aria-labelledby="solved-doubt-title"
          aria-live="polite"
        >
          <h2 id="solved-doubt-title" className="sr-only">
            Solved Doubt Details
          </h2>
          <p className="text-center text-black font-semibold">
            Your Doubt has been Solved
          </p>
          <p className="mt-2 font-bold">{solve?.doubtDescription}</p>
          <p>{solve?.acknowledgement}</p>

          <p className="mt-2">
            <span className="font-semibold">Explain:</span> {solve?.explanation}
          </p>
          <p className="mt-2">
            <span className="font-semibold">Example:</span> {solve?.example}
          </p>
          <p className="mt-2">
            <span className="font-semibold">Simplified Summary:</span>{" "}
            {solve?.simplifiedSummary}
          </p>
          <p className="mt-2">
            <span className="font-semibold">Further Classification:</span>{" "}
            {solve?.furtherClassification}
          </p>
          <p className="mt-2">
            <span className="font-semibold">Encouragement To Student:</span>{" "}
            {solve?.encouragementToStudent}
          </p>
          <p className="mt-2">
            <span className="font-semibold">Root Cause Of Doubt:</span>{" "}
            {solve?.rootCauseOfDoubt}
          </p>
        </section>
      )}
    </>
  );
}

export default Note;
