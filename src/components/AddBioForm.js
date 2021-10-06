import React, { Component } from 'react';

class AddBioForm extends Component {
    render() {
        return (
            <div>
                <form onSubmit={this.props.addBioFunc} >
                    <input type="text" name='bioData' placeholder='Add your Bio here' />
                    
                    <input type="submit" value="Add Bio" />
                </form>
            </div>
        )
    }
}

export default AddBioForm