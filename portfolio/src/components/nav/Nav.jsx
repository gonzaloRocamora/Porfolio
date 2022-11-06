import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { FcAbout } from "react-icons/fc";
import { MdPermContactCalendar } from "react-icons/md";
import { HiDocumentText } from "react-icons/hi";
import "./nav.css";

function Nav() {
  return (
    
 <nav>
      <a href="#"><AiOutlineHome /></a>
      <a href="#about"><FcAbout /></a>
      <a href="#experience"><HiDocumentText /></a>
      <a href="#contact"><MdPermContactCalendar /></a>
    </nav>

   
   

    
    
  );
}

export default Nav;
