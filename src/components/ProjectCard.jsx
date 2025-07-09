// src/components/ProjectCard.jsx
import React from "react";
import { ChevronRight, ExternalLink } from "lucide-react";

const ProjectCard = ({ title, date, description, points, tech, link }) => (
  <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700/50 transition-all duration-300 hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-500/5">
    <div className="flex justify-between items-start gap-4">
      <div>
        <h3 className="text-xl font-bold text-slate-100">{title}</h3>
        {date && <p className="text-sm text-slate-500 font-mono">{date}</p>}
      </div>
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyan-400 hover:text-cyan-300 transition-colors flex items-center whitespace-nowrap"
          aria-label={`View ${title} on GitHub`}
        >
          View Project <ExternalLink className="ml-2 h-4 w-4" />
        </a>
      )}
    </div>
    {description && <p className="mt-3 text-slate-400">{description}</p>}
    {points && points.length > 0 && (
      <ul className="mt-4 space-y-2">
        {points.map((point, idx) => (
          <li key={idx} className="flex items-start">
            <ChevronRight className="h-4 w-4 mt-1 text-cyan-400 flex-shrink-0" />
            <span className="ml-2">{point}</span>
          </li>
        ))}
      </ul>
    )}
    {tech && tech.length > 0 && (
      <div className="mt-4 flex flex-wrap gap-2">
        {tech.map((t, idx) => (
          <span
            key={idx}
            className="bg-cyan-900/50 text-cyan-300 text-xs font-mono px-2 py-1 rounded"
          >
            {t}
          </span>
        ))}
      </div>
    )}
  </div>
);

export default ProjectCard;
