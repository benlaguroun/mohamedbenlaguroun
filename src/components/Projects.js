import React, { useState } from "react";
import "./Projects.css"; // Import the CSS for styling

function Projects() {
  const allProjects = [
    {
      title: "Project One",
      description:
        "A brief description of Project One. This could be an overview of what the project is about.",
      link: "https://github.com/your-repo/project-one",
    },
    {
      title: "Project Two",
      description:
        "A brief description of Project Two. This could be an overview of what the project is about.",
      link: "https://github.com/your-repo/project-two",
    },
    {
      title: "Project Three",
      description:
        "A brief description of Project Three. This could be an overview of what the project is about.",
      link: "https://github.com/your-repo/project-three",
    },
    {
      title: "Project Four",
      description:
        "A brief description of Project Four. This could be an overview of what the project is about.",
      link: "https://github.com/your-repo/project-four",
    },
    {
      title: "Project Five",
      description:
        "A brief description of Project Five. This could be an overview of what the project is about.",
      link: "https://github.com/your-repo/project-five",
    },
    {
      title: "Project Six",
      description:
        "A brief description of Project Six. This could be an overview of what the project is about.",
      link: "https://github.com/your-repo/project-six",
    },
    {
      title: "Project Seven",
      description:
        "A brief description of Project Seven. This could be an overview of what the project is about.",
      link: "https://github.com/your-repo/project-seven",
    },
    {
      title: "Project Eight",
      description:
        "A brief description of Project Eight. This could be an overview of what the project is about.",
      link: "https://github.com/your-repo/project-eight",
    },
  ];

  const [visibleProjects, setVisibleProjects] = useState(4); // Initially show 4 projects

  const showMoreProjects = () => {
    setVisibleProjects(allProjects.length); // Show all projects when clicked
  };

  return (
    <section className="projects">
      <div className="container">
        <h2>My Projects</h2>
        <div className="projects-list">
          {allProjects.slice(0, visibleProjects).map((project, index) => (
            <div key={index} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
        {visibleProjects < allProjects.length && (
          <button className="show-more-btn" onClick={showMoreProjects}>
            Show More Projects
          </button>
        )}
      </div>
    </section>
  );
}

export default Projects;
