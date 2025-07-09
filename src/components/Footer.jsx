// src/components/Footer.jsx
import React from "react";

const Footer = () => (
  <footer className="w-full text-center mt-16 py-6 border-t border-slate-800 bg-slate-900">
    <div className="flex flex-col items-center gap-2">
      <p className="text-sm text-slate-500">
        Designed &amp; built by{" "}
        <a
          href="https://github.com/Shauryacious"
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyan-400 hover:underline"
        >
          Shaurya Bansal
        </a>
        .
      </p>
      <p className="text-xs text-slate-600">
        &copy; {new Date().getFullYear()} Shaurya Bansal. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
