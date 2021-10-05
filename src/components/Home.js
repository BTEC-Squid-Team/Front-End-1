import React from "react";
import axios from "axios";
import Event from "./Event";
import 'bootstrap/dist/css/bootstrap.min.css';
import { withAuth0 } from '@auth0/auth0-react';
class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            cityName: '',
            data: [],
            commentData: [],
          

        }
    }
    //test
    // test 222

    getEvent = async (e) => {
        e.preventDefault();

        await this.setState({
            cityName: e.target.city.value
        })

        let EventUrl = `${process.env.REACT_APP_SERVER}/event?city=${this.state.cityName}`;
        let response = await axios.get(EventUrl);
        console.log(response.data);

        this.setState({
            data: response.data,

        })
    }

    addEvent = async (choosenEvent) => {
        console.log('inside Add Event');
        //  console.log(eventID);
        // let choosenEvent = this.state.data.find(element => element.eventID === eventID)
        console.log("teeeeeeest bash " + choosenEvent.image)
        console.log("rrrrrrrrrrrr " + choosenEvent.short_title)
        console.log("tttttttttttt " + choosenEvent.name)
        console.log("qqqqqqqqqqqq " + choosenEvent.datetime_utc)
        console.log("88888888888 " + choosenEvent.type)
        console.log("4444444444 " + choosenEvent.url)
        console.log("ccccccccc " + choosenEvent.city)

        console.log("eemailllll" + this.props.auth0.user.email)
        let EventFromInfo = {
            image: choosenEvent.image,
            short_title: choosenEvent.short_title,
            name: choosenEvent.name,
            datetime_utc: choosenEvent.datetime_utc,
            type: choosenEvent.type,
            url: choosenEvent.url,
            city: choosenEvent.city,

            // eventID:eventID, 
            email: this.props.auth0.user.email
        }

        let newEventData = await axios.post(`${process.env.REACT_APP_SERVER}/addEvent`, EventFromInfo);

        this.setState({
            data: newEventData.data
        })
    }

    // addComment = async (event, eventID) => {
    //     event.preventDefault();

    //     console.log('inside addComment')


    //     console.log("event ID:" + eventID);
    //     console.log("Comment: " + event.target.comment.value);
    //     console.log("user: " + this.props.auth0.user.name);
    //     console.log("email: " + this.props.auth0.user.email);
    //     let name =this.props.auth0.user.name;
    //     let email = this.props.auth0.user.email;
    //     let commentFormInfo = {
    //         eventID:eventID,
    //         Comment: event.target.comment.value,
    //         user: name,
    //         email: email
    //     }

    //     let newCommentData = await axios.post(`${process.env.REACT_APP_SERVER}/addcomment`, commentFormInfo);

    //     this.setState({
    //        commentData:newCommentData.data,
         
    //     })

    // }

    // deleteComment = (event) => {

    //     axios.delete(`${process.env.REACT_APP_SERVER}/deleteComment?eventID=${event}`).then((newCommentData) => {
    //         this.setState({
    //           events: newCommentData.data
    //         })
    //       })
    // }




    render() {
        return (
            <div>
                <form onSubmit={this.getEvent}>
                    <input type="text" name='city' />
                    <input type="submit" value='Search!' />
                </form>

                {this.state.data.map((event, idx) => {
                        return (
                            <Event
                                event={event}
                                idx={idx}
                                addEventFunc={this.addEvent}
                                // addCommentFunc={this.addComment}
                            />
                        );
                    })
                }
                

            </div>

        )
    }
}

export default withAuth0(Home);