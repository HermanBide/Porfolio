import React from 'react';
import './AboutMe.css';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import ViewHeadlineIcon from '@mui/icons-material/ViewHeadline';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom'
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import MusicNoteIcon from '@mui/icons-material/MusicNote';


export default function AboutMe() {

// const navbar = document.querySelector("#nav");
// const navBtn = document.querySelector("#nav-btn");
// const closeBtn = document.querySelector("#close-btn");
// const sidebar = document.querySelector("#sidebar");
// const date = document.querySelector("#date");

// // add fixed className to navbar
// window.addEventListener("scroll", function () {
//   if (window.pageYOffset > 80) {
//     navbar.classNameList.add("navbar-fixed");
//   } else {
//     navbar.classNameList.remove("navbar-fixed");
//   }
// });
// // show sidebar
// navBtn.addEventListener("click", function () {
//   sidebar.classNameList.add("show-sidebar");
// });
// closeBtn.addEventListener("click", function () {
//   sidebar.classNameList.remove("show-sidebar");
// });
// // set year
// date.innerHTML = new Date().getFullYear();

    return (
        
    <div className='body'>
        {/*navbar*/} 
        <nav className="nav" id="nav">
        <div className="nav-center">
            {/* nav header */}
            <div className="nav-header">
            <img src="./images/logo.svg" className="nav-logo" alt="" />
            <button className="nav-btn" id="nav-btn">
                <ViewHeadlineIcon className="i"/>
            </button>
            </div>

            {/*nav links */}
            <ul className="nav-links">
                <li><Link to="/">home</Link></li>
                <li><Link to="/AboutMe">About</Link></li>
                <li><Link to="/Projects">projects</Link></li>
                <li><Link to="/Contact">contact</Link></li>
            </ul>
        </div>
        </nav>


        {/*sidebar*/} 
        <aside className="sidebar" id="sidebar">
        <div>
            <button id="close-btn" className="close-btn">
            <CloseIcon className="i"></CloseIcon>
            </button>
            <ul className="sidebar-links">
                    <li><Link to="/">home</Link></li>
                    <li><Link to="/AboutMe">About</Link></li>
                    <li><Link to="/Contact">contact</Link></li>
            </ul>
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

        <section className="section single-page">

        {/*section title*/}

        <div className="section-title">
            <h1>about me</h1>
            <div className="underline"></div>
        </div>
    
        <div className="section-center page-info">

            {/*about page */}
            <p>
            I am Full-Stack Software Engineer that transitioned from health Care Administration with experience in engineering. I write code solutions to solve complex problems all while confronting front and back-end problems.
            I come from a family with strong backgrounds in health and in the tech field. I have a strong desire to learn and grow as an engineer, I am passionate about building innovative and scalable software applications, creating, extracting and manipulating data. I have always enjoy building and creating things and get a satisfaction from the final outcome especially when they work.
            I consider myself a team player, my experience in the health field have provided me with skills such as good communication, patience, problem solving, time management, being resourceful and accountability. 
            </p>
        </div>

        <div className="resume_item resume_hobby">
                    <div className="section-title">
                        <h2>Hobbies</h2>
                    <div className="underline"></div>
                    </div>
                        <ul>
                            <li><SportsEsportsIcon className="icon"/></li>
                            <li><MusicNoteIcon className="icon"/></li>
                            <li><SportsBasketballIcon className="icon"/></li>
                            <li><FlightTakeoffIcon className="icon"/></li>
                        </ul>
                </div>
        </section>


        {/*footer*/} 
        <footer className="footer">
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

        <p>&copy; <span id="date"></span> Herman Bide All rights reserved.</p>
        </footer>
    </div> 

    )

}
