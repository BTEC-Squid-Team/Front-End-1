import React, { Component } from 'react';
import "./ProfileStyle.css";

class AddBioForm extends Component {
    render() {
        return (
            <div>
                <form onSubmit={this.props.addBioFunc} id='bioForm'>
                    <input class='addBar' id='inputBio' type="text" name='bioData' placeholder='Add your Bio here' />
                    <input class='addBar' id='addBioButton' type="submit" value="Add Bio" />
                </form>
            </div>
        )
    }
}

export default AddBioForm