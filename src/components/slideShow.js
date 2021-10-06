import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import promo from '../img/promo1.mp4'
import promo2 from '../img/promo2.mp4'
import promo3 from '../img/promo3.mp4'
import styles from '../mystyle.module.css';



class slideShow extends Component {
  render() {
    return (
      <div  >
        <Carousel >
          <Carousel.Item interval={500} >


            <video src={promo3} style={{ width: "100%", height: "500px", objectFit: "cover", zIndex: "-100" }} autoplay="true" loop="true" muted="true" />


          </Carousel.Item>
          <Carousel.Item interval={500}  >


            <video src={promo2} autoplay="true" loop="true" muted="true" style={{ width: "100%", height: "500px", objectFit: "cover", zIndex: "-100" }} />




          </Carousel.Item>
          <Carousel.Item>


            <video src={promo} autoplay="true" loop="true" muted="true" style={{ width: "100%", height: "500px", objectFit: "cover", zIndex: "-100" }} />


          </Carousel.Item>
        </Carousel>
      </div>
    )
  }
}

export default slideShow
