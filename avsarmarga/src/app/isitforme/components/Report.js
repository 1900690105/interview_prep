import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle2,
  ListOrdered,
  ThumbsUp,
  Target,
  ArrowRight,
} from "lucide-react";

function Report({ result }) {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      {/* Decision Section */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white shadow-xl">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold">Career Decision</h1>
          <Badge className="text-lg px-6 py-2 bg-white/20 backdrop-blur-sm rounded-full border-2 border-white/30">
            {result.decision}
          </Badge>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Recommendation Card */}
        <Card className="md:col-span-2 hover:shadow-lg transition-shadow duration-300 bg-gradient-to-br from-white to-gray-50">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-xl">
              <div className="p-2 rounded-full bg-blue-100 text-blue-600">
                <ThumbsUp className="h-6 w-6" />
              </div>
              Recommendation
            </CardTitle>
          </CardHeader>
          <CardContent className="text-gray-600 leading-relaxed">
            <p className="text-base">{result.recommendation}</p>
          </CardContent>
        </Card>

        {/* Conclusion Card */}
        <Card className="md:col-span-2 hover:shadow-lg transition-shadow duration-300 bg-gradient-to-br from-white to-gray-50">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-xl">
              <div className="p-2 rounded-full bg-green-100 text-green-600">
                <CheckCircle2 className="h-6 w-6" />
              </div>
              Conclusion
            </CardTitle>
          </CardHeader>
          <CardContent className="text-gray-600 leading-relaxed">
            <p className="text-base">{result.conclusion}</p>
          </CardContent>
        </Card>

        {/* Priority Order Card */}
        <Card className="md:col-span-2 hover:shadow-lg transition-shadow duration-300 bg-gradient-to-br from-white to-gray-50">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-xl">
              <div className="p-2 rounded-full bg-purple-100 text-purple-600">
                <ListOrdered className="h-6 w-6" />
              </div>
              Priority Order
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {result.priority_order.map((priority, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-gray-50 to-white hover:from-gray-100 hover:to-gray-50 transition-colors duration-300 border border-gray-100"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-purple-600 to-blue-600 text-white font-bold text-base">
                    {index + 1}
                  </div>
                  <span className="text-gray-700 text-base">{priority}</span>
                  <ArrowRight className="ml-auto text-gray-400" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default Report;
