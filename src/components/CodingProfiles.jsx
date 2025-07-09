import React from "react";
import { ExternalLink } from "lucide-react";

// Platform icon mapping using your SVG assets
const platformIcons = {
  LeetCode: (
    <img
      src="/src/assets/lc.svg"
      alt="LeetCode"
      className="h-6 w-6 mr-2 rounded-full bg-white p-0.5"
      style={{ boxShadow: "0 1px 4px rgba(0,0,0,0.08)" }}
    />
  ),
  CodeChef: (
    <img
      src="/src/assets/cc.svg"
      alt="CodeChef"
      className="h-6 w-6 mr-2 rounded-full bg-white p-0.5"
      style={{ boxShadow: "0 1px 4px rgba(0,0,0,0.08)" }}
    />
  ),
  Codeforces: (
    <img
      src="/src/assets/cf.svg"
      alt="Codeforces"
      className="h-6 w-6 mr-2 rounded-full bg-white p-0.5"
      style={{ boxShadow: "0 1px 4px rgba(0,0,0,0.08)" }}
    />
  ),
  GeeksforGeeks: (
    <img
      src="/src/assets/gfg.svg"
      alt="GeeksforGeeks"
      className="h-6 w-6 mr-2 rounded-full bg-white p-0.5"
      style={{ boxShadow: "0 1px 4px rgba(0,0,0,0.08)" }}
    />
  ),
  Codolio: (
    <span className="inline-block h-6 w-6 mr-2 rounded-full bg-gradient-to-tr from-green-400 to-cyan-400 flex items-center justify-center text-white font-bold text-sm">
      C
    </span>
  ),
};

const CodingProfiles = ({ profiles }) => (
  <div className="flex flex-wrap gap-4">
    {profiles.map((profile) => (
      <a
        key={profile.name}
        href={profile.url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center px-4 py-2 bg-slate-800/60 hover:bg-slate-700/80 rounded-lg border border-slate-700/50 hover:border-cyan-400/60 shadow-sm transition-all group min-w-[220px]"
        style={{ minWidth: 220 }}
      >
        {platformIcons[profile.name]}
        <div className="flex flex-col flex-1">
          <span className="font-semibold text-slate-200 group-hover:text-cyan-300 transition-colors">
            {profile.name}
          </span>
          <span className="text-xs text-slate-400">@{profile.username}</span>
        </div>
        <ExternalLink className="ml-2 h-4 w-4 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
      </a>
    ))}
  </div>
);

export default CodingProfiles;
