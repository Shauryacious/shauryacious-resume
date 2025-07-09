// src/components/AchievementCard.jsx
import React from "react";
import { Trophy, Star, Award, Code } from "lucide-react";

const iconMap = {
  trophy: <Trophy className="h-6 w-6 text-amber-400" />,
  star: <Star className="h-6 w-6 text-yellow-400" />,
  "award-blue": <Award className="h-6 w-6 text-blue-400" />,
  "award-slate": <Award className="h-6 w-6 text-slate-400" />,
  code: <Code className="h-6 w-6 text-green-400" />,
};

const AchievementCard = ({ icon, title, desc }) => (
  <div className="bg-slate-800/50 p-4 rounded-lg flex items-center space-x-4 border border-slate-700/50">
    <div className="flex-shrink-0">{iconMap[icon]}</div>
    <div>
      <h4 className="font-semibold text-slate-200">{title}</h4>
      <p className="text-sm">{desc}</p>
    </div>
  </div>
);

export default AchievementCard;
