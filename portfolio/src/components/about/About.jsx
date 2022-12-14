import React from "react";
import imgAbout from "./imgAbout.jpg";
import { FaAward } from "react-icons/fa";
import { MdOutlineWork } from "react-icons/md";
import "./about.css";

function About() {
  return (
    <section id="about">
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
              <small>+3 Years Developing</small>
            </article>

            <article className="card">
              <MdOutlineWork className="about_icon" />
              <h5>Projects</h5>
              <small>Projects</small>
            </article>
          </div>
          <p>
            I have been working as a Front End Web Developer for the past three
            years, and have gained extensive experience in HTML, CSS,
            JavaScript, TypeScript, NodeJs, Gitub. I have also worked
            with other programming languages such as C and Java. My
            experience includes developing websites for small businesses,
            non-profit organizations, and personal projects. My greatest
            strength is my ability to work independently. I am able to take on
            projects from start to finish without needing constant supervision
            or guidance. I am also very comfortable working with clients to
            understand their needs and requirements before starting any project.
            This allows me to develop websites that are not only functional but
            also meet the client’s needs and expectations.
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
