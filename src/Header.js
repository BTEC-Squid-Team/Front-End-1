import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import './Header.css';
import { withAuth0 } from '@auth0/auth0-react';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';


class Header extends React.Component {
  render() {
    const {  isAuthenticated } = this.props.auth0;
    return(
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand >My Favorite Events</Navbar.Brand>
        
        <Link to="/Home">Home</Link>
        <Link to="/BestEvents">My Events</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/AboutUs">About Us</Link>
        
        
        {isAuthenticated? <LogoutButton/> : <LoginButton/>}
      </Navbar>
    );
  }
}


export default  withAuth0(Header);
