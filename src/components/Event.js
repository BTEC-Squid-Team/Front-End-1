import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import { Form } from 'react-bootstrap';
// import Row from "react-bootstrap/Row";

class Event extends Component {

    constructor(props) {
        super(props);
        this.state = {
            comments: [],
        }
    }

    // Event
    addEventHandler = () => {

        console.log(this.props.event)
        this.props.addEventFunc(this.props.event)
        console.log()
    }
    // Comments

    // addCommentHandler = () => {
    //     console.log(this.props.event.comment)
    //     this.props.addCommentFunc(this.props.event._id)
    // }

    render() {
        return (
            <div key={this.props.idx}>


                <Card style={{ width: '18rem' }}>
                    {/* <Row xs={1} md={4} class="g-4"> */}
                    <Card.Img variant="top" src={this.props.event.image} />
                    <Card.Body>
                        <Card.Title>{this.props.event.short_title}</Card.Title>
                        <Card.Text>
                            <p>City: {this.props.event.city}</p>
                            <p>Place: {this.props.event.name}</p>
                            <p>Date: {this.props.event.datetime_utc}</p>
                            <p>Type: {this.props.event.type}</p>
                        </Card.Text>
                        {/* <div>
                            <form onSubmit={this.props.addCommentHandler}>
                                <input type="text" name="comment" placeholder="Add comment" />
                                
                                <input type='submit' value='add comment' />
                               

                            </form> */}
                        {/* </div> */}
                        <Button variant='link' href={this.props.event.url}>Buy this ticket</Button>
                        <Button onClick={this.addEventHandler}>Add To My Events</Button>

                    </Card.Body>
                    {/* </Row> */}
                </Card>

            </div>
        )
    }
}

export default Event