// src/components/ExperienceCard.jsx
import React from "react";

const ExperienceCard = ({ company, location, role, date, description }) => (
  <div className="relative pl-8 border-l-2 border-slate-700">
    <div className="absolute -left-[11px] top-1 h-5 w-5 bg-slate-900 border-2 border-cyan-400 rounded-full"></div>
    <h3 className="text-xl font-bold text-slate-100">{role}</h3>
    <p className="text-md text-slate-400">
      {company} | {location}
    </p>
    <p className="text-sm text-slate-500 font-mono mb-3">{date}</p>
    <p>{description}</p>
  </div>
);

export default ExperienceCard;
