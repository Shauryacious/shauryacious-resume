import React from "react";

// Example logo (optional)
// import logo from "./assets/logo.svg";

const socialLinks = [
  {
    href: "https://twitter.com/",
    label: "Twitter",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M22.46 5.94c-.8.35-1.66.58-2.56.69a4.48 4.48 0 0 0 1.97-2.48 8.87 8.87 0 0 1-2.83 1.08 4.48 4.48 0 0 0-7.64 4.08A12.73 12.73 0 0 1 3.1 4.94a4.48 4.48 0 0 0 1.39 5.98c-.72-.02-1.4-.22-1.99-.55v.06a4.48 4.48 0 0 0 3.6 4.39 4.5 4.5 0 0 1-2.03.08 4.48 4.48 0 0 0 4.18 3.11A9 9 0 0 1 2 19.54a12.73 12.73 0 0 0 6.88 2.02c8.26 0 12.78-6.84 12.78-12.77 0-.19 0-.38-.01-.57a9.03 9.03 0 0 0 2.21-2.3z" />
      </svg>
    ),
  },
  {
    href: "https://github.com/Shauryacious/cp-duel",
    label: "GitHub",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.5 2.87 8.32 6.84 9.67.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.71-2.78.62-3.37-1.36-3.37-1.36-.45-1.17-1.11-1.48-1.11-1.48-.91-.64.07-.63.07-.63 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.33 1.11 2.9.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.73 0 0 .84-.28 2.75 1.05a9.37 9.37 0 0 1 2.5-.34c.85 0 1.71.11 2.5.34 1.91-1.33 2.75-1.05 2.75-1.05.55 1.42.2 2.47.1 2.73.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.07.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.8 0 .26.18.58.69.48A10.02 10.02 0 0 0 22 12.26C22 6.58 17.52 2 12 2z" />
      </svg>
    ),
  },
  {
    href: "mailto:shauryaagrawal2718@gmail.com",
    label: "Email",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M2.01 6.81A2 2 0 0 1 4 5h16a2 2 0 0 1 1.99 1.81L12 13.36 2.01 6.81zM2 8.25v9.5A2.25 2.25 0 0 0 4.25 20h15.5A2.25 2.25 0 0 0 22 17.75v-9.5l-9.4 6.34a1 1 0 0 1-1.2 0L2 8.25z" />
      </svg>
    ),
  },
];

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/contest", label: "Contest" },
  { href: "/leaderboard", label: "Leaderboard" },
  { href: "/about", label: "About" },
];

const Footer = () => (
  <footer className="bg-gray-900 border-t border-gray-700 pt-10 pb-6 px-4">
    <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:justify-between md:items-center gap-8">
      {/* Logo & Name */}
      <div className="flex flex-col items-center md:items-start">
        {/* <img src={logo} alt="CP Duel" className="w-10 h-10 mb-2" /> */}
        <span className="text-2xl font-bold text-amber-400 tracking-wide">
          CP Duel
        </span>
        <span className="text-gray-400 text-sm mt-1">
          The arena for competitive programmers.
        </span>
      </div>

      {/* Navigation Links */}
      <nav className="flex flex-wrap justify-center gap-6">
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="text-gray-300 hover:text-amber-400 transition font-medium"
          >
            {link.label}
          </a>
        ))}
      </nav>

      {/* Social Icons */}
      <div className="flex justify-center gap-5">
        {socialLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.label}
            className="text-gray-400 hover:text-amber-400 transition"
          >
            {link.icon}
          </a>
        ))}
      </div>
    </div>

    <div className="mt-8 text-center text-gray-500 text-xs">
      <span>© {new Date().getFullYear()} CP Duel. All rights reserved.</span>
      <span className="block mt-1">
        Made with <span className="text-amber-400">♥</span> for competitive
        programmers by <span className="text-amber-400">Shaurya Agrawal</span>.
      </span>
    </div>
  </footer>
);

export default Footer;
