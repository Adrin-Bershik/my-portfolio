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
          <linearGradient
            id="deviconAngular0"
            x1="14.704"
            x2="110.985"
            y1="46.27"
            y2="92.024"
            gradientTransform="matrix(1 0 0 -1 0 130)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#e40035" />
            <stop offset=".24" stopColor="#f60a48" />
            <stop offset=".352" stopColor="#f20755" />
            <stop offset=".494" stopColor="#dc087d" />
            <stop offset=".745" stopColor="#9717e7" />
            <stop offset="1" stopColor="#6c00f5" />
          </linearGradient>
          <path
            fill="url(#deviconAngular0)"
            d="m124.5 21.3l-4.4 68.6L78.3 0zm-29 88.7L64 128l-31.5-18l6.4-15.5h50.3zM64 34.1l16.5 40.2h-33zM7.9 89.9L3.5 21.3L49.7 0z"
          />
          <linearGradient
            id="deviconAngular1"
            x1="28.733"
            x2="91.742"
            y1="117.071"
            y2="45.195"
            gradientTransform="matrix(1 0 0 -1 0 130)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#ff31d9" />
            <stop offset="1" stopColor="#ff5be1" stopOpacity="0" />
          </linearGradient>
          <path
            fill="url(#deviconAngular1)"
            d="m124.5 21.3l-4.4 68.6L78.3 0zm-29 88.7L64 128l-31.5-18l6.4-15.5h50.3zM64 34.1l16.5 40.2h-33zM7.9 89.9L3.5 21.3L49.7 0z"
          />
        </svg>
      ),
    },
    { name: "MongoDB", icon: mongodb },
  ];

  return (
    <section className="px-[13rem] py-[2.4rem] bg-[#1D1E24] text-white">
      <h3 className="text-3xl mb-12 sixtyfour-styled">Skills</h3>
      <div className="grid grid-cols-3 gap-8">
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
