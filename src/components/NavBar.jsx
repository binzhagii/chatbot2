import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('home'); // Use state for active link

  const handleNavClick = (link) => {
    setActiveLink(link); // Update the active link when a nav item is clicked
  };

  return (
    <header className="navbar">
      <div className="logo">University of <span>Baguio</span></div>
      <nav>
        <a 
          href="#" 
          className={activeLink === 'home' ? 'active' : ''} 
          onClick={() => handleNavClick('home')}
        >
          HOME
        </a>
        <a 
          href="#" 
          className={activeLink === 'enrollment' ? 'active' : ''} 
          onClick={() => handleNavClick('enrollment')}
        >
          ENROLLMENT
        </a>
        <a 
          href="#" 
          className={activeLink === 'contact' ? 'active' : ''} 
          onClick={() => handleNavClick('contact')}
        >
          CONTACT US
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
