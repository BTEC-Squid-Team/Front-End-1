import React from "react";
import Header from "./Header";
import { withAuth0 } from "@auth0/auth0-react";
import Footer from "./Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BestEvents from "./components/BestEvents";
import Login from "./Login";
import Profile from "./components/Profile";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";

class App extends React.Component {
  render() {
    const { isAuthenticated } = this.props.auth0;

    console.log("app", process.env.REACT_APP_CLIENT_ID);
    return (
      <>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              {isAuthenticated ? <BestEvents /> : <Login />}
            </Route>

            <Route exact path="/profile">
              {isAuthenticated ? <Profile /> : "not found "}
            </Route>

            <Route exact path="/Home">
              <Home />
            </Route>

            <Route exact path="/BestEvents">
              <BestEvents />
            </Route>

            <Route exact path="/AboutUs">
              <AboutUs />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </>
    );
  }
}

export default withAuth0(App);
