import React from "react";
import ContentWrapper from "../contentWrapper/ContentWrapper";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

import "./footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <ContentWrapper>
        <div className="container">
          <div className="items">
            <div className="item">Terms Of Use</div>
            <div className="item">Privacy Policy</div>
            <div className="item">About</div>
            <div className="item">Blog</div>
            <div className="item">FAQ</div>
          </div>
          <div className="content">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus
              necessitatibus dolorem explicabo voluptate. Ea in minima aliquid
              quia amet aut. Provident ullam rerum molestiae recusandae
              inventore debitis officiis modi maxime? Aspernatur, consectetur?
              Earum atque eius beatae? 
          </div>
          <div className="socialIcons">
            <a href="www.facebook.com"><FaFacebookF /></a>
            <a href="www.intagram.com"><FaInstagram /></a>
            <a href="www.twitter.com"><FaTwitter /></a>
            <a href="www.linkedin.com"><FaLinkedin /></a>
          </div>
        </div>
      </ContentWrapper>
    </footer>
  );
};

export default Footer;
