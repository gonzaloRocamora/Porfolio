import React from "react";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import './header.css';

function Socials() {
  return (
   
    <div className="header_socials">
      <a id="linke" href="https://es.linkedin.com/in/gonzalo-rocamora-031317184">
        <BsLinkedin />
      </a>
      <a id='git' href="https://github.com/gonzaloRocamora">
        <BsGithub />
      </a>
    </div>
   
  );
}

export default Socials;
