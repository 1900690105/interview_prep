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

export const HelloWorldProgram = model.startChat({
  generationConfig,
  history: [
    {
      role: "user",
      parts: [
        {
          text: 'generate detailed steps to run hello world program of "python" ,include steps:step by step process .link:official website link and other resourses .in json formate.',
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: '```json\n{\n  "title": "Running Your First Python Program: \\"Hello, World!\\"",\n  "steps": [\n    {\n      "step": "1. Install Python",\n      "description": "Download and install the latest version of Python from the official website.",\n      "link": "https://www.python.org/downloads/",\n      "resources": [\n        "Official Python Documentation: https://docs.python.org/3/",\n        "Python Tutorial: https://docs.python.org/3/tutorial/"\n      ]\n    },\n    {\n      "step": "2. Open a Text Editor",\n      "description": "Choose a simple text editor like Notepad (Windows), TextEdit (Mac), or VS Code. You can also use a dedicated IDE (Integrated Development Environment) like PyCharm.",\n      "resources": [\n        "Visual Studio Code: https://code.visualstudio.com/",\n        "PyCharm: https://www.jetbrains.com/pycharm/"\n      ]\n    },\n    {\n      "step": "3. Create a New File",\n      "description": "Create a new text file and save it with a \'.py\' extension (e.g., \'hello.py\')."\n    },\n    {\n      "step": "4. Type the Code",\n      "description": "Type the following code into your file:",\n      "code": "print(\'Hello, world!\')"\n    },\n    {\n      "step": "5. Save the File",\n      "description": "Save the file with the \'.py\' extension."\n    },\n    {\n      "step": "6. Open Your Terminal or Command Prompt",\n      "description": "Open your terminal (macOS/Linux) or command prompt (Windows)."\n    },\n    {\n      "step": "7. Navigate to the File\'s Directory",\n      "description": "Use the \'cd\' command to navigate to the directory where you saved your \'hello.py\' file. For example:",\n      "code": "cd /Users/yourusername/Desktop" \n    },\n    {\n      "step": "8. Run the Program",\n      "description": "Type the following command in your terminal and press Enter:",\n      "code": "python hello.py"\n    },\n    {\n      "step": "9. View Output",\n      "description": "You should see the output \'Hello, world!\' printed on your terminal."\n    }\n  ]\n}\n```\n',
        },
      ],
    },
  ],
});
