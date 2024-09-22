import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'; // Make sure to install react-icons

const Footer = () => {
  return (
    <div className="separator-footer" style={{borderTop: "3px double"}}>
    <footer className="footer">
      <div className="container-f">
        <div className="row-f">
          <div className="footer-col">
            <h4>Projects</h4>
            <ul>
              <li><a href="https://github.com/FSDavila?tab=repositories">Other Github Projects</a></li>
              <li><a href="https://github.com/FSDavila">FSDavila Github</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>About</h4>
            <ul>
              <li><a href="https://github.com/FSDavila/ReactJS-Weather-API-Frontend">About this Project</a></li>
              <li><a href="https://github.com/FSDavila/Python-Weather-API-Backend">Back-End for this App</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>FSDavila's Social Networks</h4>
            <div className="social-links">
              <a href="https://www.facebook.com/profile.php?id=61559972960579">
                <FaFacebookF />
              </a>
              <a href="https://www.instagram.com/devfilipedavila/">
                <FaInstagram />
              </a>
              <a href="https://www.linkedin.com/in/filipe-s-d-avila/">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>
        <br />
        <div className="copyright text-center">
          <br />
          <small style={{color:"white"}}>🔥 This site was constructed and brought to you by Filipe S. D'Avila - 2024</small>
        </div>
      </div>
    </footer>
    </div>
  );
};

export default Footer;
