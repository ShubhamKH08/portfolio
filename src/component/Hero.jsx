
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./hero.css";
import Typewriter from "typewriter-effect";
import { FiLinkedin } from 'react-icons/fi';
import { FiTwitter } from 'react-icons/fi';
import { FiFacebook } from 'react-icons/fi';
import { FiGithub } from 'react-icons/fi';
import myPic from "../asset/image/avatar_f.png"
const Hero = () => {

  
const texts = ['Full Stack Developer', 'Android Developer', 'Ui/ Ux Designer'];


  return (
    <div className='hero-page'>

      <div className="hero-home-page">
        <div className="type-writer-container">
          Hi, I'm Shubham
     <div className="dynamic-text-hero"> <Typewriter id='type-writer-text'
              options={{
                strings: texts,
                autoStart: true,
                loop: true,
                loopDelay: 2000, // Adjust the delay between loops (in milliseconds)
                deleteSpeed: 50, // Adjust the speed of text deletion (in milliseconds)
              }}
            /></div>
            <div className="para-text-hero">I am a driven engineer with a keen interest in Android and Game Development. My expertise spans Full Stack, App Development, and UI/UX. I thrive on learning and swiftly adapting to new technologies, encompassing Android, NodeJS, Web, Backend, and Game Development. Committed to crafting innovative, user-centric solutions for positive user experiences.</div>
      
       <div className="my-network-hero">

        <span style={{fontSize:"16px",fontWeight:"520", fontFamily:"'Poppins', sans-serif"}}>Connect with me: </span>
        <div className="network-card-container d-flex">
        <a href="https://www.linkedin.com/in/shubham-hagawane-181380229"><div className="social-card"><FiLinkedin className='card-icon'/></div></a>
        <a href="https://www.linkedin.com/in/shubham-hagawane-181380229"> <div className="social-card"><FiTwitter className='card-icon'/></div></a>
        <a href="https://www.linkedin.com/in/shubham-hagawane-181380229"><div className="social-card"><FiFacebook className='card-icon'/></div></a>
        <a href="https://github.com/ShubhamKH08"> <div className="social-card"><FiGithub className='card-icon'/></div></a>
        </div>

       </div>
        </div>

        <div className="hero-home-page-bg-img">
          <div className="home-avatar-bg"></div>
        </div>
      </div>

      <section className='second-hero-sctn'>
              <div className="second-sctn-heading">Technical Skills Stack</div>
            <div className="second-hero-container">

                <div className="skill-cards">
                <div className="s-card-icon"><FiLinkedin className='s-icon'/></div>
                  <div className="upper-sctn">Full Stack Developer</div>
                  <div className="s-card-describe">One of the first things I learnt during my Second year of college was web development. I acquired knowledge of numerous web development technologies, including HTML, CSS, Javascript, Bootstrap, Tailwind, React.Js and Firebase.

</div>
                    </div>

                    <div className="skill-cards">
                    <div className="s-card-icon"><FiLinkedin className='s-icon'/></div>
                  <div className="upper-sctn">Android Developer</div>
                  <div className="s-card-describe">I've worked on some of Android Studio projects in both Java, Kotlin and JetPack Compose. I have Adobe XD UI and UX experience as well. APIs, JSON handling, Recycler view, Fragments, Dialogs are a few of the features I have a lot of experience with.

</div>

                    </div>

                    <div className="skill-cards">
                      <div className="s-card-icon"><FiLinkedin className='s-icon'/></div>
                  <div className="upper-sctn">Ui/ Ux Designer</div>
                  <div className="s-card-describe">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim suscipit et porro numquam iste molestias rerum ipsam voluptatibus odio? Velit voluptate est nostrum consequatur sit alias sint reprehenderit, animi doloremque ut ratione adipisci dignissimos nisi consequuntur. Aspernatur magni, reprehenderit neque vero vitae minima tempore consectetur unde voluptatum deserunt voluptatibus animi temporibus officia, libero nemo aliquid. Facilis vel ab culpa odio.</div>
                    </div>

            </div>
      </section>

      <section className='hero-sectn-about-me'>
              <div className="hero-sectn-about-container">
                <div className="about-heading">About me</div>

                <div className="ul-content-about-hero">


                  <ul className='ul-about-me' for="ul-eduction">
                  <span className='headline-ul-about mx-5' id='ul-eduction'>Education</span>
                    <li className='ul-li-about'>
                      <div className="hero-about-card">
                        <div className="a-card-head">MIT Academy Of Engineering</div>
                        <div className="a-card-grade">2021 - 2023</div>
                        <ul>
                          <li><span className='fw-bold text-muted mx-2'>CGPA:</span> 9.29</li>
                          <li><span className='fw-bold text-muted mx-2'>Branch:</span> Computer Science</li>
                        </ul>
                      </div>
                    </li>

                    <li className='ul-li-about'>
                      <div className="hero-about-card">
                        <div className="a-card-head">SMV</div>
                        <div className="a-card-grade">2013 - 2021</div>
                        <ul>
                          <li><span className='fw-bold text-muted mx-2'>HSC:</span> 86.50%</li>
                          <li><span className='fw-bold text-muted mx-2'>SSC:</span> 89.60%</li>
                          <li><span className='fw-bold text-muted mx-2'>Branch:</span> Science</li>
                        </ul>
                      </div>
                    </li>

                  </ul>


                  <ul className='ul-about-me'>
                  <span className='headline-ul-about mx-5'>Projects</span>
                    <li className='ul-li-about'>
                      <div className="hero-about-card">
                        <div className="a-card-head">Agrimax</div>
                        <div className="a-card-grade">Bridging the Gap, Empowering Farmers</div>
                        <ul>
                        <li><span className='fw-bold text-muted mx-2'>Technology:</span>Web Development </li>
                          <li><span className='fw-bold text-muted mx-2'>Skills:</span>React.Js, HTML, CSS, Js, Spring MVC </li>
                       
                         </ul>
                      </div>
                    </li>

                    <li className='ul-li-about'>
                      <div className="hero-about-card">
                        <div className="a-card-head">Medic</div>
                        <div className="a-card-grade">Hospital Management System</div>
                        <ul>
                        <li><span className='fw-bold text-muted mx-2'>Technology:</span>Web Development </li>
                          <li><span className='fw-bold text-muted mx-2'>Skills:</span>HTML, CSS, Js, Spring MVC </li>
                        </ul>
                      </div>
                    </li>

                    <li className='ul-li-about'>
                      <div className="hero-about-card">
                        <div className="a-card-head">Improve Me</div>
                        <div className="a-card-grade">Quiz platform for mock test</div>
                        <ul>
                        <li><span className='fw-bold text-muted mx-2'>Technology:</span>Web Development </li>
                          <li><span className='fw-bold text-muted mx-2'>Skills:</span>HTML, CSS, Js, Spring MVC </li>
                        </ul>
                      </div>
                    </li>

                    <li className='ul-li-about'>
                      <div className="hero-about-card">
                        <div className="a-card-head">Industrio</div>
                        <div className="a-card-grade">On Demand Service platform providing technician</div>
                        <ul>
                        <li><span className='fw-bold text-muted mx-2'>Technology:</span>Android Development </li>
                          <li><span className='fw-bold text-muted mx-2'>Skills:</span>Jetpack Compose, Firebase, Android Studio</li>
                        </ul>
                      </div>
                    </li>


                  </ul>
                </div>
              </div>
      </section>

      <section>
        <div className="hero-home-contact">
<div className="headline-hero-contact">Connect With Me</div>
<div className="contact-container">
        <div className="hero-contact-profile"><img src={myPic}/></div>
        <div className="hero-contact-form">
       
            <div class="container">
  <form action="action_page.php">

    <label for="fname">Email</label>
    <input type="text" id="fname" name="firstname" placeholder="Enter your email.."/>

    <label for="lname">Last Name</label>
    <input type="text" id="lname" name="lastname" placeholder="Enter the Subject.."/>

  

    <label for="subject">Subject</label>
    <textarea id="subject" name="subject" placeholder="Write your message here.." style={{height:"200px"}}></textarea>

    <input type="submit" value="Send"/>

  </form>
</div>
          </div> 
          </div>
        </div>
      </section>
      
    </div>
  )
}

export default Hero;