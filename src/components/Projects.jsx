import React from "react";

const Projects = () => {
  const projects = [
    {
      duration: "2023 - 2024",
      title: "Homeopathy Clinic Website and App",
      description:
        "Developed a website and mobile app for a homeopathy clinic, allowing patients to book appointments and consult doctors via video calls. Integrated an ML model to classify patients as acute or chronic based on initial symptom input.",
      techStack: [
        "React Native",
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
      ],
    },
    {
      duration: "2023 - 2024",
      title: "Tourism App For Coimbatore",
      description:
        "Developed a tourism app on Android Studio for Coimbatore, featuring tourist spots, hotels, and restaurants. Integrated location-based features for a seamless user experience. Led the project from design to deployment, ensuring high-quality UI/UX. Currently under copyright, showcasing innovation in app development.",
      techStack: ["Android Studio", "Firebase"],
    },
    {
      duration: "2024",
      title: "Bonafide Certificate Request System",
      description:
        "Developed a digital solution to automate the bonafide certificate request process, reducing manual paperwork. Led the back-end implementation with SQL and PHP, and designed the front-end using HTML and CSS. Reached the finals of SREC Hackathon 1.0, demonstrating innovation and problem-solving skills.",
      techStack: ["HTML5", "CSS", "JS", "PHP", "MySQL"],
    },
  ];

  return (
    <div className="px-[13rem] py-[2.4rem] bg-[#1D1E24] text-white">
      <h1 className="text-3xl mb-12 sixtyfour-styled">Projects</h1>
      {projects.map((project, index) => (
        <section key={index} className="flex mb-8">
          <div className="w-1/2">
            <p>{project.duration}</p>
          </div>
          <div className="w-1/2 flex flex-col gap-2">
            <h1>{project.title}</h1>
            <p className="font-quicksand mb-2">{project.description}</p>
            <div className="flex gap-3 flex-wrap">
              {project.techStack.map((tech, techIndex) => (
                <span key={techIndex} className="bg-[#A8B9CF] px-2  rounded-md">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default Projects;
