import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import styles from '../mystyle.module.css';


class Event extends Component {

    
addBookHandler = () => {

    console.log(this.props.event)
    this.props.addEventFunc(this.props.event)
}



    render() {
        return (
//             display: flex;
// flex-wrap: wrap;
// float:"left",padding:"10px",
// style={{  display: "flex",flexWrap: "wrap"}}
// flexDirection: "row" ,
// display: "flex",flexWrap: "wrap",float:"left" ,padding:"10px"
// style={{flex: 1}}
// flex-direction: row | row-reverse | column | column-reverse;
// style={{ display: 'flex', flexDirection: 'row',float:"left"}}
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
                </Card>

            </div>
        )
    }
}

export default Event