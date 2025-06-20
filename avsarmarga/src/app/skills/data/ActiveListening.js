export const Activelisteing = [
  {
    title: "Show Genuine Interest",
    description:
      "Demonstrate active engagement through focused attention and presence",
    actions: [
      "Make eye contact to demonstrate focus.",
      "Avoid distractions by putting away your phone.",
      "Be mentally present in the conversation.",
    ],
    img: "interest.png",
  },
  {
    title: "Use Positive Body Language",
    description: "Express engagement through non-verbal cues",
    actions: [
      "Nod occasionally to show understanding.",
      "Lean slightly forward to indicate engagement.",
    ],
    img: "body.gif",
  },
  {
    title: "Listen Without Interrupting",
    description: "Practice patience and complete attention",
    actions: [
      "Allow the speaker to finish before responding.",
      "Avoid planning your response while the speaker is talking.",
    ],
    img: "interrupt.png",
  },
  {
    title: "Ask Clarifying Questions",
    description: "Ensure clear understanding through thoughtful inquiry",
    actions: [
      "Ask questions like 'Can you elaborate on that?'",
      "Use 'What did you mean by...?' to seek clarity.",
    ],
    img: "questions.png",
  },
  {
    title: "Reflect and Summarize",
    description: "Demonstrate understanding through active feedback",
    actions: [
      "Paraphrase: 'So, you're saying that...'",
      "Reflect feelings: 'It sounds like you feel...'",
    ],
  },
  {
    title: "Give Verbal Feedback",
    description: "Provide ongoing acknowledgment and encouragement",
    actions: [
      "Use affirmations like 'I see,' 'That makes sense,' or 'I understand.'",
    ],
  },
  {
    title: "Empathize with the Speaker",
    description: "Connect emotionally with the speaker's experience",
    actions: [
      "Acknowledge emotions: 'That sounds frustrating,' or 'You must be excited about that!'",
    ],
  },
  {
    title: "Avoid Judging",
    description: "Focus on understanding without immediate solutions",
    actions: ["Listen to understand, not to offer solutions unless requested."],
  },
  {
    title: "Provide Thoughtful Responses",
    description: "Engage meaningfully with careful consideration",
    actions: ["Respond with relevance after fully understanding the message."],
  },
];

export const TipCard = ({ tip }) => {
  const Icon = tip.icon;

  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className="bg-purple-100 p-3 rounded-lg">
            <Icon className="h-6 w-6 text-purple-600" />
          </div>
          <h2 className="text-xl font-bold ml-4 text-gray-800">{tip.title}</h2>
        </div>

        <p className="text-gray-600 mb-6 leading-relaxed">{tip.description}</p>

        <div className="space-y-4">
          {tip.tips.map((item, idx) => (
            <div key={idx} className="flex items-start">
              <div className="flex-shrink-0 h-2 w-2 mt-2 rounded-full bg-purple-500" />
              <p className="ml-4 text-gray-700 leading-relaxed">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
