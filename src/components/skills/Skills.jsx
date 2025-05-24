import React from "react";
import SkillsLevel from "./SkillsLevel.jsx";

const Skills = () => {
  return (
    <>
      <section
        id="about"
        className="bg-white dark:bg-slate-800 dark:text-white"
      >
        <div className="container md:w-[70%] sm:py-16 py-10">
          <div className="grid items-center gap-4 grid-cols-1 sm:grid-cols-2">
            <div className="sm:order-2 relative font-bold">
              <div className="text-center text-6xl xl:text-8xl font-bold text-black/5 dark:text-gray-700">
                SKILLS
              </div>
              <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl md:text-4xl">
                Skills
              </h1>
            </div>
            <div className="sm:order-1 text-slate-500">
              <SkillsLevel skillName="HTML" percentage="90%" />
              <SkillsLevel skillName="CSS" percentage="95%" />
              <SkillsLevel skillName="Tailwind" percentage="80%" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
