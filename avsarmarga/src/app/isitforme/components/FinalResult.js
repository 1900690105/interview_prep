// import React, { useEffect, useState } from "react";
// import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
// import { CheckCircle2, XCircle, HelpCircle, ArrowRight } from "lucide-react";

// function FinalResult({ result }) {
//   const [passion, setPassion] = useState("");
//   const [profession, setProfession] = useState("");
//   const [vocation, setVocation] = useState("");
//   const [mission, setMission] = useState("");
//   const getAssessmentIcon = (value) => {
//     switch (value) {
//       case "yes":
//         return <CheckCircle2 className="w-6 h-6 text-green-500" />;
//       case "no":
//         return <XCircle className="w-6 h-6 text-red-500" />;
//       case "Maybe":
//         return <HelpCircle className="w-6 h-6 text-yellow-500" />;
//       case "maybe":
//         return <HelpCircle className="w-6 h-6 text-yellow-500" />;
//       default:
//         return null;
//     }
//   };
//   useEffect(() => {
//     const passion = JSON.parse(localStorage.getItem("passionate"));
//     const profession = JSON.parse(localStorage.getItem("Profession"));
//     const vocation = JSON.parse(localStorage.getItem("vocation"));
//     const mission = JSON.parse(localStorage.getItem("mission"));
//     if (passion) {
//       setPassion(passion);
//       console.log("passionate");
//     }
//     if (profession) {
//       setProfession(profession);
//       console.log("Profession");
//     }
//     if (vocation) {
//       setVocation(vocation);
//       console.log("vocation");
//     }
//     if (mission) {
//       setMission(mission);
//       console.log("mission");
//     }
//   }, []);
//   return (
//     <div className="max-w-5xl mx-auto p-4 space-y-6">
//       {/* Assessment Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
//         {/* Assessment Scores */}
//         <Card>
//           <CardHeader>
//             <CardTitle>Assessment Scores</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <div className="space-y-4">
//               {Object.entries(result.assessment).map(([key, value]) => (
//                 <>
//                   <div
//                     key={key}
//                     className="flex items-center justify-between p-2 bg-blue-200 rounded "
//                   >
//                     <span className="capitalize font-medium">{key}</span>
//                     {getAssessmentIcon(value)}
//                   </div>

//                   <div className="border flex items-center justify-between p-2 bg-gray-50 rounded">
//                     {key == "passion" && (
//                       <div>
//                         <p className="text-gray-700 text-justify">
//                           <span className="font-semibold">Why?: </span>
//                           {passion.reason}
//                         </p>
//                         <p className="text-gray-700 text-justify mt-3">
//                           <span className="font-semibold">What Next?: </span>
//                           {passion.next}
//                         </p>
//                       </div>
//                     )}
//                     {key == "profession" && (
//                       <div>
//                         <p className="text-gray-700 text-justify">
//                           <span className="font-semibold">Why?: </span>
//                           {profession.reason}
//                         </p>
//                         <p className="text-gray-700 text-justify mt-3">
//                           <span className="font-semibold">What Next?: </span>
//                           {profession.next}
//                         </p>
//                       </div>
//                     )}
//                     {key == "vocation" && (
//                       <div>
//                         <p className="text-gray-700 text-justify">
//                           <span className="font-semibold">Why?: </span>
//                           {vocation.reason}
//                         </p>
//                         <p className="text-gray-700 text-justify mt-3">
//                           <span className="font-semibold">What Next?: </span>
//                           {vocation.next}
//                         </p>
//                       </div>
//                     )}
//                     {key == "mission" && (
//                       <div>
//                         <p className="text-gray-700 text-justify">
//                           <span className="font-semibold">Why?: </span>
//                           {mission.reason}
//                         </p>
//                         <p className="text-gray-700 text-justify mt-3">
//                           <span className="font-semibold">What Next?: </span>
//                           {profession.next}
//                         </p>
//                       </div>
//                     )}
//                   </div>
//                 </>
//               ))}
//             </div>
//           </CardContent>
//         </Card>

//         {/* Priorities */}
//         <Card>
//           <CardHeader>
//             <CardTitle>Your Priorities</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <ol className="space-y-2">
//               {result.priorities.map((priority, index) => (
//                 <li
//                   key={index}
//                   className="flex items-center gap-2 p-2 bg-gray-50 rounded"
//                 >
//                   <span className="flex-none w-6 h-6 flex items-center justify-center bg-blue-500 text-white rounded-full text-sm">
//                     {index + 1}
//                   </span>
//                   <span>{priority}</span>
//                 </li>
//               ))}
//             </ol>
//           </CardContent>
//         </Card>
//       </div>

