import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';



class Bio extends Component {



    render() {
        return (
            <div >
            <Card>
                <Card.Body>{this.props.bio.bioData}</Card.Body>
                <button onClick={()=>{this.props.showUpdateBioForm(this.props.bio)}}>Update</button>
            </Card>
            
            </div>

        )
    }
}

export default Bio