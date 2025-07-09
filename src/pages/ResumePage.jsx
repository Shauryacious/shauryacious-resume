import React, { useState, useEffect } from "react";
import {
  skills,
  projects,
  experiences,
  achievements,
  responsibilities,
  miscellaneous,
} from "../data";
import Header from "../components/Header";
import Section from "../components/Section";
import SkillCategory from "../components/SkillCategory";
import ProjectCard from "../components/ProjectCard";
import ExperienceCard from "../components/ExperienceCard";
import AchievementCard from "../components/AchievementCard";
import ResponsibilityCard from "../components/ResponsibilityCard";
import MiscCard from "../components/MiscCard";
import Footer from "../components/Footer";

const ResumePage = () => {
  const [theme, setTheme] = useState("dark");
  useEffect(() => {
    document.documentElement.classList.add(theme);
    return () => document.documentElement.classList.remove(theme);
  }, [theme]);

  return (
    <div className="min-h-screen bg-slate-900 text-slate-400 font-sans leading-relaxed">
      <div className="container mx-auto p-4 sm:p-6 lg:p-8">
        <main className="max-w-7xl mx-auto">
          <Header />

          <Section title="Technical Skills" icon="brain">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <SkillCategory
                title="Languages"
                skills={skills.languages}
                icon="code"
              />
              <SkillCategory
                title="Web/Mobile Development"
                skills={skills.web}
                icon="server"
              />
              <SkillCategory
                title="Utilities & Tools"
                skills={skills.utilities}
                icon="cpu"
              />
              <SkillCategory
                title="Soft Skills"
                skills={skills.soft}
                icon="palette"
              />
            </div>
          </Section>

          <Section title="Projects" icon="briefcase">
            <div className="space-y-8">
              {projects.map((project, i) => (
                <ProjectCard key={i} {...project} />
              ))}
            </div>
          </Section>

          <Section title="Work Experience" icon="briefcase">
            <div className="space-y-8">
              {experiences.map((exp, i) => (
                <ExperienceCard key={i} {...exp} />
              ))}
            </div>
          </Section>

          <Section title="Achievements" icon="trophy">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {achievements.map((ach, i) => (
                <AchievementCard key={i} {...ach} />
              ))}
            </div>
          </Section>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Section title="Positions of Responsibility" icon="users">
              <div className="space-y-6">
                {responsibilities.map((resp, i) => (
                  <ResponsibilityCard key={i} {...resp} />
                ))}
              </div>
            </Section>
            <Section title="Miscellaneous" icon="book-open">
              <div className="space-y-4">
                {miscellaneous.map((item, i) => (
                  <MiscCard key={i} {...item} />
                ))}
              </div>
            </Section>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default ResumePage;
