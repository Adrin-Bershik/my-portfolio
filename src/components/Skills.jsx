import React from "react";
import htmlIcon from "../assets/html.png";
import cssIcon from "../assets/css.png";
import jsIcon from "../assets/js.png";
import tailwindIcon from "../assets/Tailwind_CSS_Logo.svg.png";
import react from "../assets/react.svg";
import cIcon from "../assets/c.png";
import node from "../assets/node.svg";
import express from "../assets/express-original.svg";
import mongodb from "../assets/mongodb-original.svg";
import github from "../assets/github.svg";
import mysql from "../assets/mysql.png";

const Skills = () => {
  const skills = [
    { name: "HTML5", icon: htmlIcon },
    { name: "CSS3", icon: cssIcon },
    { name: "JavaScript", icon: jsIcon },
    { name: "TailwindCSS", icon: tailwindIcon },
    { name: "ReactJS", icon: react },
    { name: "C", icon: cIcon },
    { name: "NodeJS", icon: node },
    { name: "ExpressJS", icon: express },
    { name: "MySQL", icon: mysql },
    { name: "GitHub", icon: github },
    {
      name: "AngularJS",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="80"
          height="80"
          viewBox="0 0 128 128"
        >
          {/* AngularJS SVG */}
        </svg>
      ),
    },
    { name: "MongoDB", icon: mongodb },
  ];

  return (
    <section className="px-6 lg:px-[13rem] py-[2.4rem] bg-[#1D1E24] text-white">
      <h3 className="text-3xl mb-12 sixtyfour-styled">Skills</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-[#202537] w-40 h-40 flex flex-col items-center justify-center rounded-md hover:scale-105 transition-transform duration-700"
          >
            {typeof skill.icon === "string" ? (
              <img
                src={skill.icon}
                alt={`${skill.name} icon`}
                className="h-20 w-20 mb-2 zoom"
              />
            ) : (
              <div className="h-20 w-20 mb-2">{skill.icon}</div>
            )}
            <h4 className="font-quicksand">{skill.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
