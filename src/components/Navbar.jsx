
import React, { useState } from 'react';
import './Navbar.css'; 
import dash from "../assets/dash.png";
import multi from "../assets/multi.png";
import event from "../assets/event.png";
import click from "../assets/click.png";
import Flag from "../assets/Flag.png";
import shield from "../assets/shield.png";
import settings from "../assets/settings.png";
import question from "../assets/question.png";
import photo from "../assets/photo.png";
import exit from "../assets/exit.png";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('My Tasks');

  const handleNavClick = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="navbar">
      <div className='name'><img src={click} alt="Mobile" className="goodness" />Task Manager</div>
      <ul>
        <li
          className={activeSection === 'Dashboard' ? 'active' : ''}
          onClick={() => handleNavClick('Dashboard')}
        >
          <img src={dash} alt="Mobile" className="good" />
          Dashboard
        </li>
        <li
          className={activeSection === 'Projects' ? 'active' : ''}
          onClick={() => handleNavClick('Projects')}
        >
          <img src={multi} alt="Mobile" className="good" />
          Projects
        </li>
        <li
          className={activeSection === 'My Tasks' ? 'active' : ''}
          onClick={() => handleNavClick('My Tasks')}
        >
          <img src={event} alt="Mobile" className="good" />
          My Tasks
        </li>
        <li
          className={activeSection === 'Dashboard' ? 'active' : ''}
          onClick={() => handleNavClick('Dashboard')}
        >
          <img src={Flag} alt="Mobile" className="good" />
          Activity
        </li>
        <li
          className={activeSection === 'Dashboard' ? 'active' : ''}
          onClick={() => handleNavClick('Dashboard')}
        >
          <img src={shield} alt="Mobile" className="good" />
          Privacy
        </li>
        <li
          className={activeSection === 'Dashboard' ? 'active' : ''}
          onClick={() => handleNavClick('Dashboard')}
        >
          <img src={settings} alt="Mobile" className="good" />
          Settings
        </li>
        
        <li
          className={activeSection === 'Dashboard' ? 'active' : ''}
          onClick={() => handleNavClick('Dashboard')}
        >
          <img src={question} alt="Mobile" className="good" />
         Help
        </li>
        <li
          className={activeSection === 'Dashboard' ? 'active' : ''}
          onClick={() => handleNavClick('Dashboard')}
        >
          <img src={photo} alt="Mobile" className="good" />
         Happy
         <img src={exit} alt="Mobile" className="good" />
        </li>
      </ul>
    </div>
    
  );
  
};

export default Navbar;
