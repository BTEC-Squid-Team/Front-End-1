import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './BestBooks.css';

class MyFavoriteEvents extends React.Component {
  render() {
    return(
      <Jumbotron>
        <h1>My Favorite Events</h1>
        <p>
          This is a collection of my favorite Events
        </p>
      </Jumbotron>
    )
  }
}

export default MyFavoriteEvents;
