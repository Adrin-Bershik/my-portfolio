import React from "react";

const GetInTouch = () => {
  return (
    <footer className="flex flex-col items-center gap-4 py-6  text-gray-300">
      <h3 className="text-lg ">Stay in touch!</h3>
      <div className="flex gap-4">
        <a
          href="https://www.linkedin.com/in/adrin-bershik-95b919256"
          className="text-gray-300 "
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bi bi-linkedin text-2xl"></i>
        </a>
        <a
          href="mailto:adrinbershik.2201008@srec.ac.in"
          className="text-gray-300 "
        >
          <i className="bi bi-envelope-fill text-2xl"></i>
        </a>
      </div>
    </footer>
  );
};

export default GetInTouch;
