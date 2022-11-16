import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { FcAbout } from "react-icons/fc";
import { MdPermContactCalendar } from "react-icons/md";
import { HiDocumentText } from "react-icons/hi";
import "./nav.css";
import { useState } from "react";

function Nav() {
  const [activeNav, setActiveNav] = useState("#");

  return (
    <nav>
      <a href="#" className={activeNav == "#" ? "active" : ""}>
        <AiOutlineHome />
      </a>
    
    <a href="#about" 
            
            onClick={() => setActiveNav("#about")}
            className={activeNav === "#about"? 'active' : ''}
            >
            
        <FcAbout />
      </a>
      <a href="#experience"
            className={activeNav === "#experience"? 'active' : ''}
            onClick={() => setActiveNav("#experience")}>
        <HiDocumentText />
      </a>
      <a href="#contact"
        className={activeNav === "#contact"? 'active' : ''}
        onClick={() => setActiveNav("contact")}>
        <MdPermContactCalendar />
      </a>
    
    
    </nav>
  );
}

export default Nav;
