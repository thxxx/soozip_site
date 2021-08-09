import React from 'react';
import '../../tools/ShowPage.scss';
import { Carousel } from 'react-bootstrap'; 

const ShowPage = () => {
  return (
<>

    {/* image_slider */}
    <Carousel>
    <Carousel.Item>
      <img
        style={{display:'block', width:'100%', height:'100px'}}
        src="img/shoes1.jpeg"
        alt="First slide"
      />
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        style={{display:'block', width:'100%', height:'100px'}}
        src="img/shoes2.jpeg"
        alt="Second slide"
      />

      <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        style={{display:'block', width:'100%', height:'100px'}}
        src="img/shoes3.jpeg"
        alt="Third slide"
      />

      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
</>
  );
};

export default ShowPage;