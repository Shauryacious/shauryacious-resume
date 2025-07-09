// src/components/SkillCategory.jsx
import React from "react";
import { Code, Server, Cpu, Palette } from "lucide-react";

// Map string icon names to Lucide icons for flexibility
const iconMap = {
  code: <Code />,
  server: <Server />,
  cpu: <Cpu />,
  palette: <Palette />,
};

const SkillCategory = ({ title, skills, icon }) => (
  <div>
    <h3 className="text-lg font-semibold text-cyan-400 mb-3 flex items-center">
      {typeof icon === "string" ? iconMap[icon] : icon}
      <span className="ml-2">{title}</span>
    </h3>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill, i) => (
        <span
          key={i}
          className="bg-slate-700 text-slate-300 text-sm font-medium px-3 py-1 rounded-full"
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
);

export default SkillCategory;
