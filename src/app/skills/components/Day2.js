import React from "react";

const tips = [
  {
    title: "Eye Contact",
    description:
      "Maintain appropriate eye contact to show attentiveness and confidence.",
    tips: [
      "Look at the person you're speaking to without staring.",
      "Avoid excessive eye movement or looking away frequently.",
    ],
  },
  {
    title: "Facial Expressions",
    description:
      "Use facial expressions to convey emotions that match your words.",
    tips: [
      "Smile to appear friendly and approachable.",
      "Avoid showing signs of boredom or disinterest.",
    ],
  },
  {
    title: "Posture",
    description: "Adopt a confident and open posture.",
    tips: [
      "Sit or stand up straight without slouching.",
      "Avoid crossing your arms to appear more open and receptive.",
    ],
  },
  {
    title: "Gestures",
    description:
      "Use hand gestures to emphasize points, but keep them controlled.",
    tips: [
      "Use natural gestures to add emphasis to your speech.",
      "Avoid fidgeting or overusing hand movements.",
    ],
  },
  {
    title: "Tone of Voice",
    description: "Speak with a tone that matches your message and audience.",
    tips: [
      "Vary your tone to keep the listener engaged.",
      "Avoid speaking too softly or too loudly.",
    ],
  },
  {
    title: "Personal Space",
    description:
      "Respect personal space to maintain comfort and professionalism.",
    tips: [
      "Stand at a comfortable distance based on cultural norms.",
      "Avoid standing too close or far away from the listener.",
    ],
  },
  {
    title: "Handshake",
    description: "Offer a firm handshake when appropriate.",
    tips: [
      "Keep your handshake firm but not overpowering.",
      "Maintain eye contact while shaking hands.",
    ],
  },
  {
    title: "Smiling",
    description:
      "Smile appropriately to convey friendliness and approachability.",
    tips: [
      "Use genuine smiles to make a positive impression.",
      "Avoid forced or insincere smiles.",
    ],
  },
];

export default function BodyLanguageTips() {
  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <h1 className="text-3xl font-bold text-center mb-6">
        Effective Body Language for Communication
      </h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {tips.map((tip, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-2">{tip.title}</h2>
            <p className="text-gray-600 mb-4">{tip.description}</p>
            <ul className="list-disc list-inside text-gray-800">
              {tip.tips.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
