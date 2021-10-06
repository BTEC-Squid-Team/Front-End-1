import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
// import Row from "react-bootstrap/Row";

class DeleteAndShowEvent extends Component {


    deleteEventHandler = () => {
        console.log(this.props.event)
        this.props.deleteEventFunc(this.props.event._id)
    }




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
                            <Button variant='link' href={this.props.event.url}>Buy this ticket</Button>
                            <Button variant='danger' onClick={this.deleteEventHandler}>Delete</Button>

                        </Card.Body>
                    {/* </Row> */}
                </Card>

            </div>
        )
    }
}

export default DeleteAndShowEvent