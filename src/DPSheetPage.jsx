import React, { useState, useEffect } from "react";
import dpSections from "./dpSections";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

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

  useEffect(() => {
    const saved = localStorage.getItem(LOCALSTORAGE_KEY);
    if (saved) setChecked(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(checked));
  }, [checked]);

  const toggleSection = (idx) => setOpenIndex(openIndex === idx ? null : idx);

  const handleCheck = (sectionIdx, problemIdx) => {
    setChecked((prev) => ({
      ...prev,
      [`${sectionIdx}-${problemIdx}`]: !prev[`${sectionIdx}-${problemIdx}`],
    }));
  };

  // Calculate section progress
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

  // Calculate overall progress
  const totalProblems = dpSections.reduce(
    (sum, section) => sum + (section.links?.length || 0),
    0
  );
  const totalSolved = dpSections.reduce(
    (sum, section, sectionIdx) =>
      sum +
      (section.links
        ? section.links.filter(
            (_, problemIdx) => checked[`${sectionIdx}-${problemIdx}`]
          ).length
        : 0),
    0
  );
  const overallPercent =
    totalProblems === 0 ? 0 : Math.round((totalSolved / totalProblems) * 100);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white font-sans py-10 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Heading and Progress Side by Side */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-10 gap-6">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-2">
              <span className="text-amber-400 drop-shadow">DP Sheet</span>
            </h1>
            <p className="text-lg text-white italic font-medium">
              Isko Laga Dala To DP Jhingalala!
            </p>
            <div className="mt-4 text-lg text-gray-300 font-semibold">
              Total Progress:{" "}
              <span className="text-amber-400">{totalSolved}</span>
              <span className="text-gray-400"> / {totalProblems}</span>
            </div>
          </div>
          <div className="w-32 h-32 flex-shrink-0">
            <CircularProgressbar
              value={overallPercent}
              text={`${overallPercent}%`}
              styles={buildStyles({
                pathColor: "#f59e42",
                textColor: "#fff",
                trailColor: "#333",
                textSize: "24px",
                strokeLinecap: "round",
              })}
              strokeWidth={10}
            />
          </div>
        </div>
        {/* Section Accordions */}
        <div className="space-y-6">
          {dpSections.map((section, sectionIdx) => {
            const { percent, solved, total } = getSectionProgress(
              sectionIdx,
              section.links
            );
            return (
              <div
                key={section.title}
                className="bg-gray-800 rounded-2xl border border-gray-700 shadow-xl p-6"
              >
                {/* Progress Bar and Count */}
                <div className="flex items-center mb-3">
                  <div className="flex-1 mr-4">
                    <div className="relative h-3 w-full rounded-full bg-gray-700 overflow-hidden">
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
                  className={`w-full flex justify-between items-center px-2 py-3 text-xl font-bold focus:outline-none transition-colors rounded-xl ${
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
