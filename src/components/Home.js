import React from "react";
import axios from "axios";
import Event from "./Event";
import 'bootstrap/dist/css/bootstrap.min.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
// import styles from './Homestyle.css';
import SlideShow from './slideShow'
import Navbar from 'react-bootstrap/Navbar'
import styles from '../mystyle.module.css';






import { withAuth0 } from '@auth0/auth0-react';

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            cityName: '',
            data: [],



          

        }
    }





    getEvent = async (e) => {
        console.log(e)
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

        console.log("teeeeeeest bash "+choosenEvent.image)
        console.log("rrrrrrrrrrrr "+choosenEvent.short_title)
        console.log("tttttttttttt "+choosenEvent.name)
        console.log("qqqqqqqqqqqq "+choosenEvent.datetime_utc)
        console.log("88888888888 "+choosenEvent.type)
        console.log("4444444444 "+choosenEvent.url)
        console.log("ccccccccc "+choosenEvent.city)
       
       console.log("eemailllll"+ this.props.auth0.user.email)
         let EventFromInfo = {
                    image: choosenEvent.image,
                    short_title: choosenEvent.short_title,
                    name: choosenEvent.name,
                    datetime_utc: choosenEvent.datetime_utc,
                    type:choosenEvent.type,
                    url:choosenEvent.url,
                    city:choosenEvent.city,

                    // eventID:eventID, 
                     email: this.props.auth0.user.email
                }
            
                let newEventData = await axios.post(`${process.env.REACT_APP_SERVER}/addEvent`, EventFromInfo);
                
                this.setState({
                    data: newEventData.data
                })

    }

    render() {
        return (
            <div>
            <SlideShow />
               

                <div className={styles.wrap} >
                    <div className={styles.search}>
                   
                        <Navbar  className={styles.searchNav}  >
                            <form onSubmit={this.getEvent} className="formtest">
                                {/* <Navbar  bg="dark" variant="dark" > */}
                                <Form.Control className={styles.searchTerm} type="text" name='city' placeholder="city name" style={{ height: "30px", width: "100%" }} />
                                {/* style={{ width: "100%" }} */}
                                {/* position: "relative",bottom:"540px",left:"200px" */}
                                <Button className={styles.searchButton} variant="danger" type="submit">
                                    {/* style={{ position: "relative", left: "220px", bottom: "38px" }} */}
                                    {/* position: "fixed", */}
                                    <FontAwesomeIcon className={styles.icons} icon={faSearch} />
                                </Button>
                                {/* </Navbar > */}
                            </form>
                        </Navbar >
                        <div />
                        <div />

                       
                    </div>
                    
                    <br></br>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr" }}>
                        {
                            this.state.data.map((event, idx) => {

                                return (

                                    <Event

                                        event={event}
                                        idx={idx}
                                        addEventFunc={this.addEvent}
                                    />

                                );

                            })

                        }
                    </div>

                   
                    
                </div>
            </div>

        )
    }
}

export default withAuth0(Home);