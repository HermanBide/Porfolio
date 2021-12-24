import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import ViewHeadlineIcon from "@mui/icons-material/ViewHeadline";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import PhoneIcon from '@mui/icons-material/Phone';

function Contact() {
  return (
    <body>
      {/* navbar */}
      <nav className="nav" id="nav">
        <div className="nav-center">
          {/* nav header */}
          <div className="nav-header">
            <img src="./images/logo.svg" className="nav-logo" alt="" />
            <button className="nav-btn" id="nav-btn">
              <ViewHeadlineIcon className="i" />
            </button>
          </div>
          {/* nav links */}
          <ul className="nav-links">
            <li>
              <Link to="/">home</Link>
            </li>
            <li>
              <Link to="/AboutMe">About</Link>
            </li>
            {/* <li><Link to="/Projects">projects</Link></li> */}
            <li>
              <Link to="/Contact">contact</Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* sidebar */}
      <aside className="sidebar" id="sidebar">
        <div>
          <button id="close-btn" className="close-btn">
            <CloseIcon className="i" />
          </button>
          <ul className="sidebar-links">
            <li>
              <Link to="/">home</Link>
            </li>
            <li>
              <Link to="/AboutMe">About</Link>
            </li>
            {/* <li><Link to="/Projects">projects</Link></li> */}
            <li>
              <Link to="/Contact">contact</Link>
            </li>
          </ul>
          <ul className="social-icons">
            {/* single item */}
            <li>
              <a
                href="https://www.linkedin.com/in/herman-bide/"
                className="social-icon"
              >
                <LinkedInIcon className="i" />
              </a>
            </li>
            <li>
              <a href="https://github.com/bherman2020" className="social-icon">
                <GitHubIcon className="i" />
              </a>
            </li>
          </ul>
        </div>
      </aside>

      <section className="section single-page">
        <div className="section-title">
          <h1>contact</h1>
          <div className="underline"></div>
        </div>

        <div className="section-center page-info">
          {/* contact page */}
          <p>
            <h4>My Email</h4>
            <a href="herm.bide@gmail.com"> <h5>herm.bide@gmail.com.
            </h5></a>
          </p>

          <div class='phone'>
             <PhoneIcon/> 
             <h4>
               (925)206-2049
             </h4>
          </div>

          <div className="Social">
            <p>
              <a
                href="https://www.linkedin.com/in/herman-bide/"
                className="social-icon"
              >
              <h4>https://www.linkedin.com/in/herman-bide/</h4>
                <LinkedInIcon className="i" />
              </a>
              <br/>

              <a href="https://github.com/HermanBide">
              <h4>https://github.com/HermanBide"</h4>
                <GitHubIcon className="i" />
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* footer */}
      <footer className="footer">
        <ul className="social-icons">
          {/* single item */}
          <li>
            <a
              href="https://www.linkedin.com/in/herman-bide/"
              className="social-icon"
            >
              <LinkedInIcon className="i" />
            </a>
          </li>
          {/* single item */}
          <li>
            <a href="https://github.com/HermanBide" className="social-icon">
              <GitHubIcon className="i" />
            </a>
          </li>
        </ul>

        <p>
          &copy; <span id="date"></span> Herman Bide. All rights reserved.
        </p>
      </footer>
      <script src="./js/app.js"></script>
    </body>
  );
}

export default Contact;
