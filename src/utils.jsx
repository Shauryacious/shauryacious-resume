// utils.js

// Extracts a readable name from a LeetCode URL
export function extractNameFromLeetCodeUrl(url) {
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

// Custom hook for localStorage-backed state
import { useState, useEffect } from "react";
export function useLocalStorageState(key, defaultValue) {
  const [state, setState] = useState(() => {
    try {
      const value = window.localStorage.getItem(key);
      return value ? JSON.parse(value) : defaultValue;
    } catch {
      return defaultValue;
    }
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
}
