// src/components/Footer.jsx
import React from "react";

const Footer = () => (
  <footer className="w-full text-center mt-16 py-6 border-t border-[#e3e7ea] dark:border-[#23272b] bg-white dark:bg-[#181c20] transition-colors">
    <div className="flex flex-col items-center gap-2">
      <p className="text-sm text-[#5f6368] dark:text-slate-400">
        Designed &amp; built by{" "}
        <a
          href="https://github.com/Shauryacious"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#1a73e8] dark:text-cyan-400 hover:underline"
        >
          Shaurya Bansal
        </a>
        .
      </p>
      <p className="text-xs text-[#9aa0a6] dark:text-slate-600">
        &copy; {new Date().getFullYear()} Shaurya Bansal. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
