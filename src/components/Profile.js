
import React from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import Bio from './Bio';
import AddBioForm from './AddBioForm';
import UpdateBioForm from './UpdateBioForm';
import "./ProfileStyle.css";
class Profile extends React.Component {


  constructor(props) {
    super(props);
    this.state = {

      showBiosComponent: false,
      showUpdateForm: false,
      bioInfoUpdate: {},
      bios: []
    }
  }


  addBio = async (e) => {
    e.preventDefault()
    console.log('addBio func');

    let bioFormInfo = {
      bioData: e.target.bioData.value,
      email: this.props.auth0.user.email
    }
    let newBioData = await axios.post(`${process.env.REACT_APP_SERVER}/addBio`, bioFormInfo);


    this.setState({
      bios: newBioData.data
    })

  }

  componentDidMount = async () => {


    let email = this.props.auth0.user.email;
    console.log(email);

    // localhost:3001/getBio?email=
    let bioData = await axios.get(`${process.env.REACT_APP_SERVER}/getBio?email=${email}`);


    this.setState({
      bios: bioData.data,
      showBiosComponent: true,

    })
    console.log(this.state.bios)

  }

  showUpdateBioForm = async (bioInfo) => {
    console.log(bioInfo)


    await this.setState({
      showUpdateForm: true,
      bioInfoUpdate: bioInfo
    })
  }



  updateBio = async (e) => {
    e.preventDefault();
    console.log('bioID', this.state.bioInfoUpdate._id);

    let bioFormInfo = {
      bioData: e.target.bioData.value,
      email: this.props.auth0.user.email,
      bioID: this.state.bioInfoUpdate._id
    }
    let newBioData = await axios.put(`${process.env.REACT_APP_SERVER}/updateBio`, bioFormInfo);
    this.setState({
      bios: newBioData.data
    })
  }


  render() {
    return (
      <div>
        <img src={this.props.auth0.user.picture} alt="img" id='profilePic'/>
        <p class='userInfo' id='username'>{this.props.auth0.user.name} </p>
        <p class='userInfo'id='email'>{this.props.auth0.user.email}</p>

        {/* <form onSubmit={this.getBio}>
          <label>Add your Bio here</label>
          <input type="text" name='bioData' />
          <input type="submit" value="get bios" />
        </form> */}

        <AddBioForm
          addBioFunc={this.addBio}
        />

        {this.state.showBiosComponent &&
          this.state.bios.map((bio) => {
            return (
              <Bio
                showUpdateBioForm={this.showUpdateBioForm}
                bio={bio}
              />
            )
          })

        }


        {this.state.showUpdateForm &&
          <UpdateBioForm
            bioInfo={this.state.bioInfoUpdate}
            updateBio={this.updateBio}
          />
        }
      </div>
    )
  }
}




export default withAuth0(Profile);

