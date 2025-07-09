// src/components/Section.jsx
import React from "react";
import { BrainCircuit, Briefcase, Trophy, Users, BookOpen } from "lucide-react";

// Map string icon names to Lucide icons for flexibility
const iconMap = {
  brain: <BrainCircuit className="text-cyan-400" />,
  briefcase: <Briefcase className="text-cyan-400" />,
  trophy: <Trophy className="text-cyan-400" />,
  users: <Users className="text-cyan-400" />,
  "book-open": <BookOpen className="text-cyan-400" />,
};

const Section = ({ title, icon, children }) => (
  <section className="mb-12">
    <h2 className="text-2xl font-bold text-slate-200 mb-6 flex items-center">
      {typeof icon === "string" ? iconMap[icon] : icon}
      <span className="ml-3">{title}</span>
    </h2>
    {children}
  </section>
);

export default Section;
