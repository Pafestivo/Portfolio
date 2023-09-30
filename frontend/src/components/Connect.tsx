import React from "react";
import "@/styles/connect.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faWhatsappSquare } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Connect = () => {
  return (
    <div id="connect" className="connect-container">
      <h1>{`Let's Connect!`}</h1>
      <div className="content-container">
        <div className="contact-me">
          <a href="tel:+972523453336">
            <div className="way-of-contact">
              <div className="sliding-background"></div>
              <div className="circle-icon-container">
                <FontAwesomeIcon className="icon" icon={faPhoneVolume} />
              </div>
              <div className="divider">
                <p>Call Me:</p>
                <p>052-345-3336</p>
              </div>
            </div>
          </a>

          <a href="mailto:orrodrigez1@gmail.com">
            <div className="way-of-contact">
              <div className="sliding-background"></div>
              <div className="circle-icon-container">
                <FontAwesomeIcon className="icon" icon={faEnvelope} />
              </div>
              <div className="divider">
                <p>Email Me:</p>
                <p>orrodrigez1@gmail.com</p>
              </div>
            </div>
          </a>
        </div>

        <div className="social-medias">
          <a href="https://www.linkedin.com/in/orrodrigez/" target="_blank">
            <FontAwesomeIcon className="icon-social" icon={faLinkedin} />
          </a>
          <a
            href="https://wa.me/972523453336?text=Hey,%20I%20just%20saw%20your%20portfolio,%20can%20we%20chat?"
            target="_blank"
          >
            <FontAwesomeIcon className="icon-social" icon={faWhatsappSquare} />
          </a>
          <a href="https://github.com/Pafestivo" target="_blank">
            <FontAwesomeIcon className="icon-social" icon={faGithub} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Connect;
