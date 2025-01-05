import React from "react";

const Navbar = () => {
  return (
    <div className="flex py-5 justify-around">
      <h1 className="font-sixtyfour text-orange-400 text-2xl">AB</h1>
      <ul className="flex gap-5">
        <li>
          <a href="#home" className="hover:text-orange-400 transition">
            Home
          </a>
        </li>
        <li>
          <a href="#about" className="hover:text-orange-400 transition">
            About
          </a>
        </li>
        <li>
          <a href="#skills" className="hover:text-orange-400 transition">
            Skills
          </a>
        </li>
        <li>
          <a href="#projects" className="hover:text-orange-400 transition">
            Projects
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:text-orange-400 transition">
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
