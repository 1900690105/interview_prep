// generate a content that help me to create great professional linkedin profile for job role "software testing" ,describe and steps to do that good profile picture, banner image, custome url, headline, about section, skill section, feature section, certification and licenses section, creating posts, connect and job apply and also add things that you know and steps to do this , as a fresher.in json formate.

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

const chatSession = model.startChat({
  generationConfig,
  history: [
    {
      role: "user",
      parts: [
        {
          text: 'generate a content that help me to create great professional linkedin profile for job role "software testing" ,describe and steps to do that good profile picture, banner image, custome url, headline, about section, skill section, feature section, certification and licenses section, creating posts, connect and job apply and also add things that you know and steps to do this , as a fresher.in json formate.',
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: '```json\n{\n  "profile_setup": {\n    "title": "Creating a Stellar LinkedIn Profile for Software Testing Freshers",\n    "description": "This guide will help you craft a compelling LinkedIn profile that showcases your skills and experience as a fresh software tester, attracting the attention of potential employers."\n  },\n  "profile_picture": {\n    "title": "Professional Profile Picture",\n    "description": "First impressions matter. Choose a high-quality, professional photo that conveys confidence and approachability.",\n    "steps": [\n      "Use a clear, well-lit photo.",\n      "Dress professionally, but comfortably.",\n      "Maintain a neutral expression and eye contact.",\n      "Use a solid background that doesn\'t distract from your face.",\n      "Consider using a professional photographer or a good quality selfie setup."\n    ]\n  },\n  "banner_image": {\n    "title": "Engaging Banner Image",\n    "description": "Your banner image is your first chance to make a statement. Choose an image that represents your field, interests, or personality.",\n    "steps": [\n      "Use a high-resolution image (1584 x 396 pixels).",\n      "Choose a relevant image, like a tech-related background, a testing concept, or a design related to software development.",\n      "Keep the image simple and professional, avoiding clutter or distracting elements.",\n      "Consider using a banner design tool for creating a custom image."\n    ]\n  },\n  "custom_url": {\n    "title": "Custom URL",\n    "description": "A custom URL makes your profile easier to share and remember. It adds a professional touch.",\n    "steps": [\n      "Go to your LinkedIn profile settings.",\n      "Navigate to \'Edit your public profile URL\'.",\n      "Enter a short, relevant URL that reflects your name or professional identity."\n    ]\n  },\n  "headline": {\n    "title": "Compelling Headline",\n    "description": "Your headline is the first thing people see after your name. Make it concise and attention-grabbing.",\n    "steps": [\n      "Use keywords relevant to software testing.",\n      "Clearly state your career goal (e.g., \'Aspiring Software Tester\' or \'Quality Assurance Enthusiast\').",\n      "Include a brief tagline that highlights your strengths or experience."\n    ]\n  },\n  "about_section": {\n    "title": "Engaging About Section",\n    "description": "The \'About\' section is your chance to tell your story and showcase your passion for software testing.",\n    "steps": [\n      "Write in the first person and use a conversational tone.",\n      "Start by mentioning your career goals and aspirations in software testing.",\n      "Highlight your key skills and relevant experiences, even if they are from internships or projects.",\n      "Mention any specific testing methodologies or tools you are familiar with.",\n      "Express your enthusiasm for the field and mention what excites you about software testing.",\n      "Proofread carefully for grammar and clarity."\n    ]\n  },\n  "skills_section": {\n    "title": "Relevant Skills",\n    "description": "The \'Skills\' section is crucial for showcasing your technical expertise to recruiters.",\n    "steps": [\n      "List all the software testing skills you possess.",\n      "Include both technical skills (e.g., bug tracking tools, automation tools, testing methodologies) and soft skills (e.g., communication, problem-solving, analytical thinking).",\n      "Prioritize the skills that are most relevant to your desired job roles.",\n      "Use keywords that recruiters frequently use in their searches."\n    ]\n  },\n  "experience_section": {\n    "title": "Experience Section (Internships/Projects)",\n    "description": "Even as a fresher, you can highlight your relevant experience through internships, projects, or coursework.",\n    "steps": [\n      "List any relevant internships you have completed.",\n      "Describe the projects you have worked on, highlighting your role and contributions.",\n      "Mention any software testing tools or methodologies you used.",\n      "Quantify your achievements whenever possible (e.g., \'identified X number of bugs\')."\n    ]\n  },\n  "featured_section": {\n    "title": "Featured Section",\n    "description": "The \'Featured\' section allows you to highlight specific achievements or projects.",\n    "steps": [\n      "Upload documents, articles, or presentations that showcase your skills and experience.",\n      "Consider showcasing a portfolio of your testing work if you have any."\n    ]\n  },\n  "certifications_section": {\n    "title": "Certifications & Licenses",\n    "description": "Certifications can demonstrate your commitment to professional development and expertise.",\n    "steps": [\n      "Add any relevant software testing certifications you have earned.",\n      "Consider pursuing certifications like ISTQB (International Software Testing Qualifications Board) or CSTE (Certified Software Tester)."\n    ]\n  },\n  "posts": {\n    "title": "Engaging Posts",\n    "description": "Regularly sharing content related to software testing helps you build your network and demonstrate your expertise.",\n    "steps": [\n      "Share articles, blog posts, or videos about software testing trends and best practices.",\n      "Share your insights on testing methodologies, tools, or challenges.",\n      "Participate in industry discussions and share your thoughts on relevant topics.",\n      "Showcase your work through projects or case studies.",\n      "Use relevant hashtags to increase visibility."\n    ]\n  },\n  "connections": {\n    "title": "Building Connections",\n    "description": "Connecting with professionals in the software testing field expands your network and opens doors to opportunities.",\n    "steps": [\n      "Send personalized connection requests to people in your field.",\n      "Join relevant groups related to software testing.",\n      "Engage in discussions and share valuable content to build relationships."\n    ]\n  },\n  "job_application": {\n    "title": "Applying for Jobs",\n    "description": "Use LinkedIn to apply for jobs and get noticed by recruiters.",\n    "steps": [\n      "Set your job preferences in your profile settings.",\n      "Apply for jobs directly through LinkedIn.",\n      "Use LinkedIn\'s job search feature to find relevant opportunities.",\n      "Tailor your resume and cover letter to each specific job requirement.",\n      "Highlight your skills and experience that are relevant to the job description."\n    ]\n  }\n}\n```',
        },
      ],
    },
  ],
});
