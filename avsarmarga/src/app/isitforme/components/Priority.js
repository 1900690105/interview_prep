import React, { useState, useRef } from "react";
import { GripVertical, Check, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Priority = ({ setPriority }) => {
  const [priorities, setPriorities] = useState([
    "Personal Fulfillment(Passion)",
    "Financial Security(Money)",
    "Sense of Purpose(Experties)",
    "Social Contribution(National Development)",
  ]);
  const [draggedItem, setDraggedItem] = useState(null);
  const [draggedOverItem, setDraggedOverItem] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleDragStart = (e, position) => {
    e.target.style.opacity = "0.4";
    setDraggedItem(position);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.target.style.cursor = "grabbing";
  };

  const handleDragEnter = (position) => {
    setDraggedOverItem(position);
  };

  const handleDragEnd = (e) => {
    e.target.style.opacity = "1";
    e.target.style.cursor = "grab";

    if (draggedItem !== null && draggedOverItem !== null) {
      const newPriorities = [...priorities];
      const draggedPriority = newPriorities[draggedItem];
      newPriorities.splice(draggedItem, 1);
      newPriorities.splice(draggedOverItem, 0, draggedPriority);
      setPriorities(newPriorities);
    }

    setDraggedItem(null);
    setDraggedOverItem(null);
  };

  const handleSubmit = () => {
    localStorage.setItem("priorities", JSON.stringify(priorities));
    setPriority(false);
  };

  return (
    <div className="max-w-md mx-auto p-6 space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold text-gray-900">
          Arrange Your Priorities
        </h2>
        <p className="text-gray-600">
          Drag and drop items to set their importance
        </p>
      </div>
      <Card className="bg-white shadow-lg">
        <CardContent className="p-6">
          <div className="space-y-3">
            {priorities.map((priority, index) => (
              <div
                key={priority}
                draggable
                onDragStart={(e) => handleDragStart(e, index)}
                onDragOver={handleDragOver}
                onDragEnter={() => handleDragEnter(index)}
                onDragEnd={handleDragEnd}
                className={`
                      flex items-center gap-3 p-4 rounded-lg 
                      ${
                        index === draggedOverItem
                          ? "bg-blue-50 border-2 border-blue-200"
                          : "bg-gray-50 hover:bg-gray-100"
                      }
                      transition-all duration-200 cursor-grab active:cursor-grabbing
                    `}
              >
                <div className="flex items-center gap-2 text-gray-400">
                  <GripVertical className="w-5 h-5" />
                  <span className="w-6 text-sm font-medium">{index + 1}.</span>
                </div>

                <div className="flex-grow font-medium text-gray-700">
                  {priority}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <button
        onClick={handleSubmit}
        className="w-full py-3 px-4 bg-blue-600 text-white rounded-lg font-medium
                     hover:bg-blue-700 active:bg-blue-800 transition-colors
                     flex items-center justify-center gap-2"
      >
        <span>Submit My Priorities</span>
        <ArrowRight className="w-5 h-5" />
      </button>

      <div className="text-sm text-center space-y-2">
        <p className="text-gray-500">
          Arrange items in order of importance before submitting
        </p>
        <div className="flex items-center justify-center gap-2 text-gray-400">
          <GripVertical className="w-4 h-4" />
          <span>Drag handles indicate moveable items</span>
        </div>
      </div>
    </div>
  );
};

export default Priority;
