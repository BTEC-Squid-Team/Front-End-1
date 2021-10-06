import React, { Component } from 'react'

class UpdateBioForm extends Component {
    render() {
        return (
            <div>
                <form onSubmit={this.props.updateBio} >
                    <input type="text" name='bioData' defaultValue={this.props.bioInfo.bioData} />
                    <input type="submit" value="Update Bio" />
                </form>
            </div>
        )
    }
}

export default UpdateBioForm