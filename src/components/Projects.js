import React from "react";
import "./Projects.css"; // Import the CSS for styling

function Projects() {
  const projects = [
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
    // Add more projects as needed
  ];

  return (
    <section className="projects">
      <div className="container">
        <h2>My Projects</h2>
        <div className="projects-list">
          {projects.map((project, index) => (
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
      </div>
    </section>
  );
}

export default Projects;
