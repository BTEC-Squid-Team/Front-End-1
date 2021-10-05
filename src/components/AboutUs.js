'use strict';

// $('.trigger').click(function() {
//     $(this).parents('.page-about').toggleClass('show-info');
//   });

import React from "react";
import './AboutUs.css';




class AboutUs extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            class: "page-about",
            class1:"page-about",
            class2:"page-about",
            class3:"page-about",
            class4:"page-about"
        }
    }

    toggle = () => {
        if (this.state.class == "page-about") {
            this.setState({
                class: "show-info"
            })
        }
        if (this.state.class == "show-info") {
            this.setState({
                class: "page-about"
            })
        }
    }

    toggle1 = () => {
        if (this.state.class1 == "page-about") {
            this.setState({
                class1: "show-info"
            })
        }
        if (this.state.class == "show-info") {
            this.setState({
                class1: "page-about"
            })
        }


    }

    render() {
        return (
            <>
            <div className={this.state.class}>
                <div className="left-side">
                    <h3>leen</h3>
                    <h4>Everything Web</h4>
                    <p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. </p>

                    {/* <button className="trigger" onClick={this.toggle} >Info</button> */}
                </div>
                <div className="profile-photo">
                </div>
                <div className="right-side-info">
                   
                </div>
            </div>

            <div className={this.state.class1}>
                <div className="left-side">
                <h3>Omar Albarghuthi</h3>
                    <h4>Everything Web</h4>
                    <p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. </p>

                    {/* <button className="trigger" onClick={this.toggle1} >Info</button> */}
                </div>
                <div className="profile-photo">
                </div>
                <div className="right-side-info">
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. </p>

                    <p>Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. </p>

                    <p>Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Nam eget dui. Etiam rhoncus. </p>

                    <p>Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. </p>
                </div>
            </div>
            </>
        )
    }


}

export default AboutUs