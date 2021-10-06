import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";

import styles from '../mystyle.module.css';


// import Row from "react-bootstrap/Row";


class Event extends Component {

    // Event
    addBookHandler = () => {

        console.log(this.props.event)
        this.props.addEventFunc(this.props.event)
    }



    render() {
        return (

            <div key={this.props.idx} >
               {/* style={{ width: '18rem',justifyContent: "center" ,marginBottom:"1rem" }} */}
                <Card  className={styles.cardsStyle} style={{ width: '18rem',justifyContent: "center" ,marginBottom:"1rem" }} >
                    <Card.Img variant="top" src={this.props.event.image} />
                    <Card.Body >
                        <Card.Title style={{height:"3rem"}}>{this.props.event.short_title}</Card.Title>
                        <Card.Text>
                        <p>City: {this.props.event.city}</p>
                        <p>Place: {this.props.event.name}</p>
                        <p>Date: {this.props.event.datetime_utc}</p>
                        <p>Type: {this.props.event.type}</p>
                        
                        </Card.Text>
                        <Button  variant='link' href={this.props.event.url} style={{color:"#db4f5c"}}>Buy this ticket</Button>
                        <Button  variant="danger" onClick={this.addBookHandler}>Add To My Events</Button>
                       
                    </Card.Body>

            {/* <div key={this.props.idx}> */}

{/* 
                <Card style={{ width: '18rem' }}>
                    {/* <Row xs={1} md={4} class="g-4"> */}
                        {/* <Card.Img variant="top" src={this.props.event.image} />
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
                    </Row> */} 

                </Card>

            </div>
        )
    }
}

export default Event