import React from "react";
import myImage from "../assets/me.jpg";
const Profile = () => {
  return (
    <div className="flex py-5">
      <div className="flex flex-col  justify-center items-end w-1/2 pr-10">
        <p className="text-[1.3rem]">Hey Guys! This is</p>
        <p className="text-[5.5rem] text-[#A8B9CF]">Adrin</p>
        <p className="text-[5.5rem] text-[#A8B9CF]">Bershik</p>
        <div className="flex gap-2">
          <p className="text-[1.3rem]">Follow me on</p>
          <div className="flex space-x-3">
            <a
              href="https://www.linkedin.com/in/adrinbershik/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-linkedin text-lg"></i>
            </a>
            <a
              href="https://github.com/Adrin-Bershik-C-J"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-github text-lg"></i>
            </a>
          </div>
        </div>
        <br></br>
        <div class="flex gap-4 justify-end">
          <a href="mailto:adrinbershik.2201008@srec.ac.in">
            <button class="bg-[#A8B9CF] w-20 h-6 rounded-md border-none">
              Mail Me
            </button>
          </a>
          <a href="../assets/Resume.pdf" download="Resume.pdf">
            <button class="text-[#A8B9CF] w-[7rem] h-6 rounded-md border border-[#A8B9CF] bg-[#1D1E24]">
              Download CV
            </button>
          </a>
        </div>
      </div>
      <div className="w-1/2">
        <img src={myImage} className="h-[27rem] w-[22rem] rounded-md" />
      </div>
    </div>
  );
};

export default Profile;
