import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { withAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import DeleteAndShowEvent from "./DeleteAndShowEvent";

class MyFavoriteEvents extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
    };
  }

  componentDidMount = async () => {
    console.log("inside get from database");
    let email = this.props.auth0.user.email;
    console.log(email);
    let eventData = await axios.get(
      `${process.env.REACT_APP_SERVER}/getEventHandler?email=${email}`
    );

    this.setState({
      events: eventData.data,
    });
  };

  deleteEvent = async (eventID) => {
    console.log("inside delete event");
    console.log(eventID);
    axios
      .delete(
        `${process.env.REACT_APP_SERVER}/deleteHandler?eventID=${eventID}`
      )
      .then((newEventData) => {
        this.setState({
          events: newEventData.data,
        });
      });
  };
  render() {
    return (
      <div>
        <img
          src="https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt="leen"
          width="100%"
          height="650env"
        />

        <h1
          style={{
            color: "#040f3d",
            textAlign: "center",
            marginTop: "15px",
            marginBottom: "15px",
          }}
        >
          My Favorite Events
        </h1>

        <div
          style={{
            flexDirection: "row",
            display: "flex",
            marginLeft: "2rem",
            justifyContent: "center",
          }}
        >
          {this.state.events.map((event, idx) => {
            return (
              <DeleteAndShowEvent
                event={event}
                idx={idx}
                deleteEventFunc={this.deleteEvent}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default withAuth0(MyFavoriteEvents);
