import React from "react"
import CV from './cv.pdf'
import './header.css'

function Utility() {
  return (
    <div className="utility">
      <a href={CV}>Download CV</a>
      <a href=''>Contact Me</a>
    </div>
  );
}

export default Utility
