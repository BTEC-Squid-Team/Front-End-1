import React from 'react';
import Header from './Header';
//  import IsLoadingAndError from './IsLoadingAndError';
import { withAuth0 } from '@auth0/auth0-react';
import Footer from './Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route
} 
from "react-router-dom";
import BestBooks from './BestEvents';
import Login from './Login';
import Profile from './components/Profile';
import Home from './components/Home';


class App extends React.Component {
  
 
  
  
  render() {
    
    const {  isAuthenticated} = this.props.auth0;
    
    
    console.log('app', process.env.REACT_APP_CLIENT_ID);
    return(
      <>
        <Router>
          {/* <IsLoadingAndError> */}
            <Header />
            <Switch>
              <Route exact path="/">
                {/* TODO: if the user is logged in, render the `BestBooks` component, if they are not, render the `Login` component */}
                {isAuthenticated? <BestBooks/> : <Login/>}
                
                    
              </Route>
              {/* TODO: add a route with a path of '/profile' that renders a `Profile` component */}
              <Route exact path="/profile">
                  <Profile/>
              </Route>

              
               <Route exact path="/Home">
                  <Home/>
              </Route>
              
            </Switch>
            <Footer />
          {/* </IsLoadingAndError> */}
        </Router>
      </>
    );
  }
}

export default withAuth0(App);
