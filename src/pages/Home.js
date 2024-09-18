import React from "react";
import Projects from "../components/Projects"; // Import the Projects component
import Services from "../components/Services";
import Contact from "../components/Contact";

function Home() {
  return (
    <div>
      {/* Hero section */}

      {/* Projects section */}
      <Projects />
      {/* Services section */}
      <Services />
      {/* Contact section */}
      <Contact />
    </div>
  );
}

export default Home;
