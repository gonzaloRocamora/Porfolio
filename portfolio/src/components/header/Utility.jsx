import React from "react"
import CV from './cv.pdf'
import './header.css'

function Utility() {
  return (
    <div className="utility">
      <a id="download" href={CV}>Download CV</a>
      <a id="contact" href=''>Contact Me</a>
    </div>
  );
}

export default Utility
