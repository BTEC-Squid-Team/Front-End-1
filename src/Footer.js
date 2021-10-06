import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import styles from "./mystyle.module.css";
import logo from "./img/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faGithub,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

class Footer extends React.Component {
  render() {
    return (
      <Navbar className={styles.navbarFooter}>
        <Navbar.Brand>
          {" "}
          <p className={styles.footerLogo}>
            <img src={logo} alt="Logo" />
          </p>
          <div className={styles.footericon}>
            <FontAwesomeIcon
              style={{ color: "#0d2489", margin: "0 .4rem" }}
              icon={faFacebook}
            />
            <FontAwesomeIcon
              style={{ color: "#0d2489", margin: "0 .4rem" }}
              icon={faInstagram}
            />
            <FontAwesomeIcon
              style={{ color: "#0d2489", margin: "0 .4rem" }}
              icon={faGithub}
            />
            <FontAwesomeIcon
              style={{ color: "#0d2489", margin: "0 .4rem" }}
              icon={faTwitter}
            />
          </div>
        </Navbar.Brand>
      </Navbar>
    );
  }
}

export default Footer;
