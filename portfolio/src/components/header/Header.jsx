import React from "react";
import Utility from "./Utility";
import myImg from "./backImg.png";
import Socials from "./Socials";
import './header.css'

function Header() {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Gonzalo Rocamora</h1>
        <h5 className="text-ligth">Front End Developer</h5>

        <Utility />
        <Socials />
        <div className="my_img">
          <img id='gonzaimg' src={myImg} alt="Gonzalo" />
        </div>
        
      </div>
    </header>
  );
}

export default Header;
