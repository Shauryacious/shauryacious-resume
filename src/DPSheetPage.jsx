import React, { useState, useEffect } from "react";
import dpSections from "./dpSections";

// Helper to extract a readable name from a LeetCode URL
function extractNameFromLeetCodeUrl(url) {
  const problemMatch = url.match(/problems\/([a-z0-9-]+)/i);
  const listMatch = url.match(/list\/([a-z0-9-]+)/i);

  if (problemMatch) {
    const kebab = problemMatch[1];
    return kebab
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }
  if (listMatch) {
    return "LeetCode List";
  }
  return url;
}

const LOCALSTORAGE_KEY = "dpChecklistState";

const DPSheetPage = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const [checked, setChecked] = useState({});

  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem(LOCALSTORAGE_KEY);
    if (saved) {
      setChecked(JSON.parse(saved));
    }
  }, []);

  // Save to localStorage on change
  useEffect(() => {
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(checked));
  }, [checked]);

  const toggleSection = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  const handleCheck = (sectionIdx, problemIdx) => {
    setChecked((prev) => ({
      ...prev,
      [`${sectionIdx}-${problemIdx}`]: !prev[`${sectionIdx}-${problemIdx}`],
    }));
  };

  // Calculate progress for a section
  const getSectionProgress = (sectionIdx, links) => {
    if (!links || links.length === 0)
      return { percent: 0, solved: 0, total: 0 };
    const solved = links.filter(
      (_, problemIdx) => checked[`${sectionIdx}-${problemIdx}`]
    ).length;
    return {
      percent: Math.round((solved / links.length) * 100),
      solved,
      total: links.length,
    };
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white font-sans py-10 px-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-extrabold mb-8 text-center tracking-tight">
          <span className="text-amber-400">DP Sheet</span> Topics
        </h1>
        <div className="space-y-4">
          {dpSections.map((section, sectionIdx) => {
            const { percent, solved, total } = getSectionProgress(
              sectionIdx,
              section.links
            );
            return (
              <div
                key={section.title}
                className="bg-gray-800 rounded-xl border border-gray-700 shadow-lg p-4"
              >
                {/* Progress Bar and Count */}
                <div className="flex items-center mb-2">
                  <div className="flex-1 mr-4">
                    <div className="relative h-2.5 w-full rounded-full bg-gray-700 overflow-hidden">
                      <div
                        className="absolute h-full rounded-full bg-amber-400 transition-all duration-500"
                        style={{ width: `${percent}%` }}
                      ></div>
                    </div>
                  </div>
                  <div className="text-white text-base font-semibold min-w-[60px] text-right">
                    {solved} / {total}
                  </div>
                </div>
                {/* Accordion Button */}
                <button
                  onClick={() => toggleSection(sectionIdx)}
                  className={`w-full flex justify-between items-center px-2 py-2 text-lg font-semibold focus:outline-none transition-colors rounded-xl ${
                    openIndex === sectionIdx
                      ? "text-amber-400"
                      : "text-white hover:text-amber-400"
                  }`}
                >
                  {section.title}
                  <span className="ml-4">
                    {openIndex === sectionIdx ? (
                      <svg
                        width="20"
                        height="20"
                        fill="currentColor"
                        className="rotate-180 transition-transform"
                      >
                        <path d="M6 8l4 4 4-4" />
                      </svg>
                    ) : (
                      <svg
                        width="20"
                        height="20"
                        fill="currentColor"
                        className="transition-transform"
                      >
                        <path d="M6 8l4 4 4-4" />
                      </svg>
                    )}
                  </span>
                </button>
                {/* Accordion Content */}
                <div
                  className={`px-2 pb-2 text-gray-200 text-base transition-all duration-300 ease-in-out ${
                    openIndex === sectionIdx ? "block" : "hidden"
                  }`}
                >
                  {section.links && section.links.length > 0 ? (
                    <ul className="space-y-4 mt-2">
                      {section.links.map((url, problemIdx) => (
                        <li key={url} className="flex items-start gap-3">
                          <input
                            type="checkbox"
                            className="accent-amber-400 w-5 h-5 mt-1"
                            checked={!!checked[`${sectionIdx}-${problemIdx}`]}
                            onChange={() => handleCheck(sectionIdx, problemIdx)}
                            id={`dp-${sectionIdx}-${problemIdx}`}
                          />
                          <label
                            htmlFor={`dp-${sectionIdx}-${problemIdx}`}
                            className="flex-1 cursor-pointer"
                          >
                            <a
                              href={url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-white hover:text-amber-300 font-medium transition"
                            >
                              {extractNameFromLeetCodeUrl(url)}
                            </a>
                          </label>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <span>{section.description}</span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DPSheetPage;
