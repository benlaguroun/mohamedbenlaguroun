import React from "react";
import "./Footer.css"; // Import the CSS for styling

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-info">
            <h4>Contact Me</h4>
            <p>
              Email:{" "}
              <a href="mailto:your-email@example.com">your-email@example.com</a>
            </p>
            <p>
              Phone: <a href="tel:+1234567890">+123 456 7890</a>
            </p>
          </div>
          <div className="footer-social">
            <h4>Follow Me</h4>
            <ul>
              <li>
                <a
                  href="https://linkedin.com/in/your-profile"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/your-profile"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/your-profile"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitter
                </a>
              </li>
            </ul>
          </div>
        </div>
        <p className="footer-copy">
          © {new Date().getFullYear()} Your Name. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
