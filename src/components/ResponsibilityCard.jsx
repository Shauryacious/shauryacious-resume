// src/components/ResponsibilityCard.jsx
import React from "react";

const ResponsibilityCard = ({ role, org, date, desc }) => (
  <div>
    <h4 className="font-bold text-slate-200">{role}</h4>
    <p className="text-slate-400">{org}</p>
    <p className="text-sm text-slate-500 font-mono">{date}</p>
    <p className="mt-1 text-sm">{desc}</p>
  </div>
);

export default ResponsibilityCard;
