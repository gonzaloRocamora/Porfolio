import React from "react";

import { RiMailSendLine } from "react-icons/ri";
import { SiWhatsapp } from "react-icons/si";
import './contact.css'
function Contact() {


  return (
    <section id="contact">
      <h5>Get in touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact_container">
        <div className="contact_options">
          <article className="option">
            <RiMailSendLine className="icon"/>
            <h4>Email</h4>
            <h5>gonza.rocamora@gmail.com</h5>
            <a href="mailto:gonza.rocamora@gmail.com" target="_blank">
              Send a message
            </a>
          </article>
          <article className="option">
            <SiWhatsapp className="icon"/>
            <h4>WhatsApp</h4>
            <h5>+34-600378779</h5>
            <a
              href="https://api.whatsapp.com/send?phone=34600378779"
              target="_blank"
            >
              Send Message
            </a>
          </article>
        </div>

        {/*FORM*/}
        <div className="form_container">
          <form>
            <input
             name="name"
              
              placeholder="Full Name"
              type="text"
            ></input>
            <input
              name="mail"
            
              placeholder="Email"
              type="text"
            ></input>
            <textarea
             rows='9'
             name="message" 
             maxlength="140"
              placeholder="Write a message(max 140 characters"
              type="text"  
            ></textarea>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
