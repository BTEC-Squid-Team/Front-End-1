import React, { Component } from 'react'
import "./ProfileStyle.css";

class UpdateBioForm extends Component {
    render() {
        return (
            <div>
                <form onSubmit={this.props.updateBio} id='updateForm'>
                    <input class='addBar' id='inputBio' type="text" name='bioData' defaultValue={this.props.bioInfo.bioData} />
                    <input class='addBar' id='addBioButton' type="submit" value="Update Bio" />
                </form>
            </div>
        )
    }
}

export default UpdateBioForm