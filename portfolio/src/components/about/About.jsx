import React from "react";
import imgAbout from "./imgAbout.jpg";
import { FaAward } from "react-icons/fa";
import { MdOutlineWork } from "react-icons/md";
import "./about.css";

function About() {
  return (
    <section>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_img">
            <img src={imgAbout} alt="Gonzalo"></img>
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className="card">
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <small>+2 Years Developing</small>
            </article>

            <article className="card">
              <MdOutlineWork />
              <h5>Projects</h5>
              <small>Projects</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
            facilis praesentium at, eligendi delectus reprehenderit quam
            asperiores voluptatibus aspernatur ab quidem quisquam incidunt
            corrupti amet ex exercitationem illum suscipit quos.
          </p>
          <a href="#contact" className="btn-primary">
            Let's talk
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
