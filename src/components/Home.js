import React from "react";
import axios from "axios";
import Event from "./Event";
import 'bootstrap/dist/css/bootstrap.min.css';

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            cityName: '',
            data: []
        }
    }


    getEvent = async (e) => {
        e.preventDefault();

        await this.setState({
            cityName: e.target.city.value
        })

        let EventUrl = `${process.env.REACT_APP_SERVER}/event?city=${this.state.cityName}`;
        let response = await axios.get(EventUrl);
        console.log(response.data);
        this.setState({
            data: response.data

        })
    }

    addEvent = async (choosenEvent) => {
        console.log('inside Add Event');
        //  console.log(eventID);
        // let choosenEvent = this.state.data.find(element => element.eventID === eventID)
        console.log("teeeeeeest bash "+choosenEvent.image)
        console.log("rrrrrrrrrrrr "+choosenEvent.short_title)
        console.log("tttttttttttt "+choosenEvent.name)
        console.log("qqqqqqqqqqqq "+choosenEvent.datetime_utc)
        console.log("88888888888 "+choosenEvent.type)
        console.log("4444444444 "+choosenEvent.url)
        console.log("ccccccccc "+choosenEvent.city)

         let EventFromInfo = {
                    image: choosenEvent.image,
                    short_title: choosenEvent.short_title,
                    name: choosenEvent.name,
                    datetime_utc: choosenEvent.datetime_utc,
                    type:choosenEvent.type,
                    url:choosenEvent.url,
                    city:choosenEvent.city,

                    // eventID:eventID, 
                    // email: this.props.auth0.user.email
                }
            
                let newEventData = await axios.post(`${process.env.REACT_APP_SERVER}/addEvent`, EventFromInfo);
                
                this.setState({
                    data: newEventData.data
                })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.getEvent}>
                    <input type="text" name='city' />
                    <input type="submit" value='Search!' />
                </form>

                {
            this.state.data.map((event, idx)=>{
              
              return (
               
                <Event 
                
                event = {event}
                idx={idx}
                addEventFunc={this.addEvent}
                />
               
                );
                
            })
           
            }
            </div>

        )
    }
}

export default Home;