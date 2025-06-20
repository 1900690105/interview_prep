const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");

const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};

export const AiGithubProfile = model.startChat({
  generationConfig,
  // safetySettings: Adjust safety settings
  // See https://ai.google.dev/gemini-api/docs/safety-settings
  history: [
    {
      role: "user",
      parts: [
        {
          text: "Create a detailed step-by-step guide to building a GitHub profile for software testers seeking job applications. Include account:steps to create a account.process:step by step guild.resource:other resourses.in json formate\n",
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: '```json\n{\n  "account": {\n    "title": "Creating a GitHub Account",\n    "steps": [\n      {\n        "description": "Visit the GitHub website: https://github.com/",\n        "action": "Open a web browser and navigate to the GitHub website."\n      },\n      {\n        "description": "Click on \'Sign Up\'",\n        "action": "Look for the \'Sign up\' button on the top right corner of the page and click it."\n      },\n      {\n        "description": "Choose a username and email address",\n        "action": "Enter a desired username (unique and professional) and a valid email address."\n      },\n      {\n        "description": "Create a password",\n        "action": "Create a strong password (at least 8 characters long, combining uppercase and lowercase letters, numbers, and symbols)."\n      },\n      {\n        "description": "Verify your email address",\n        "action": "Check your inbox for an email from GitHub and click the verification link."\n      },\n      {\n        "description": "Complete your profile",\n        "action": "Add a profile picture, a brief bio, and your location (optional)."\n      }\n    ]\n  },\n  "process": {\n    "title": "Building a Powerful GitHub Profile for Software Testers",\n    "steps": [\n      {\n        "description": "Create a professional-looking repository",\n        "action": "Create a repository titled \'Software Testing Projects\' or similar."\n      },\n      {\n        "description": "Add example testing projects",\n        "action": [\n          "Include projects showcasing your testing skills (e.g., automation scripts, test cases, bug reports).",\n          "Use different types of projects: unit tests, integration tests, UI tests, API tests."\n        ]\n      },\n      {\n        "description": "Document your test strategies",\n        "action": [\n          "Write README files for each project explaining your testing approach, tools used, and results."\n          "Use clear and concise language, highlighting your thought process and problem-solving skills."\n        ]\n      },\n      {\n        "description": "Contribute to open-source projects",\n        "action": [\n          "Find open-source projects related to testing and contribute by finding bugs, writing test cases, or improving existing code.",\n          "This shows your initiative and ability to collaborate."\n        ]\n      },\n      {\n        "description": "Showcase your technical skills",\n        "action": [\n          "Add sections to your profile highlighting your programming languages, testing frameworks, and tools.",\n          "Use keywords relevant to your job search (e.g., Selenium, Appium, JIRA, TestRail)."\n        ]\n      },\n      {\n        "description": "Stay active on GitHub",\n        "action": "Regularly update your projects, contribute to discussions, and engage with other users."\n      }\n    ]\n  },\n  "resources": {\n    "title": "Additional Resources",\n    "links": [\n      {\n        "name": "GitHub Help Center",\n        "url": "https://docs.github.com/"\n      },\n      {\n        "name": "GitHub Guides",\n        "url": "https://guides.github.com/"\n      },\n      {\n        "name": "GitHub Learning Lab",\n        "url": "https://lab.github.com/"\n      },\n      {\n        "name": "Software Testing Resources",\n        "url": "https://www.softwaretestinghelp.com/"\n      },\n      {\n        "name": "Testing Blogs",\n        "url": "https://www.testautomationu.com/"\n      }\n    ]\n  }\n}\n```',
        },
      ],
    },
  ],
});