//       {/* Overall Fit and Reasoning */}
//       <Card>
//         <CardHeader>
//           <CardTitle>Overall Fit: {result.analysis.overall_fit}</CardTitle>
//         </CardHeader>
//         <CardContent className="space-y-4">
//           <div className="p-4 bg-gray-50 rounded">
//             <h3 className="font-semibold mb-2">Reasoning</h3>
//             <p className="text-gray-700">{result.analysis.reasoning}</p>
//           </div>
//           <div className="p-4 bg-gray-50 rounded">
//             <h3 className="font-semibold mb-2">Suggestion</h3>
//             <p className="text-gray-700">{result.analysis.suggestion}</p>
//           </div>
//         </CardContent>
//       </Card>

//       {/* Next Steps and Recommendations */}
//       <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
//         <Card>
//           <CardHeader>
//             <CardTitle>Next Steps</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <ul className="space-y-2">
//               {result.analysis.next_steps.map((step, index) => (
//                 <li
//                   key={index}
//                   className="flex items-start gap-2 p-2 bg-gray-50 rounded"
//                 >
//                   <ArrowRight className="w-5 h-5 flex-none text-blue-500 mt-0.5" />
//                   <span className="text-gray-700">{step}</span>
//                 </li>
//               ))}
//             </ul>
//           </CardContent>
//         </Card>

//         <Card>
//           <CardHeader>
//             <CardTitle>Recommendations</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <ul className="space-y-2">
//               {result.analysis.recommendations.map((recommendation, index) => (
//                 <li
//                   key={index}
//                   className="flex items-start gap-2 p-2 bg-gray-50 rounded"
//                 >
//                   <ArrowRight className="w-5 h-5 flex-none text-blue-500 mt-0.5" />
//                   <span className="text-gray-700">{recommendation}</span>
//                 </li>
//               ))}
//             </ul>
//           </CardContent>
//         </Card>
//       </div>

//       {/* Conclusion */}
//       <Card>
//         <CardHeader>
//           <CardTitle>Conclusion</CardTitle>
//         </CardHeader>
//         <CardContent>
//           <div className="p-4 bg-gray-50 rounded">
//             <p className="text-gray-700">{result.analysis.conclusion}</p>
//           </div>
//         </CardContent>
//       </Card>
//     </div>
//   );
// }

// export default FinalResult;

import React, { useEffect, useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  CheckCircle2,
  XCircle,
  HelpCircle,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  BarChart2,
  Target,
  Book,
  Compass,
} from "lucide-react";

