import React, { useState, useEffect } from "react";
import dpSections from "./dpSections";

// Helper to extract a readable name from a LeetCode URL
function extractNameFromLeetCodeUrl(url) {
  // Handles both /problems/xxx/ and /list/xxx
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
  // openIndex: which accordion is open (null for all closed, 0 for first open by default)
  const [openIndex, setOpenIndex] = useState(0);
  // checked: { sectionIdx-problemIdx: true/false }
  const [checked, setChecked] = useState({});

  // On mount, load checked state from localStorage
  useEffect(() => {
    const saved = localStorage.getItem(LOCALSTORAGE_KEY);
    if (saved) {
      setChecked(JSON.parse(saved));
    }
  }, []);

  // Whenever checked state changes, save to localStorage
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white font-sans py-10 px-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-extrabold mb-8 text-center tracking-tight">
          <span className="text-amber-400">DP Sheet</span> Topics
        </h1>
        <div className="space-y-4">
          {dpSections.map((section, sectionIdx) => (
            <div
              key={section.title}
              className="bg-gray-800 rounded-xl border border-gray-700 shadow-lg"
            >
              <button
                onClick={() => toggleSection(sectionIdx)}
                className={`w-full flex justify-between items-center px-6 py-4 text-lg font-semibold focus:outline-none transition-colors rounded-xl ${
                  openIndex === sectionIdx
                    ? "text-amber-400 bg-gray-900"
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
              <div
                className={`px-6 pb-4 text-gray-200 text-base transition-all duration-300 ease-in-out ${
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
          ))}
        </div>
      </div>
    </div>
  );
};

export default DPSheetPage;
