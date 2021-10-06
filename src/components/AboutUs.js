"use strict";

import React from "react";
import "./AboutUs.css";
// import img1 from "../img/events.jpeg"


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";


class AboutUs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      class: "page-about",
      class1: "page-about",
      class2: "page-about",
      class3: "page-about",
      class4: "page-about",
      class5: "page-about"
    };
  }

  

  render() {
   
    return (
      <>
           <div>
           <h1 className="header">
            About Us
          </h1>  
          
        <div className={this.state.class}>
          <div className="left-side">
            <h3>leen</h3>
            <h4> Full stack developer </h4>
            <p> Graduated from LTUC-ASAC as a SoftWare Engineer </p>

            <div class="social-container">
              <a
                href="https://web.facebook.com/leen.karaja.3"
                className="facebook social"
              >
                <FontAwesomeIcon icon={faFacebook} size="2x" />
              </a>
              <a
                href="https://github.com/leenahmad"
                className="github social"
              >
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </a>
              <a
                href="https://www.instagram.com/leen.karaja/"
                className="instagram social"
              >
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>
            </div>
          </div>
          <div className="profile-photo"></div>
          <div className="right-side-info"></div>
        </div>

        <div className={this.state.class1}>
          <div className="left-side">
            <h3>Omar</h3>
            <h4>Full stack developer</h4>
            <p> Graduated from LTUC-ASAC as a SoftWare Engineer </p>

            <div class="social-container">
              <a
                href="https://www.facebook.com/omar.albargothi.3"
                className="facebook social"
              >
                <FontAwesomeIcon icon={faFacebook} size="2x" />
              </a>
              <a
                href="https://github.com/OmarAlbarghouthi"
                className="github social"
              >
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </a>
              <a
                href="https://www.instagram.com/omar.albargothi.3/"
                className="instagram social"
              >
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>
            </div>
          </div>
          <div className="profile-photo1"></div>
          <div className="right-side-info"></div>
        </div>

        <div className={this.state.class2}>
          <div className="left-side">
            <h3>Hala</h3>
            <h4>Full stack developer</h4>
            <p> Graduated from LTUC-ASAC as a SoftWare Engineer</p>
            <div class="social-container">
              <a
                href="https://www.facebook.com/learnbuildteach/"
                className="facebook social"
              >
                <FontAwesomeIcon icon={faFacebook} size="2x" />
              </a>
              <a
                href="https://github.com/hala277"
                className="github social"
              >
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </a>
              <a
                href="https://www.instagram.com/learnbuildteach"
                className="instagram social"
              >
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>
            </div>
          </div>
          <div className="profile-photo2"></div>
          <div className="right-side-info"></div>
        </div>


        
        <div className={this.state.class5}>
          <div className="left-side">
            <h3>Bashar </h3>
            <h4>Full stack developer</h4>
            <p> Graduated from LTUC-ASAC as a SoftWare Engineer </p>
            <div class="social-container">
              <a
                href="https://www.facebook.com/learnbuildteach/"
                className="facebook social"
              >
                <FontAwesomeIcon icon={faFacebook} size="2x" />
              </a>
              <a
                href="https://github.com/Bashar-Owainat"
                className="github social"
              >
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </a>
              <a
                href="https://www.instagram.com/learnbuildteach"
                className="instagram social"
              >
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>
            </div>
          </div>
          <div className="profile-photo4"></div>
          <div className="right-side-info"></div>
        </div>



        <div className={this.state.class3}>
          <div className="left-side">
            <h3>zaid</h3>
            <h4>Full stack developer</h4>
            <p> Graduated from LTUC-ASAC as a SoftWare Engineer </p>

            <div class="social-container">
              <a
                href="https://www.facebook.com/learnbuildteach/"
                className="facebook social"
              >
                <FontAwesomeIcon icon={faFacebook} size="2x" />
              </a>
              <a
                href="https://github.com/zaidShishani"
                className="github social"
              >
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </a>
              <a
                href="https://www.instagram.com/learnbuildteach"
                className="instagram social"
              >
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>
            </div>
          </div>
          <div className="profile-photo3"></div>
          <div className="right-side-info"></div>
        </div>
        </div>
      </>
    );
  }
}

export default AboutUs;
