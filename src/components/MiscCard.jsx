// src/components/MiscCard.jsx
import React from "react";

const MiscCard = ({ title, desc }) => (
  <div>
    <h4 className="font-semibold text-slate-200">{title}</h4>
    <p className="text-sm">{desc}</p>
  </div>
);

export default MiscCard;
