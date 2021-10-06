import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { withAuth0 } from "@auth0/auth0-react";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import styles from "./mystyle.module.css";
import logo from "./img/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faUserAlt } from "@fortawesome/free-solid-svg-icons";
import { faListAlt } from "@fortawesome/free-solid-svg-icons";
import { faAddressCard } from "@fortawesome/free-solid-svg-icons";

class Header extends React.Component {
  render() {
    const { isAuthenticated } = this.props.auth0;
    return (
      <div className={styles.banner}>
        <div className={styles.header}>
          <Navbar className={styles.navbar} collapseOnSelect>
            <Navbar.Brand className={styles.logo}>
              <img src={logo} alt="Logo" />
            </Navbar.Brand>
            <nav>
              <div className={styles.nav}>
                <Link className={styles.link} to="/Home">
                  <FontAwesomeIcon
                    style={{ color: "#0d2489", margin: "0 .4rem" }}
                    icon={faHome}
                  />
                  home
                </Link>
                <Link className={styles.link} to="/BestEvents">
                  <FontAwesomeIcon
                    style={{ color: "#0d2489", margin: "0 .4rem" }}
                    icon={faListAlt}
                  />
                  my Events
                </Link>
                <Link className={styles.link} to="/profile">
                  <FontAwesomeIcon
                    style={{ color: "#0d2489", margin: "0 .4rem" }}
                    icon={faUserAlt}
                  />
                  profile{" "}
                </Link>
                <Link className={styles.link} to="/AboutUs">
                  <FontAwesomeIcon
                    style={{ color: "#0d2489", margin: "0 .4rem" }}
                    icon={faAddressCard}
                  />
                  About Us
                </Link>
              </div>

              <div className={styles.buttons}>
                {isAuthenticated ? <LogoutButton /> : <LoginButton />}
              </div>
            </nav>
          </Navbar>
        </div>
      </div>
    );
  }
}

export default withAuth0(Header);
