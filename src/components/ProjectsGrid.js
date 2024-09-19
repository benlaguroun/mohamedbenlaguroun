import React, { useState } from "react";
import "./ProjectsGrid.css"; // Add any additional custom styling here
import { Container, Row, Col } from "react-bootstrap"; // Importing Bootstrap components

function ProjectsGrid() {
  const [showAllProjects, setShowAllProjects] = useState(false);

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
      title: "Project Four",
      description:
        "A brief description of Project Four. This could be an overview of what the project is about.",
      link: "https://github.com/your-repo/project-four",
    },
    {
      title: "Project Four",
      description:
        "A brief description of Project Four. This could be an overview of what the project is about.",
      link: "https://github.com/your-repo/project-four",
    },
    // Add more projects as needed
  ];

  const handleShowMore = () => {
    setShowAllProjects(!showAllProjects);
  };

  const visibleProjects = showAllProjects ? projects : projects.slice(0, 4);

  return (
    <section className="projects">
      <Container>
        {/* Projects grid */}
        <Row className="mt-4">
          {visibleProjects.map((project, index) => (
            <Col key={index} md={6} lg={4} className="mb-4">
              <div className="project-card">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  View Project
                </a>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default ProjectsGrid;
