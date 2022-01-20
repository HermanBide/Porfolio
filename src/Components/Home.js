import React from "react";
import "./Home.css";
import AboutMe from "./AboutMe";
import Contact from "./Contact";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import ViewHeadlineIcon from "@mui/icons-material/ViewHeadline";
import CloseIcon from "@mui/icons-material/Close";
import CodeIcon from "@mui/icons-material/Code";
import BrushIcon from "@mui/icons-material/Brush";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import SportsBasketballIcon from "@mui/icons-material/SportsBasketball";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import MusicNoteIcon from "@mui/icons-material/MusicNote";

export default function Home() {
  <>
    <Router>
      <Switch>
        <Route path="/AboutMe" component={AboutMe} />
        <Route path="/Contact" component={Contact} />
      </Switch>
    </Router>
  </>;
  return (
    <body>
      {/*navbar */}
      <nav className="nav" id="nav">
        <div className="nav-center">
          {/*nav header */}
          <div className="nav-header">
            <h1 className="nav-logo">HB</h1>
            <button className="nav-btn" id="nav-btn">
              <ViewHeadlineIcon className="i" />
            </button>
          </div>
          {/* nav-links */}
          <ul className="nav-links">
            <li>
              <Link to="/">home</Link>
            </li>
            <li>
              <Link to="/AboutMe">About</Link>
            </li>
            {/* <li>
              <Link to="/Projects">projects</Link>
            </li> */}
            <li>
              <Link to="/Contact">contact</Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* sidebar */}
      <aside className="sidebar" id="sidebar">
        <div>
          <button className="close-btn" id="close-btn">
            <CloseIcon className="i" />
          </button>
          {/* nav-links */}
          <ul className="sidebar-links">
            <li>
              <Link to="/">home</Link>
            </li>
            <li>
              <Link to="/Contact">contact</Link>
            </li>
          </ul>

          {/* social icons */}
          <ul className="social-icons">
            <li>
              <a
                href="https://www.linkedin.com/in/herman-bide/"
                className="social-icon"
              >
                <LinkedInIcon className="i" />
              </a>
            </li>
            <li>
              <a href="https://github.com/HermanBide" className="social-icon">
                <GitHubIcon className="i" />
              </a>
            </li>
          </ul>
        </div>
      </aside>

      {/* header */}
      <header className="hero">
        <div className="section-center hero-center">
          <article className="hero-info">
            <div className="underline"></div>
            <h1>i'm Herman</h1>
            <h4>Full-Stack Software Engineer</h4>
            <a href="Contact" className="btn hero-btn">
              Contact me
            </a>

            {/* social icons */}
            <ul className="social-icons hero-icons">
              <li>
                <a
                  href="https://www.linkedin.com/in/herman-bide/"
                  className="social-icon"
                >
                  <LinkedInIcon className="i" />
                </a>
              </li>
              <li>
                <a href="https://github.com/HermanBide" className="social-icon">
                  <GitHubIcon className="i" />
                </a>
              </li>
            </ul>
          </article>
          <article className="hero-img">
            <img
              src="https://iili.io/7W7GHB.md.jpg"
              className="hero-photo"
              alt="herman bide"
            />
          </article>
        </div>
      </header>

      {/* about */}
      <section className="section about">
        <div className="section-center about-center">
          {/* about info */}
          <article className="about-info">
            <div className="section-title about-title">
              <h2>About me</h2>
              <div className="underline"></div>
            </div>

            <p className="projects-text">
              I am Full-Stack Software Engineer that transitioned from health
              Care Administration with experience in engineering. I write code
              solutions to solve complex problems all while confronting front
              and back-end problems. I come from a family with strong
              backgrounds in health and in the tech field. I have a strong
              desire to learn and grow as an engineer, I am passionate about
              building innovative and scalable software applications, creating,
              extracting and manipulating data. I have always enjoy building and
              creating things and get a satisfaction from the final outcome
              especially when they work. I consider myself a team player, my
              experience in the health field have provided me with skills such
              as good communication, patience, problem solving, time management,
              being resourceful and accountability.
            </p>
            <br />
            <a href="AboutMe" className="btn">
              about me
            </a>
          </article>

          <div className="resume_item resume_hobby">
            <div className="section-title about-title">
              <h2>Hobbies</h2>
              <div className="underline"></div>
            </div>
            <ul>
              <li>
                <SportsEsportsIcon className="icon" />
              </li>
              <li>
                <MusicNoteIcon className="icon" />
              </li>
              <li>
                <SportsBasketballIcon className="icon" />
              </li>
              <li>
                <FlightTakeoffIcon className="icon" />
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* services */}
      <section className="section bg-grey">
        <div className="section-title">
          <h2>services</h2>
          <div className="underline"></div>
        </div>

        <div className="services-center section-center">
          <article className="service">
            <CodeIcon className="i" />
            <h4>Web development</h4>
            <div className="underline"></div>
            <p>
              Develop dynamic and friendly user-interractive web applications and softwares
              by developing functional code, utilizing front and back-end frameworks while maintianing connection to database.
            </p>
          </article>

          <article className="service">
            <BrushIcon className="i" />
            <h4>Web design</h4>
            <div className="underline"></div>
            <p>
              Develop aesthetically, simple and plesant experience for navigation with a strong understanding of user interface design both on desktop and mobile.; 
            </p>
          </article>

          <article className="service">
            <PhoneAndroidIcon className="i" />
            <h4>app design</h4>
            <div className="underline"></div>
            <p>
              Experience in creating mobile applications for user interraction and experience.
            </p>
          </article>
        </div>
      </section>

      {/* projects */}
      <section className="section projects">
        <div className="section-title">
          <h2>latest works</h2>
          <div className="underline"></div>
          <p className="projects-text">
            Applying full-stack frameworks such as React, Express/Node,
            Flask/Njango Python, javascript and database(MongoDB, PostSQL).
            Applying Restful services and REST Api development all while
            building and maintaining applications.
          </p>
        </div>

        <div className="section-center projects-center">
          {/* single project */}

          <a href="https://chat-spot.netlify.app/" className="project-1">
            <article className="project">
              <img
                src="https://iili.io/7WREqx.md.png"
                alt="single project"
                className="project-img"
              />
              <div className="project-info">
                <h4>Chat-spot</h4>
                <p>Technologies used: React.js, javascript </p>
              </div>
            </article>
          </a>

          {/* single project */}
          <a href="https://quick-share-app.netlify.app" className="project-2">
            <article className="project">
              <img
                src="https://iili.io/7WRLLG.md.png"
                alt="single project"
                className="project-img"
              />
              <div className="project-info">
                <h4>Quick_share</h4>
                <p>Technologies used: React.js, javascript, Python, Flask, SQL Postgres </p>
              </div>
            </article>
          </a>

          {/* single project */}
          <a href="https://goal-planner.netlify.app/" className="project-3">
            <article className="project">
              <img
                src="https://iili.io/7W59p9.md.png"
                alt="single project"
                className="project-img"
              />
              <div className="project-info">
                <h4>Goal_planner</h4>
                <p>Technologies used: React.js, javascript, Node.js, Express.Js and MongoDB</p>
              </div>
            </article>
          </a>

          {/* single project */}
          {/* <a href="Projects" className="project-4">
            <article className="project">
              <img
                src="./images/project-4.jpeg"
                alt="single project"
                className="project-img"
              />
              <div className="project-info">
                <h4>project title</h4>
                <p>React.js, javascript, Node.js, Express.Js and MongoDB</p>
              </div>
            </article>
          </a> */}
        </div>
      </section>

      {/* skills */}
      <section className="section skills">
        <div className="section-title">
          <h2>skills</h2>
          <div className="underline"></div>
        </div>

        <div className="section-center skills-center">
          <article>
            <h3>Languages</h3>
            {/* single skill */}
            <div className="skill">
              <p>HTML5</p>
            </div>

            <div className="skill">
              <p>CSS3</p>
            </div>

            {/* single skill */}
            <div className="skill">
              <p>Javascript</p>
            </div>

            {/* single skill */}
            <div className="skill">
              <p>Python</p>
            </div>
          </article>
          <article>
            <h3>Framework</h3>
            {/* single skill */}
            <div className="skill">
              <p>Node.Js</p>
            </div>
            <div className="skill">
              <p>Express.Js</p>
            </div>

            <div className="skill">
              <p>django</p>
            </div>

            <div className="skill">
              <p>Flask</p>
            </div>

            <div className="skill">
              <p>React.js</p>
            </div>
          </article>
          <article>
            <h3>Other</h3>
            {/* single skill */}
            <div className="skill">
              <p>MySQL Workbench</p>
            </div>
            {/* single skill */}
            <div className="skill">
              <p>Postman</p>
            </div>

            {/* single skill */}
            <div className="skill">
              <p>GitHub</p>
            </div>

            {/* single skill */}
            <div className="skill">
              <p>Netlify</p>
            </div>

            <div className="skill">
              <p>MongoDB</p>
            </div>

            <div className="skill">
              <p>SQL Postgres</p>
            </div>

            {/* single skill */}
            <div className="skill">
              <p>Googling</p>
            </div>
          </article>
        </div>
      </section>

      {/* Timeline */}
      <section className="section timeline">
        <div className="section-title">
          <h2>Experience</h2>
          <div className="underline"></div>
        </div>

        <div className="section-center timeline-center">
          {/* single timeline item */}
          <article className="timeline-item">
            <h4>2020 - current</h4>
            <p>
               Development and Maintenance of website/web page.
              <br />
               Implemented responsive web design for crafting site for optimal
              viewing experience.
              <br />
               Worked on both back-end and front-end programming on previous
              project.
              <br />
               Build website and connect back end to database.
              <br />
               Experience with RESTful API and testing with Postman.
              <br />
               Operating software Visual Studio code.
              <br /> Operating systems: Windows and Apple OS X.
            </p>
            <span className="number">1</span>
          </article>
        </div>
      </section>

      {/*} footer */}
      <footer className="footer">
        {/* social icons */}
        <ul className="social-icons">
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

        <p>
          &copy; <span id="date"></span> Herman Bide. all rights reserved
        </p>
      </footer>
    </body>
  );
}
