import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Check, X, Trophy, ArrowRight, RotateCcw } from "lucide-react";

const HistoryQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [animation, setAnimation] = useState("");

  const questions = [
    {
      question:
        "Which two major dynasties are mentioned as flourishing in ancient India?",
      options: [
        "Maurya and Gupta",
        "Chola and Mughal",
        "Vijayanagara and Kushan",
        "Harappan and Maurya",
      ],
      correctAnswer: "Maurya and Gupta",
    },
    {
      question: "During which years did the Maurya Empire exist?",
      options: ["268–232 BCE", "319–550 CE", "322–185 BCE", "1500–1000 BCE"],
      correctAnswer: "322–185 BCE",
    },
    {
      question: "What event caused Emperor Ashoka to embrace Buddhism?",
      options: [
        "Victory in the Kalinga War",
        "The invention of zero",
        "The horrors of the Kalinga War",
        "The Silk Road trade",
      ],
      correctAnswer: "The horrors of the Kalinga War",
    },
    {
      question:
        "Which ancient Indian scholar is credited with introducing the concept of zero?",
      options: ["Aryabhata", "Brahmagupta", "Sushruta", "Chanakya"],
      correctAnswer: "Brahmagupta",
    },
    {
      question: "How many surgical procedures did Sushruta document?",
      options: ["121", "300", "500", "100"],
      correctAnswer: "300",
    },
  ];

  const handleAnswer = (answer) => {
    const isCorrect = answer === questions[currentQuestion].correctAnswer;
    setSelectedAnswers({
      ...selectedAnswers,
      [currentQuestion]: { answer, isCorrect },
    });

    if (isCorrect) {
      setScore(score + 1);
      setAnimation("correct");
    } else {
      setAnimation("incorrect");
    }

    setTimeout(() => {
      setAnimation("");
      if (currentQuestion + 1 < questions.length) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setShowResults(true);
      }
    }, 500);
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResults(false);
    setSelectedAnswers({});
    setAnimation("");
  };

  const progress = (currentQuestion / questions.length) * 100;

  if (showResults) {
    const percentage = (score / questions.length) * 100;
    return (
      <Card className="w-full max-w-2xl mx-auto shadow-lg">
        <CardHeader className="text-center pb-2">
          <div className="flex justify-center mb-4">
            <Trophy className="w-16 h-16 text-yellow-500" />
          </div>
          <CardTitle className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Quiz Complete!
          </CardTitle>
          <CardDescription className="text-xl mt-4">
            You scored {score} out of {questions.length} (
            {percentage.toFixed(0)}%)
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6 p-6">
          <div className="space-y-4">
            {questions.map((q, index) => (
              <div
                key={index}
                className="p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors duration-200"
              >
                <div className="flex items-start gap-3">
                  {selectedAnswers[index]?.isCorrect ? (
                    <Check className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  ) : (
                    <X className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
                  )}
                  <div className="flex-1">
                    <p className="font-medium text-gray-900">{q.question}</p>
                    <div className="mt-2 space-y-1">
                      <p
                        className={`text-sm ${
                          selectedAnswers[index]?.isCorrect
                            ? "text-green-600 font-medium"
                            : "text-red-600 font-medium"
                        }`}
                      >
                        Your answer: {selectedAnswers[index]?.answer}
                      </p>
                      {!selectedAnswers[index]?.isCorrect && (
                        <p className="text-sm text-green-600 font-medium">
                          Correct answer: {q.correctAnswer}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <Button
            onClick={restartQuiz}
            className="w-full mt-6 h-12 text-lg font-medium"
            variant="outline"
          >
            <RotateCcw className="w-5 h-5 mr-2" />
            Try Again
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card
      className={`w-full max-w-2xl mx-auto shadow-lg transform transition-transform duration-200 ${
        animation === "correct"
          ? "scale-105"
          : animation === "incorrect"
          ? "shake"
          : ""
      }`}
    >
      <CardHeader className="pb-2">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <CardTitle className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Ancient India History Quiz
          </CardTitle>
          <div className="flex items-center gap-2 mt-2 sm:mt-0">
            <span className="text-sm font-medium text-gray-500">Score:</span>
            <span className="text-lg font-bold text-purple-600">{score}</span>
          </div>
        </div>
        <div className="mt-4 space-y-2">
          <Progress value={progress} className="h-2 bg-gray-100" />
          <p className="text-sm text-gray-500 flex items-center justify-between">
            <span>
              Question {currentQuestion + 1} of {questions.length}
            </span>
            <span>{Math.round(progress)}% Complete</span>
          </p>
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <div className="mb-6">
          <h3 className="text-xl font-medium text-gray-900">
            {questions[currentQuestion].question}
          </h3>
        </div>
        <div className="grid gap-3">
          {questions[currentQuestion].options.map((option, index) => (
            <Button
              key={index}
              variant="outline"
              className="w-full text-left justify-between h-auto py-4 px-6 hover:bg-gray-50 hover:border-purple-300 transition-colors duration-200"
              onClick={() => handleAnswer(option)}
            >
              <span className="text-base">{option}</span>
              <ArrowRight className="w-5 h-5 text-gray-400" />
            </Button>
          ))}
        </div>
      </CardContent>
      <style jsx global>{`
        @keyframes shake {
          0%,
          100% {
            transform: translateX(0);
          }
          25% {
            transform: translateX(-5px);
          }
          75% {
            transform: translateX(5px);
          }
        }
        .shake {
          animation: shake 0.5s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
        }
      `}</style>
    </Card>
  );
};

export default HistoryQuiz;
