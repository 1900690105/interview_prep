// import React, { useState } from "react";
// import { ChevronDown, ChevronUp, Book, Globe, Youtube } from "lucide-react";

// const ShowRoadMap = ({ roadmap }) => {
//   const [expandedMilestone, setExpandedMilestone] = useState(null);
//   const [expandedTask, setExpandedTask] = useState(null);

//   const toggleMilestone = (index) => {
//     setExpandedMilestone(expandedMilestone === index ? null : index);
//     setExpandedTask(null);
//   };

//   const toggleTask = (milestoneIndex, taskIndex) => {
//     setExpandedTask(
//       expandedTask === `${milestoneIndex}-${taskIndex}`
//         ? null
//         : `${milestoneIndex}-${taskIndex}`
//     );
//   };

//   const ResourceIcon = ({ type }) => {
//     switch (type) {
//       case "Book":
//         return <Book className="w-4 h-4 mr-2" />;
//       case "Website":
//         return <Globe className="w-4 h-4 mr-2" />;
//       case "YouTube Channel":
//         return <Youtube className="w-4 h-4 mr-2" />;
//       default:
//         return null;
//     }
//   };

//   return (
//     <div className="max-w-4xl mx-auto p-6 bg-gray-100 min-h-screen">
//       <h1 className="text-3xl font-bold mb-4 text-blue-600">
//         {roadmap.roadmap.title}
//       </h1>
//       <p className="text-gray-600 mb-8">{roadmap.roadmap.description}</p>

//       {roadmap.roadmap.milestones.map((milestone, milestoneIndex) => (
//         <div
//           key={milestoneIndex}
//           className="mb-6 bg-white rounded-lg shadow-md overflow-hidden"
//         >
//           <div
//             className="flex justify-between items-center p-4 cursor-pointer bg-blue-50 hover:bg-blue-100 transition-colors duration-200"
//             onClick={() => toggleMilestone(milestoneIndex)}
//           >
//             <h2 className="text-xl font-semibold text-blue-800">
//               {milestone.title}
//             </h2>
//             <div className="flex items-center">
//               <span className="text-sm text-gray-500 mr-4">
//                 {milestone.timeline}
//               </span>
//               {expandedMilestone === milestoneIndex ? (
//                 <ChevronUp />
//               ) : (
//                 <ChevronDown />
//               )}
//             </div>
//           </div>
//           {expandedMilestone === milestoneIndex && (
//             <div className="p-4">
//               <p className="text-gray-600 mb-4">{milestone.description}</p>
//               {milestone.tasks.map((task, taskIndex) => (
//                 <div
//                   key={taskIndex}
//                   className="mb-4 border-b border-gray-200 pb-4"
//                 >
//                   <div
//                     className="flex justify-between items-center cursor-pointer hover:text-blue-600 transition-colors duration-200"
//                     onClick={() => toggleTask(milestoneIndex, taskIndex)}
//                   >
//                     <h3 className="text-lg font-medium">{task.name}</h3>
//                     {expandedTask === `${milestoneIndex}-${taskIndex}` ? (
//                       <ChevronUp />
//                     ) : (
//                       <ChevronDown />
//                     )}
//                   </div>
//                   {expandedTask === `${milestoneIndex}-${taskIndex}` && (
//                     <div className="mt-2">
//                       <p className="text-gray-600 mb-2">{task.description}</p>
//                       <h4 className="font-medium mb-2">Resources:</h4>
//                       <ul className="list-disc pl-5">
//                         {task.resources.map((resource, resourceIndex) => (
//                           <li key={resourceIndex} className="mb-1">
//                             <a
//                               href={resource.link}
//                               target="_blank"
//                               rel="noopener noreferrer"
//                               className="flex items-center text-blue-600 hover:underline"
//                             >
//                               <ResourceIcon type={resource.type} />
//                               {resource.title}
//                             </a>
//                           </li>
//                         ))}
//                       </ul>
//                     </div>
//                   )}
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ShowRoadMap;
