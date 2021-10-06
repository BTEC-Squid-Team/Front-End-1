import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';



class Bio extends Component {



    render() {
        return (
            <div id='updateForm'>
            <Card id='cardBio'>
                <Card.Body>{this.props.bio.bioData}</Card.Body>
                
            </Card>
            <button id='updataButton' onClick={()=>{this.props.showUpdateBioForm(this.props.bio)}}>Update</button>
            
            </div>

        )
    }
}

export default Bio