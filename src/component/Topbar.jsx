
import React from 'react';
import { useState } from 'react';
import './topbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Link, BrowserRouter as Router, Routes } from 'react-router-dom';

export default function Topbar() {
    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionClick = (option) => {
        setSelectedOption(option);
    };
  return (
    <div className='nav_containar'>
    <div className="web_logo"></div>
    <div className="nav_option">

        <ul className="ul_option">
            <li className='ul-li'><Link to="/"
                className={`link-top-bar no-underline ${selectedOption === 'Home' ? 'selected fw-bolder' : ''}`}
                onClick={() => handleOptionClick('Home')}>Home</Link></li>
            <li className='ul-li'><Link to="/"
                className={`link-top-bar no-underline ${selectedOption === 'Skills' ? 'selected' : ''}`}
                onClick={() => handleOptionClick('Skills')}>Skills</Link></li>
            <li className='ul-li'><Link to="/"
                className={`link-top-bar no-underline ${selectedOption === 'About' ? 'selected' : ''}`}
                onClick={() => handleOptionClick('About')}>About me</Link></li>
                  <li className='ul-li'><Link to="/"
                className={`link-top-bar no-underline ${selectedOption === 'Contact' ? 'selected' : ''}`}
                onClick={() => handleOptionClick('Contact')}>Contact</Link></li>
        </ul>
            <Link to="/"
                className={`no-underline ${selectedOption === 'Resume' ? 'selected' : ''}`}
                onClick={() => handleOptionClick('Resume')}><button className='btn-contact-me'>Download Resume</button></Link>
      
    </div>
   
</div>
  )
}


