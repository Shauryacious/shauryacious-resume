// src/components/MiscCard.jsx
import React from "react";

const MiscCard = ({ title, desc }) => (
  <div className="bg-white dark:bg-[#23272b] border border-[#e3e7ea] dark:border-[#23272b] rounded-2xl p-5 shadow-sm transition-colors">
    <h4 className="font-semibold text-[#212121] dark:text-white">{title}</h4>
    <p className="text-sm text-[#5f6368] dark:text-slate-400">{desc}</p>
  </div>
);

export default MiscCard;
