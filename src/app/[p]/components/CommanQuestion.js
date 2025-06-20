import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import OtherQuestion from "./CommanOtherQuestion";

const CommanQuestion = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const question = {
    questions: [
      {
        question: "What do you know about our company?",
        answer:
          "I've researched your company and am impressed by [mention specific achievements, projects, or values that resonate with you]. I particularly admire your commitment to [mention something specific like innovation, customer service, or social responsibility]. I believe my skills and passion for web development align well with your company's goals, and I'm eager to contribute to your success.",
        method:
          "Research the company thoroughly. Identify their key achievements, values, and recent projects. Mention specific details that show you've done your homework. Highlight how your skills and interests align with their goals.",
        resources:
          "Company website, news articles, social media, LinkedIn profiles of key employees.",
        tips: "Be genuine and enthusiastic. Demonstrate your interest in the company and its mission.",
      },
      {
        question: "How do you prioritize your work?",
        answer:
          "I prioritize tasks based on their urgency and importance. I use a combination of [mention specific methods like task management tools, to-do lists, or prioritization matrices] to keep track of deadlines and ensure I'm working on the most critical tasks first. I'm also open to adjusting priorities based on new information or changes in deadlines.",
        method:
          "Explain your approach to prioritizing tasks. Mention any tools or techniques you use. Emphasize your flexibility and ability to adapt to changing demands.",
        resources:
          "Time management resources, project management tools like Trello or Asana.",
        tips: "Provide concrete examples of how you have prioritized work in the past. Avoid vague statements and focus on results.",
      },
      {
        question: "What motivates you?",
        answer:
          "I'm motivated by [mention specific motivators like challenges, learning opportunities, or contributing to a team]. I thrive in environments where I can [mention specific desires like take ownership, solve problems, or make a tangible impact]. I'm also driven by a desire to continuously learn and improve my skills in web development.",
        method:
          "Identify your genuine motivators and connect them to the job description. Show enthusiasm and a desire for growth. Be honest and authentic.",
        resources:
          "Reflect on your past experiences and what has driven you to succeed.",
        tips: "Avoid clichés and focus on your personal values and aspirations.",
      },
      {
        question: "How do you handle feedback?",
        answer:
          "I value constructive feedback and see it as an opportunity to grow. I'm open to receiving feedback, both positive and negative, and I actively seek to understand the reasoning behind it. I use feedback to identify areas for improvement and implement changes to enhance my performance.",
        method:
          "Show that you're open to feedback and willing to learn. Explain how you approach feedback and use it to improve your work. Emphasize your growth mindset.",
        resources:
          "Reflect on past experiences where you received feedback and how you used it.",
        tips: "Provide a specific example of how you implemented feedback to improve a project.",
      },
      {
        question: "What do you expect from your manager or team?",
        answer:
          "I expect clear communication, constructive feedback, and support from my manager and team. I believe collaboration and open communication are essential for success, and I value a supportive and encouraging work environment where I can learn and grow. I also expect clear goals and objectives for the projects I'm working on.",
        method:
          "Focus on key expectations related to teamwork, communication, and learning. Emphasize your desire to contribute to a collaborative environment.",
        resources:
          "Reflect on your past experiences and identify what worked well in terms of team dynamics and management style.",
        tips: "Avoid making demands and focus on what you can contribute to the team.",
      },
      {
        question: "What is your greatest achievement?",
        answer:
          "One of my greatest achievements was [mention a specific accomplishment related to web development or a relevant skill].  I was able to [explain the challenge you overcame or the impact you made] and I learned [mention the key takeaways or skills you gained]. This experience demonstrated my [mention the specific skills or qualities that the achievement showcased].",
        method:
          "Choose an achievement that demonstrates skills relevant to the job description. Explain the challenge, your contribution, and the outcome. Highlight the skills or qualities you developed.",
        resources:
          "Review your past projects, coursework, or volunteer experiences.",
        tips: "Be specific and provide concrete examples. Quantify your achievements whenever possible.",
      },
      {
        question: "What skills would you like to develop in this role?",
        answer:
          "I'm eager to develop my skills in [mention specific areas like a particular CMS platform, a new coding language, or SEO optimization]. I believe this role will provide valuable opportunities to learn and grow in these areas. I'm also interested in exploring [mention any other relevant skills or technologies that you're interested in].",
        method:
          "Identify skills that are relevant to the job description and your career goals. Show a willingness to learn and adapt. Mention specific areas you want to develop.",
        resources:
          "Review the job description and consider what skills you can further develop in that role.",
        tips: "Demonstrate a genuine desire to learn and contribute to the company's success.",
      },
      {
        question: "How would your peers or professors describe you?",
        answer:
          "My peers and professors would describe me as [mention positive adjectives like reliable, collaborative, detail-oriented, and a quick learner]. I strive to be a team player and contribute positively to the projects I'm involved in. I'm also known for being [mention any other positive qualities that are relevant to the role].",
        method:
          "Reflect on how others perceive you. Choose adjectives that align with the job requirements and demonstrate your strengths. Be honest and authentic.",
        resources: "Seek feedback from peers, professors, or mentors.",
        tips: "Use specific examples to illustrate your qualities. Avoid clichés or generic descriptions.",
      },
      {
        question: "What kind of work environment do you prefer?",
        answer:
          "I thrive in a collaborative and fast-paced environment where I can learn from others and contribute to a team effort. I enjoy [mention specific aspects of the work environment like open communication, regular feedback, or a collaborative culture]. I believe a positive and supportive environment is essential for creativity and productivity.",
        method:
          "Describe your preferred work environment, focusing on aspects that align with the company's culture. Mention any specific preferences you have for communication, collaboration, or work style.",
        resources:
          "Research the company's culture and values. Talk to people who work there to understand their experiences.",
        tips: "Be honest and authentic about your preferences. Avoid making demands or unrealistic expectations.",
      },
      {
        question: "Are you comfortable working independently?",
        answer:
          "Yes, I am comfortable working independently and taking initiative. I'm able to manage my time effectively and prioritize tasks to ensure deadlines are met. I also enjoy collaborating with others and value teamwork, but I'm confident in my ability to work autonomously when needed.",
        method:
          "Demonstrate that you can work independently while also highlighting your team-oriented approach. Emphasize your self-motivation and ability to manage your workload.",
        resources:
          "Reflect on past experiences where you worked independently or took on projects with minimal supervision.",
        tips: "Provide specific examples of times when you worked independently and achieved positive results.",
      },
    ],
  };
  const toggleQuestion = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-blue-50 p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-800 mb-8 text-center">
          Common Interview Questions
        </h1>

        <div className="space-y-4">
          {question.questions.map((q, index) => (
            <Card
              key={index}
              className="border-blue-200 hover:border-blue-300 transition-colors"
            >
              <CardHeader
                className="cursor-pointer"
                onClick={() => toggleQuestion(index)}
              >
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg md:text-xl text-blue-700">
                    {q.question}
                  </CardTitle>
                  {expandedIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-blue-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-blue-500" />
                  )}
                </div>
              </CardHeader>

              {expandedIndex === index && (
                <CardContent className="pt-4">
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <h3 className="font-semibold text-blue-700 mb-2">
                        Sample Answer:
                      </h3>
                      <p className="text-gray-700">{q.answer}</p>
                    </div>

                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-blue-700 mb-2">
                        Method:
                      </h3>
                      <p className="text-gray-700">{q.method}</p>
                    </div>

                    <div className="bg-white p-4 rounded-lg">
                      <h3 className="font-semibold text-blue-700 mb-2">
                        Resources:
                      </h3>
                      <p className="text-gray-700">{q.resources}</p>
                    </div>

                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-blue-700 mb-2">
                        Tips:
                      </h3>
                      <p className="text-gray-700">{q.tips}</p>
                    </div>
                  </div>
                </CardContent>
              )}
            </Card>
          ))}
        </div>
        <OtherQuestion />
      </div>
    </div>
  );
};

export default CommanQuestion;