function FinalResult({ result }) {
  const [passion, setPassion] = useState("");
  const [profession, setProfession] = useState("");
  const [vocation, setVocation] = useState("");
  const [mission, setMission] = useState("");
  const [activeSection, setActiveSection] = useState("assessment");
  const [expandedCard, setExpandedCard] = useState(null);

  useEffect(() => {
    const passion = JSON.parse(localStorage.getItem("passionate"));
    const profession = JSON.parse(localStorage.getItem("Profession"));
    const vocation = JSON.parse(localStorage.getItem("vocation"));
    const mission = JSON.parse(localStorage.getItem("mission"));

    if (passion) setPassion(passion);
    if (profession) setProfession(profession);
    if (vocation) setVocation(vocation);
    if (mission) setMission(mission);
  }, []);

  const getAssessmentIcon = (value) => {
    switch (value) {
      case "yes":
        return <CheckCircle2 className="w-6 h-6 text-green-500" />;
      case "no":
        return <XCircle className="w-6 h-6 text-red-500" />;
      case "Maybe":
      case "maybe":
        return <HelpCircle className="w-6 h-6 text-yellow-500" />;
      default:
        return null;
    }
  };

  const getSectionIcon = (section) => {
    switch (section) {
      case "assessment":
        return <BarChart2 className="w-6 h-6" />;
      case "priorities":
        return <Target className="w-6 h-6" />;
      case "recommendations":
        return <Book className="w-6 h-6" />;
      case "conclusion":
        return <Compass className="w-6 h-6" />;
      default:
        return null;
    }
  };

  const NavigationTabs = () => (
    <div className="flex flex-wrap gap-2 mb-6">
      {["assessment", "priorities", "recommendations", "conclusion"].map(
        (section) => (
          <button
            key={section}
            onClick={() => setActiveSection(section)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
              activeSection === section
                ? "bg-blue-500 text-white shadow-lg transform scale-105"
                : "bg-gray-100 hover:bg-gray-200"
            }`}
          >
            {getSectionIcon(section)}
            <span className="capitalize">{section}</span>
          </button>
        )
      )}
    </div>
  );

  const AssessmentCard = ({ category, value, details }) => (
    <Card className="mb-4 transform transition-all duration-300 hover:shadow-lg">
      <div
        className="cursor-pointer"
        onClick={() =>
          setExpandedCard(expandedCard === category ? null : category)
        }
      >
        <CardHeader className="flex flex-row items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="p-2 rounded-full bg-blue-100">
              {getAssessmentIcon(value)}
            </div>
            <CardTitle className="capitalize">{category}</CardTitle>
          </div>
          {expandedCard === category ? <ChevronUp /> : <ChevronDown />}
        </CardHeader>
      </div>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          expandedCard === category ? "max-h-96" : "max-h-0"
        }`}
      >
        <CardContent className="space-y-4 bg-gray-50 rounded-b p-4">
          <div>
            <h3 className="font-semibold mb-2">Why?</h3>
            <p className="text-gray-700">{details?.reason}</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">What Next?</h3>
            <p className="text-gray-700">{details?.next}</p>
          </div>
        </CardContent>
      </div>
    </Card>
  );

  const renderContent = () => {
    switch (activeSection) {
      case "assessment":
        return (
          <div className="space-y-4">
            {Object.entries(result.assessment).map(([key, value]) => (
              <AssessmentCard
                key={key}
                category={key}
                value={value}
                details={
                  key === "passion"
                    ? passion
                    : key === "profession"
                    ? profession
                    : key === "vocation"
                    ? vocation
                    : key === "mission"
                    ? mission
                    : null
                }
              />
            ))}
          </div>
        );

      case "priorities":
        return (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="w-6 h-6 text-blue-500" />
                Your Priorities
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {result.priorities.map((priority, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-4 bg-gray-50 rounded transform transition-all duration-300 hover:scale-102 hover:shadow-md"
                  >
                    <div className="flex-none w-8 h-8 flex items-center justify-center bg-blue-500 text-white rounded-full font-semibold">
                      {index + 1}
                    </div>
                    <p className="flex-grow">{priority}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        );

      case "recommendations":
        return (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Next Steps</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {result.analysis.next_steps.map((step, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4 p-4 bg-gray-50 rounded transform transition-all duration-300 hover:scale-102 hover:shadow-md"
                    >
                      <div className="flex-none w-8 h-8 flex items-center justify-center bg-blue-500 text-white rounded-full">
                        {index + 1}
                      </div>
                      <p className="flex-grow">{step}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Recommendations</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {result.analysis.recommendations.map(
                    (recommendation, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-4 p-4 bg-gray-50 rounded transform transition-all duration-300 hover:scale-102 hover:shadow-md"
                      >
                        <ArrowRight className="w-6 h-6 flex-none text-blue-500 mt-1" />
                        <p className="flex-grow">{recommendation}</p>
                      </div>
                    )
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        );

      case "conclusion":
        return (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Compass className="w-6 h-6 text-blue-500" />
                Final Analysis
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="p-4 bg-blue-50 rounded">
                <h3 className="font-semibold mb-2">Overall Fit</h3>
                <p className="text-lg font-medium text-blue-700">
                  {result.analysis.overall_fit}
                </p>
              </div>

              <div className="p-4 bg-gray-50 rounded">
                <h3 className="font-semibold mb-2">Reasoning</h3>
                <p className="text-gray-700">{result.analysis.reasoning}</p>
              </div>

              <div className="p-4 bg-gray-50 rounded">
                <h3 className="font-semibold mb-2">Conclusion</h3>
                <p className="text-gray-700">{result.analysis.conclusion}</p>
              </div>
            </CardContent>
          </Card>
        );
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-4 space-y-6">
      <NavigationTabs />
      {renderContent()}
    </div>
  );
}

export default FinalResult;
