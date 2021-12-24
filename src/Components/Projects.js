import React from "react"
import './Projects.css'
import { Link } from 'react-router-dom'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import ViewHeadlineIcon from '@mui/icons-material/ViewHeadline';
import CloseIcon from '@mui/icons-material/Close';


export default function projects () {

    return (
        <body>
        {/*navbar */}
        <nav className="nav" id="nav">
                    <div className="nav-center">

                        {/*nav header */}
                        <div className="nav-header">
                        <h1 className="nav-logo">HB</h1> 
                        <button className="nav-btn" id="nav-btn">
                            < ViewHeadlineIcon className="i"/>
                        </button>
                        </div>
                        {/* nav-links */}
                        <ul className="nav-links">
                            <li><Link to="/">home</Link></li>
                            <li><Link to="/AboutMe">About</Link></li>
                            <li><Link to="/Projects">projects</Link></li>
                            <li><Link to="/Contact">contact</Link></li>
                        
                        </ul>
                    </div>
                    </nav>
            
                    {/* sidebar */}
                    <aside className="sidebar" id="sidebar">
                    <div>
                        <button className="close-btn" id="close-btn">
                        <CloseIcon className="i"/>
                        </button>
                        {/* nav-links */}
                        <ul className="sidebar-links">
                            <li><Link to="/">home</Link></li>
                            <li><Link to="/AboutMe">About</Link></li>
                            <li><Link to="/Projects">projects</Link></li>
                            <li><Link to="/Contact">contact</Link></li>
                        </ul>

                        {/* social icons */}
                        <ul className="social-icons">
                            <li>
                                <a href="https://www.linkedin.com/in/herman-bide/" className="social-icon" >
                                <LinkedInIcon className='i'/>
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/bherman2020" className="social-icon">
                                    <GitHubIcon className="i"/>
                                </a>
                            </li>
                        </ul>
                    </div>
                    </aside>
                

        <header class="projects-hero">
        {/* section title */}
        <div class="section-title">
            <h1>my projects</h1>
            <div class="underline"></div>
        </div> 
        </header>

        <section class="section">
        <div class="section-center projects-page-center">
            {/* single project*/}
            <article class="single-project">
            <div class="project-container">
                <img src="./images/project-1.jpeg" alt="single project" />
                <a href="https://www.johnsmilga.com" class="project-icon">
                <i class="fas fa-home"></i>
                </a>
            </div>
            <div class="project-details">
                <h4>project name</h4>
                <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                eveniet amet odit aperiam, provident cum possimus sapiente minus
                quos! Ipsum?
                </p>
                <div class="project-footer">
                <span>
                    <i class="fab fa-github"></i>
                </span>
                <a href="https://www.github.com">source code</a>
                </div>
            </div>
            </article>
        
        </div>
        </section>


        {/*} footer */}
        <footer className="footer">
                    {/* social icons */}
                    <ul className="social-icons">
                    <li>
                            <a href="https://www.linkedin.com/in/herman-bide/" className="social-icon" >
                            <LinkedInIcon className='i'/>
                            </a>
                            </li>
                            <li>
                            <a href="https://github.com/bherman2020" className="social-icon">
                                <GitHubIcon className="i"/>
                            </a>
                            </li>
                    </ul>

                    <p>&copy; <span id="date"></span> Herman Bide. all rights reserved</p>
                    </footer>
        </body>
    )
}