import React from "react";
import "./Services.css"; // Import the CSS for styling

function Services() {
  const services = [
    {
      title: "Front-End Development",
      description:
        "Creating stunning and responsive web interfaces with a focus on user experience and performance.",
    },
    {
      title: "Back-End Development",
      description:
        "Building robust server-side applications and APIs to power your web applications.",
    },
    {
      title: "Full-Stack Development",
      description:
        "Combining front-end and back-end skills to deliver complete and functional web solutions.",
    },
    {
      title: "UI/UX Design",
      description:
        "Designing intuitive and user-friendly interfaces that enhance the overall user experience.",
    },
    // Add more services as needed
  ];

  return (
    <section className="services">
      <div className="container">
        <h2>My Services</h2>
        <div className="services-list">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
