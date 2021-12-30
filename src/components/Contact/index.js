import React from "react";

import { ContactStyles } from "./styles";
import HeaderSection from "../HeaderSection";
import BigLogo from "../BigLogo";

function Contact() {
  return (
    <ContactStyles id="contact" className="contact">
      <div className="contact--left">
        <HeaderSection title="CONTACT" />
        <div className="contact--left--medias">
          <ul className="contact--left--medias--list">
            <li className="contact--left--medias--list--item">
              <a
                href="https://www.linkedin.com/in/jos%C3%A9-victor-dev/"
                target="_blank"
                className="contact--left--medias--list--item--link"
                rel="noreferrer"
              >
                <img
                  alt="linkedin icon"
                  className="contact--left--medias--list--item--link--icon"
                  src="./images/medias/linkedin.svg"
                />
                LinkedIn
              </a>
            </li>
            <li className="contact--left--medias--list--item">
              <a
                href="https://github.com/victormedeiros1"
                target="_blank"
                className="contact--left--medias--list--item--link"
                rel="noreferrer"
              >
                <img
                  alt="github icon"
                  className="contact--left--medias--list--item--link--icon"
                  src="./images/medias/github.svg"
                />
                GitHub
              </a>
            </li>
            <li className="contact--left--medias--list--item">
              <a
                href="https://dribbble.com/victormedeiros1"
                target="_blank"
                className="contact--left--medias--list--item--link"
                rel="noreferrer"
              >
                <img
                  alt="dribbble icon"
                  className="contact--left--medias--list--item--link--icon"
                  src="./images/medias/dribbble.svg"
                />
                Dribbble
              </a>
            </li>
            <li className="contact--left--medias--list--item">
              <a
                href="https://www.instagram.com/victor_mdrss/"
                target="_blank"
                className="contact--left--medias--list--item--link"
                rel="noreferrer"
              >
                <img
                  alt="instagram icon"
                  className="contact--left--medias--list--item--link--icon"
                  src="./images/medias/instagram.svg"
                />
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="contact--right">
        <BigLogo />
      </div>
    </ContactStyles>
  );
}

export default Contact;
