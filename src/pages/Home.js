import React from "react";
import Projects from "../components/Projects"; // Import the Projects component
import Services from "../components/Services";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

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
      {/* Footer section */}
      <Footer />
    </div>
  );
}

export default Home;
