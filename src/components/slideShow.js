import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel'

 class slideShow extends Component {
    render() {
        return (
            <div>
               <Carousel>
  <Carousel.Item interval={1000} >
    <img
    style={{ height:"90vh",width:"100px" }}
      className="d-block w-100"
      src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
      alt="First slide"
    />
    
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
    style={{ height:"90vh",width:"100px" }}
      className="d-block w-100"
      src="https://images.unsplash.com/photo-1459749411175-04bf5292ceea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
      alt="Second slide"
    />
    
  </Carousel.Item>
  <Carousel.Item>
    <img
    style={{ height:"90vh",width:"100px" }}
      className="d-block w-100"
      src="https://images.unsplash.com/photo-1578946956088-940c3b502864?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1023&q=80"
      alt="Third slide"
    />
    
  </Carousel.Item>
</Carousel> 
            </div>
        )
    }
}

export default slideShow
