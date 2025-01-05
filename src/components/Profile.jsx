import React from "react";
import myImage from "../assets/me.jpg";

const Profile = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row py-5 px-6 md:px-16 items-center">
      <div className="flex flex-col justify-center items-center md:items-end w-full md:w-1/2 md:pr-10">
        <p className="text-[1.3rem]">Hey Guys! This is</p>
        <p className="text-[4rem] sm:text-[5.5rem] text-[#A8B9CF]">Adrin</p>
        <p className="text-[4rem] sm:text-[5.5rem] text-[#A8B9CF]">Bershik</p>
        <div className="flex gap-2 items-center mt-4">
          <p className="text-[1.3rem]">Follow me on</p>
          <div className="flex space-x-3">
            <a
              href="https://www.linkedin.com/in/adrinbershik/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="text-lg hover:text-[#0A66C2] transition"
            >
              <i className="bi bi-linkedin"></i>
            </a>
            <a
              href="https://github.com/Adrin-Bershik-C-J"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="text-lg hover:text-[#171515] transition"
            >
              <i className="bi bi-github"></i>
            </a>
          </div>
        </div>
        <div className="flex gap-4 justify-center md:justify-end mt-6">
          <a href="mailto:adrinbershik.2201008@srec.ac.in">
            <button className="bg-[#A8B9CF] w-28 h-10 rounded-md hover:bg-[#95A5C7] transition">
              Mail Me
            </button>
          </a>
          <a href="../assets/Resume.pdf" download="Resume.pdf">
            <button className="text-[#A8B9CF] w-32 h-10 rounded-md border border-[#A8B9CF] bg-[#1D1E24] hover:text-[#ffffff] hover:bg-[#A8B9CF] transition">
              Download CV
            </button>
          </a>
        </div>
      </div>
      <div className="w-full mb-3 md:w-1/2 flex justify-center">
        <img
          src={myImage}
          alt="Adrin Bershik"
          className="h-[22rem] sm:h-[27rem] w-[18rem] sm:w-[22rem] rounded-md"
        />
      </div>
    </div>
  );
};

export default Profile;