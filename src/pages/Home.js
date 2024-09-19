import React from "react";
import ProjectsGrid from "../components/ProjectsGrid"; // Import the ProjectsGrid component
import Services from "../components/Services"; // Import the Services component
import Contact from "../components/Contact"; // Import the Contact component
import Footer from "../components/Footer"; // Import the Footer component

function Home() {
  return (
    <div>
      {/* ProjectsGrid section */}
      <ProjectsGrid />

      {/* Services section */}
      <Services />

      {/* Contact section */}
      <Contact />

      {/* Footer section */}
      <Footer />
    </div>
  );
}

export default Home;
