import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './BestBooks.css';
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import DeleteAndShowEvent from './DeleteAndShowEvent';

class MyFavoriteEvents extends React.Component {



  constructor(props) {
    super(props);
    this.state = {
      events: []

    }

  }



  componentDidMount = async () => {
    console.log("inside get from database")
    let email = this.props.auth0.user.email;
    console.log(email)
    let eventData = await axios.get(`${process.env.REACT_APP_SERVER}/getEventHandler?email=${email}`);

    this.setState({
      events: eventData.data
    })
    // console.log(eventData.data + "bashhar");
    // console.log(this.state.events[0].city + "dsjfsbsjbsjbj");
    // console.log(this.state.events + "sdfsfsdsdd");

  }

  deleteEvent = async (eventID) => {
    console.log('inside delete event');
    console.log(eventID);
    axios.delete(`${process.env.REACT_APP_SERVER}/deleteHandler?eventID=${eventID}`).then((newEventData) => {
      this.setState({
        events: newEventData.data
      })
    })
  }



  render() {
    return (
      <div>
        <Jumbotron>
          <h1>My Favorite Events</h1>
          <p>
            This is a collection of my favorite Events
          </p>
        </Jumbotron>

        {
          this.state.events.map((event, idx) => {
            return (
              <DeleteAndShowEvent
                event={event}
                idx={idx}
                deleteEventFunc={this.deleteEvent}
              />
            )
          })
        }

      </div>
    )
  }
}

export default withAuth0(MyFavoriteEvents);
