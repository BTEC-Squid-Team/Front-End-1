import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";

class Event extends Component {

    // Event
addBookHandler = () => {

    console.log(this.props.event)
    this.props.addEventFunc(this.props.event)
}



    render() {
        return (
            <div key={this.props.idx}>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={this.props.event.image} />
                    <Card.Body>
                        <Card.Title>{this.props.event.short_title}</Card.Title>
                        <Card.Text>
                        <p>City: {this.props.event.city}</p>
                        <p>Place: {this.props.event.name}</p>
                        <p>Date: {this.props.event.datetime_utc}</p>
                        <p>Type: {this.props.event.type}</p>
                        
                        </Card.Text>
                        <Button variant='link' href={this.props.event.url}>Buy this ticket</Button>
                        <Button onClick={this.addBookHandler}>Add To My Events</Button>
                       
                    </Card.Body>
                </Card>

            </div>
        )
    }
}

export default Event