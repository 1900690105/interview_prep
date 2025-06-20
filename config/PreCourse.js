// To run this code you need to install the following dependencies:
// npm install @google/genai mime
// npm install -D @types/node

import { GoogleGenAI } from "@google/genai";

async function main() {
  const ai = new GoogleGenAI({
    apiKey: process.env.NEXT_PUBLIC_GEMINI_API_KEY,
  });
  const config = {
    responseMimeType: "application/json",
  };
  const model = "gemini-1.5-flash";
  const contents = [
    {
      role: "user",
      parts: [
        {
          text: `give me list of things i want know about befor start courses in "web developer".include .in json formate.`,
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: `\`\`\`json
{
  "essential_precourse_knowledge": [
    {
      "category": "Basic Computer Skills",
      "items": [
        "Comfortable using a computer and navigating file systems.",
        "Understanding of basic software installation and updates.",
        "Familiarity with different operating systems (Windows, macOS, Linux - at least one)."
      ]
    },
    {
      "category": "Foundational Web Concepts",
      "items": [
        "What is the internet and how it works (basic understanding).",
        "Understanding of client-server architecture (basic understanding).",
        "Familiarity with URLs, domains, and hosting.",
        "Basic understanding of HTTP and HTTPS protocols."
      ]
    },
    {
      "category": "Programming Fundamentals (Helpful but not always required)",
      "items": [
        "Basic understanding of variables, data types, and operators.",
        "Familiarity with loops and conditional statements (if/else).",
        "Concept of functions and procedures.",
        "Basic debugging skills."
      ]
    },
    {
      "category": "HTML, CSS, and JavaScript (Optional but beneficial)",
      "items": [
        "A rudimentary understanding of what HTML, CSS, and JavaScript are and their roles in web development.",
        "Having tried a simple HTML, CSS, or JavaScript tutorial (even a very short one) to get a feel for it."
      ]
    },
    {
      "category": "Tools and Technologies (Optional but beneficial)",
      "items": [
        "Familiarity with a code editor (VS Code, Sublime Text, Atom, etc.).",
        "Basic understanding of version control (Git is highly recommended).",
        "Basic understanding of the command line or terminal."
      ]
    },
    {
      "category": "Course Specifics",
      "items": [
        "Review the course syllabus carefully to understand the prerequisites and learning objectives.",
        "Check the course's software and hardware requirements (specific versions of software, needed computer specs etc.).",
        "Understand the course's assessment methods (exams, projects, assignments).",
        "Know the support resources available (forums, instructors, TAs)."
      ]
    }
  ],
  "questions_to_ask_yourself": [
    "Am I comfortable learning new technologies quickly?",
    "Do I have enough time to dedicate to the course?",
    "What are my career goals and how will this course help me achieve them?",
    "What kind of web development am I most interested in (front-end, back-end, full-stack)?"
  ]
}
\`\`\`
`,
        },
      ],
    },
    {
      role: "user",
      parts: [
        {
          text: `INSERT_INPUT_HERE`,
        },
      ],
    },
  ];

  const response = await ai.models.generateContentStream({
    model,
    config,
    contents,
  });
  for await (const chunk of response) {
    console.log(chunk.text);
  }
}

main();
