import React from "react";
import "./contact.css";
import { SiGmail } from "react-icons/si";
import { BsWhatsapp } from "react-icons/bs";
import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_tritign",
        "template_q5208f2",
        form.current,
        "ciqWd7ZwP17BCtQNZ"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Feel Free to</h5>
      <h2>Hit Me Up</h2>
      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <SiGmail />
            <h4>Email</h4>
            <h5>praveendc07 @gmail.com</h5>
            <a
              href="mailto:praveendc07@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
          <article className="contact_option">
            <BsWhatsapp />
            <h4>WhatsApp</h4>
            <h5>+91 70923 72245</h5>
            <a
              href="https://api.whatsapp.com/send/?phone=917092372245&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" />

          <div className="gap">
            <textarea
              placeholder="Your Message"
              name="message"
              rows="7"
            ></textarea>
            <button className="btn btn-primary" type="submit">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
