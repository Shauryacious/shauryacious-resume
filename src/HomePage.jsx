import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

// // You can use an online SVG or illustration for the hero section

const features = [
  {
    title: "1v1 Coding Duels",
    description:
      "Challenge friends or random opponents to real-time coding battles.",
    icon: "⚔️",
  },
  {
    title: "Wide Problem Selection",
    description:
      "Diverse problems sourced from top platforms like Codeforces and LeetCode.",
    icon: "🧩",
  },
  {
    title: "Live Leaderboard",
    description: "Track your progress and climb the ranks with every duel.",
    icon: "🏆",
  },
  {
    title: "Instant Feedback",
    description:
      "Get real-time results and detailed solutions after each match.",
    icon: "⚡",
  },
];

const HomePage = () => (
  <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white font-sans">
    <main className="max-w-5xl mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="text-center mb-16 animate-fade-in">
        {/* <HeroIllustration /> */}
        <h1 className="text-5xl font-extrabold mb-4 tracking-tight">
          Welcome to <span className="text-amber-400 drop-shadow">CP Duel</span>
        </h1>
        <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
          The ultimate platform for competitive programmers to battle, learn,
          and rise to the top.
        </p>
        <a
          href="/contest"
          className="inline-block bg-amber-400 text-gray-900 font-semibold px-10 py-4 rounded-full shadow-lg hover:bg-amber-300 transition text-lg"
        >
          Start a Duel
        </a>
      </section>

      {/* Features Section */}
      <section>
        <h2 className="text-3xl font-bold mb-10 text-center">
          Why <span className="text-amber-400">CP Duel</span>?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-gray-800 rounded-xl p-8 flex items-start gap-6 shadow-lg border border-gray-700 hover:scale-105 hover:border-amber-400 transition-all duration-200"
            >
              <div className="text-4xl">{feature.icon}</div>
              <div>
                <h3 className="font-bold text-xl mb-2">{feature.title}</h3>
                <p className="text-gray-300 text-base">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Community Section */}
      <section className="mt-20 text-center">
        <h2 className="text-2xl font-semibold mb-2">
          Join a Thriving Community
        </h2>
        <p className="text-gray-400 mb-4">
          Compete with coders worldwide, improve your skills, and make new
          friends.
        </p>
      </section>
    </main>
  </div>
);

export default HomePage;
