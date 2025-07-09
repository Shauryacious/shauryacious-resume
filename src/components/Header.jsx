// src/components/Header.jsx
import React from "react";
import { Mail, Phone, MapPin, Linkedin, Github, Code } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  return (
    <header className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-12">
      <div>
        <h1 className="text-5xl font-extrabold text-[#212121] dark:text-white">
          Shaurya Bansal
        </h1>
        <p className="text-xl text-[#1a73e8] dark:text-cyan-400 mt-1">
          Software Developer &amp; Competitive Programmer
        </p>
        <p className="mt-2 text-[#5f6368] dark:text-slate-400">
          Department of Computer Science and Engineering, NIT Raipur
        </p>
      </div>
      <div className="mt-6 lg:mt-0 text-right text-sm flex flex-col items-end gap-2">
        <ThemeToggle />
        <div className="flex items-center justify-end">
          <a
            href="mailto:shauryaagrawal2718@gmail.com"
            className="flex items-center hover:text-[#1a73e8] dark:hover:text-cyan-400 transition-colors"
          >
            shauryaagrawal2718@gmail.com <Mail className="ml-2 h-4 w-4" />
          </a>
        </div>
        <div className="flex items-center justify-end mt-2">
          <a
            href="tel:+916260565517"
            className="flex items-center hover:text-[#1a73e8] dark:hover:text-cyan-400 transition-colors"
          >
            +91-6260565517 <Phone className="ml-2 h-4 w-4" />
          </a>
        </div>
        <div className="flex items-center justify-end mt-2">
          <span className="flex items-center text-[#5f6368] dark:text-slate-400">
            Raipur, India <MapPin className="ml-2 h-4 w-4" />
          </span>
        </div>
        <div className="flex items-center justify-end mt-4 space-x-4">
          <a
            href="https://github.com/Shauryacious"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#5f6368] dark:text-slate-400 hover:text-[#1a73e8] dark:hover:text-cyan-400 transition-colors"
            aria-label="GitHub"
          >
            <Github className="h-6 w-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/shauryacious/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#5f6368] dark:text-slate-400 hover:text-[#1a73e8] dark:hover:text-cyan-400 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-6 w-6" />
          </a>
          <a
            href="https://leetcode.com/u/Shauryacious/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#5f6368] dark:text-slate-400 hover:text-[#1a73e8] dark:hover:text-cyan-400 transition-colors"
            aria-label="LeetCode"
          >
            <Code className="h-6 w-6" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
