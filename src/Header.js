import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import './Header.css';
import { withAuth0 } from '@auth0/auth0-react';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import styles from './mystyle.module.css'; 
// import logo from './img/logo.png'
import SlideShow from'./components/slideShow' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faUserAlt } from '@fortawesome/free-solid-svg-icons'
import { faListAlt } from '@fortawesome/free-solid-svg-icons'








class Header extends React.Component {
  

  render() {
    // window.addEventListener('scroll',function(){
    //   let nav = document.querySelector('nav');
    //   nav.classList.toggle('sticky',window.scrollY > 0)
    // });

    const {  isAuthenticated } = this.props.auth0;
    return(
      < div className={styles.banner}>
      {/* expand="lg" bg="dark" variant="dark" */}
      {/* <img src={logo} alt="Logo" />  */}
      <SlideShow/>
      <div className={styles.header}>
      <Navbar className={styles.navbar} collapseOnSelect >
     
        <Navbar.Brand className={styles.logo}>
        {/* <img src={logo} alt="Logo" /> */}
          <h1>SQUID <span>E</span>vents</h1>
          </Navbar.Brand>
        <nav>
         <div className={styles.nav}>
        <Link className={styles.link} to="/Home">
        <FontAwesomeIcon icon={faHome}/>
          </Link>
        <Link className={styles.link} to="/">
        <FontAwesomeIcon icon={faListAlt}/></Link>
        <Link className={styles.link} to="/profile">
        <FontAwesomeIcon icon={faUserAlt}/></Link>
        </div>
        <div className={styles.buttons}>
        {/* TODO: if the user is logged in, render the `LogoutButton` - if the user is logged out, render the `LoginButton` */}
        {isAuthenticated? <LogoutButton/> : <LoginButton/>}
       </div>
      
       </nav>

       
      </Navbar>
      </div> 
     
        
             
          </div>

      
     

    );
  }
}


export default  withAuth0(Header);