
import React from 'react';
// import HomeIcon from '@mui/icons-material//Home';
import './Resume.css'
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import EmailIcon from '@mui/icons-material/Email';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
// import { Link } from "react-router-dom";


export default function Resume() {
    return (
        <div className="resume">
            {/* <HomeIcon path to='./'/> */}
            <div className='resume_left'>
                <div className="resume_profile">
                    <img src="Herman Bide.jfif" alt="profile_pic"/>
                </div>

                <div className="resume_content">
                    <div className="resume_item resume_info"> 
                    {/* resume_info */}
                        <div className="title">
                            <p className="bold">Herman Bide</p>
                            <p className="regular">Full Stack Web Developer</p>
                        </div><br/>

                        <ul>
                            <li>
                                <SmartphoneIcon className="icon"/> 
                                <div className="data">(925)206-2049</div>
                            </li>

                            <li>
                                <EmailIcon className="icon"/>
                                <div className="data">herm.bide@gmail.com</div>
                            </li>
                        </ul>

                     </div>

                    <div className="resume_item resume_skills"> 
                    {/* resume_info */}
                    <div className="title">
                            <p className="bold">Skill's</p>
                        </div>

                        <ul>
                            <li>
                                <div className="skill_name">HTML</div>
                            </li>

                            {/* <li>
                                <div className="skill_progress">
                                    <span id='style' style={{width: '95%'}}></span>
                                </div>
                                <div className="skill_per">95%</div>
                            </li> */}

                            <li>
                                <div className="skill_name">CSS</div>
                            </li>

                            {/* <li>
                                <div className="skill_progress">
                                    <span id='style' style={{width: '50%'}}></span>
                                </div>
                                <div className="skill_per">50%</div>
                            </li> */}

                            <li>
                                <div className="skill_name">Javascript</div>
                            </li>
                            {/* 
                            <li>
                                <div className="skill_progress">
                                    <span id='style' style={{width: '50%'}}></span>
                                </div>
                                <div className="skill_per">50%</div>
                            </li> */}

                            <li>
                                <div className="skill_name">PHP</div>
                            </li>

                            {/* <li>
                                <div className="skill_progress">
                                    <span id='style' style={{width: '40%'}}></span>
                                </div>
                                <div className="skill_per">40%</div>
                            </li> */}

                            <li>
                                <div className="skill_name">React.js</div>
                            </li>

                            {/* <li>
                                <div className="skill_progress">
                                    <span id='style' style={{width: '70%'}}></span>
                                </div>
                                <div className="skill_per">70%</div>
                            </li> */}

                            <li>
                                <div className="skill_name">Express.js</div>
                            </li>

                            {/* <li>
                                <div className="skill_progress">
                                    <span id='style' style={{width: '70%'}}></span>
                                </div>
                                <div className="skill_per">70%</div>
                            </li> */}
                            <li>
                                <div className="skill_name">Node.js</div>
                            </li>

                            {/* <li>
                                <div className="skill_progress">
                                    <span id='style' style={{width: '40%'}}></span>
                                </div>
                                <div className="skill_per">40%</div>
                            </li> */}
                            <li>
                                <div className="skill_name">MySql workbench</div>
                            </li>

                            {/* <li>
                                <div className="skill_progress">
                                    <span id='style' style={{width: '20%'}}></span>
                                </div>
                                <div className="skill_per">20%</div>
                            </li> */}
                        </ul>
                    </div>



                    <div className="resume_item resume_social"> 
                    {/* resume_info */}
                    <div className="title">
    
                        </div>
                    </div>


                </div>
            </div>

            <div className="resume_right">

                <div className="resume_item resume_about">
                    <div className="title">
                        <h1 className="bold">PROFESSIONAL SUMMARY</h1>
                    </div>
                    <p >I am an aspiring web developer with hands on experience of designing, developing and maintaining web applications.<br/> 
                        From the moment I started my first coding lesson I was hooked and found passion in trying to create appealing websites.<br/>
                        Web development has offered an engaging challenge to continually learn and improve my sills in creating high quality software.<br/> 
                        Along with my experience in the field of healthcare I have learned to collaborate well in collaborative environment.</p>
                </div>

                <div className="resume_item resume_education">
                    <div className="title">
                        <p className="bold">EDUCATION</p>
                    </div>
                        <ul>
                            <li>
                                <h3>CALIFORNIA STATE UNIVERSITY NORTHRIDGE, Northridge, CA</h3><br/>
                                    <p className="semi-bol"> 
                                    Bachelor of Science in Healthcare Administration  
                                    Certificate obtained	August 2014 – August 2017 
                                    </p>
                                    <br/>
                            </li>  
                            <li>  
                                <h3>DIABLO VALLEY COLLEGE, Pleasant Hill, CA</h3><br/>
                                    <p className="semi-bol"> 
                                    Bachelor of Science in Healthcare Administration  
                                    Certificate obtained	August 2014 – August 2017 
                                    </p>
                            </li>
                        </ul>
                    </div>

                <div className="resume_item resume_work">
                <div className="title">
                        <p className="bold">EXPERIENCE</p>
                    </div>
                        <ul>
                            <li>
                                <h3>FULL-STACK WEB DEVELOPER.(August 2020)</h3><br/>
                                    <p className="semi-bol">
                                        	Development and Maintenance of website/web page.<br/>
                                        	Implemented responsive web design for crafting site for optimal viewing experience.<br/>
                                        	Worked on both back-end and front-end programming on previous project.<br/>
                                        	build website and connect back end to database.<br/>
                                        	Familiar with the following languages: MySQL workbench, Express.js, Node.js, React.js, JavaScript, HTML, CSS and PHP.<br/>
                                        	Operating software Visual Studio code.<br/>
                                        	Operating systems: Windows and Apple OS X.<br/>
                                    </p>
                            </li>
                        </ul>
                </div>              


                <div className="resume_item resume_hobby">
                    <div className="title">
                            <p className="bold">Hobby</p>
                        </div>
                            <ul>
                                <li><SportsEsportsIcon className="icon"/></li>
                                <li><MusicNoteIcon className="icon"/></li>
                                <li><SportsBasketballIcon className="icon"/></li>
                                <li><FlightTakeoffIcon className="icon"/></li>
                            </ul>
                    </div>  
                </div>
        </div>
    )
}


