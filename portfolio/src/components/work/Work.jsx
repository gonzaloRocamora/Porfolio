import React from "react";
import "./work.css";
import { SiNetlify } from "react-icons/si";

function Work() {
  return (
    <section>
      <h5>Link to my work</h5>
      <h2>Projects</h2>
      <div className="container work_container">
        <h3>Check current activity</h3>
        <div className="card_work">
          <article className="article_work">
            <SiNetlify />
            <a href="https://amilcarferreyro.netlify.app/#/">
              Amilcar Ferreyro
            </a>
          </article>

          <article className="article_work">
            <SiNetlify />
            <a href="https://amilcarferreyro.netlify.app/#/">
              Amilcar Ferreyro
            </a>
          </article>

          <article className="article_work">
            <SiNetlify />
            <a href="https://amilcarferreyro.netlify.app/#/">
              Amilcar Ferreyro
            </a>
          </article>

          <article className="article_work">
            <SiNetlify />
            <a href="https://amilcarferreyro.netlify.app/#/">
              Amilcar Ferreyro
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Work;
