// ProblemList.js
import React from "react";
import { extractNameFromLeetCodeUrl } from "./utils";

const ProblemList = ({
  links,
  sectionIdx,
  checked,
  favorites,
  handleCheck,
  handleFavorite,
}) => (
  <ul className="space-y-2 mt-2">
    {links.map((url, problemIdx) => {
      const favKey = `${sectionIdx}-${problemIdx}`;
      const isFav = !!favorites[favKey];
      return (
        <li
          key={url}
          className="flex items-center gap-3 bg-gray-700 rounded-lg px-3 py-2 hover:bg-gray-600 transition"
        >
          <input
            type="checkbox"
            className="accent-amber-400 w-5 h-5"
            checked={!!checked[favKey]}
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
          <button
            className={`ml-auto text-2xl focus:outline-none transition-colors ${
              isFav ? "text-amber-400" : "text-gray-500 hover:text-amber-300"
            }`}
            title={isFav ? "Remove from favorites" : "Add to favorites"}
            onClick={() => handleFavorite(sectionIdx, problemIdx, url)}
            style={{
              background: "none",
              border: "none",
              padding: 0,
              cursor: "pointer",
            }}
            type="button"
          >
            {isFav ? "★" : "☆"}
          </button>
        </li>
      );
    })}
  </ul>
);

export default ProblemList;
