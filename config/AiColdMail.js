// generate steps to write effective cold mail for applying jobs for jobs roll "circuit design",include info:explain cold mail and use of cold mail.steps:steps to write effective cold mail.templete:templete for that job roll.  in json formate.

const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");

const apiKey = process.env.GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

async function run() {
  const chatSession = model.startChat({
    generationConfig,
    history: [
      {
        role: "user",
        parts: [
          {
            text: 'generate steps to write effective cold mail for applying jobs for jobs roll "circuit design",include info:explain cold mail and use of cold mail.steps:steps to write effective cold mail.templete:templete for that job roll.  in json formate.',
          },
        ],
      },
      {
        role: "model",
        parts: [
          {
            text: '```json\n{\n  "title": "Cold Emailing for Circuit Design Jobs",\n  "description": "A guide to crafting effective cold emails for circuit design roles.",\n  "what_is_cold_emailing": "Cold emailing is reaching out directly to potential employers even if they haven\'t advertised an open position. It\'s a proactive way to show your interest and get your foot in the door.",\n  "use_of_cold_emailing": [\n    "When you\'re targeting companies not actively hiring.",\n    "When you\'re interested in a specific company but no suitable positions are listed.",\n    "To establish a connection with potential employers and build your network.",\n    "To showcase your skills and experience directly to decision-makers."\n  ],\n  "steps_to_write_effective_cold_email": [\n    "**Research:**",\n    "  - Identify specific companies in your desired industry and location.",\n    "  - Research their products, services, and recent projects.",\n    "  - Find the hiring manager or relevant team lead.",\n    "  - Learn about the company\'s culture and values.",\n    "**Personalization:**",\n    "  - Address the recipient by name (use LinkedIn for this).",\n    "  - Mention specific projects or skills that align with their needs.",\n    "  - Demonstrate your understanding of their company and work.",\n    "**Subject Line:**",\n    "  - Keep it brief, engaging, and relevant to the recipient.",\n    "  - Examples: \'Circuit Design Expertise for [Company Name]\' or \'Experienced Circuit Designer interested in [Project/Technology]\' ",\n    "**Body:**",\n    "  - Start with a strong opening, emphasizing your value proposition.",\n    "  - Briefly highlight your relevant experience and skills (2-3 sentences).",\n    "  - Demonstrate your understanding of their company and challenges.",\n    "  - Connect your skills and experience to their specific needs.",\n    "  - Express your enthusiasm for the company and the role.",\n    "  - Include a call to action (e.g., requesting a brief conversation).",\n    "**Closing:**",\n    "  - Thank them for their time and consideration.",\n    "  - Offer to provide your portfolio or further information.",\n    "  - Include a professional closing (e.g., \'Sincerely\' or \'Best Regards\').",\n    "**Proofreading and Formatting:**",\n    "  - Ensure your email is grammatically correct and free of errors.",\n    "  - Use a professional and concise writing style.",\n    "  - Format your email clearly with bullet points and whitespace."\n  ],\n  "template": {\n    "subject": "[Your Name] - Circuit Design Expertise for [Company Name]",\n    "body": "Dear [Hiring Manager Name],\\n\\nI am writing to express my strong interest in potential circuit design opportunities at [Company Name]. As a highly skilled circuit designer with [number] years of experience in [mention relevant areas like analog, digital, FPGA, etc.], I am confident in my ability to contribute to your team\'s success.\\n\\nI have a proven track record of [mention specific achievements or projects related to their work]. My expertise in [mention specific skills] aligns perfectly with [Company Name]\'s work on [mention specific projects or technologies]. I am particularly drawn to your company\'s focus on [mention something specific you admire about their work].\\n\\nI would welcome the opportunity to discuss how my skills and experience can benefit [Company Name]. I have attached my resume for your review and am available for a call at your convenience.\\n\\nThank you for your time and consideration.\\n\\nSincerely,\\n[Your Name]"\n  },\n  "follow_up": [\n    "Follow up after a week if you haven\'t received a response.",\n    "Be persistent but not pushy.",\n    "Tailor your follow-up email to the specific company and your initial message."\n  ]\n}\n```\n\n**Explanation of the JSON structure:**\n\n* **title:** Provides a clear and concise title for the guide.\n* **description:** Briefly explains the purpose and value of the guide.\n* **what_is_cold_emailing:** Defines cold emailing and its relevance to job applications.\n* **use_of_cold_emailing:** Lists situations where cold emailing is particularly beneficial.\n* **steps_to_write_effective_cold_email:** Outlines the key steps involved in creating a successful cold email, categorized for easy understanding.\n* **template:** Provides a sample template for a cold email specifically tailored to the circuit design role. This includes a subject line and body text with placeholders to be customized.\n* **follow_up:** Emphasizes the importance of follow-up and provides tips for doing it effectively.\n\nRemember to adapt the template and personalize your emails based on the specific company and the role you\'re targeting. \n',
          },
        ],
      },
    ],
  });

  const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
  console.log(result.response.text());
}

run();
