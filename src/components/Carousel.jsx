import React from 'react';
import Slider from 'react-slick';
import slide1 from '../assets/img/slide1.jpeg';
import slide2 from '../assets/img/slide2.jpg';
import slide3 from '../assets/img/slide3.jpg';
import slide4 from '../assets/img/slide4.jpeg';
import slide5 from '../assets/img/slide5.jpg';
import { Panel } from 'react-bootstrap';

class Carousel extends React.Component {
  render(){
    var carouselSettings = {
      infinite: true,
      autoplay: true,
      variableWidth: true,
      adaptiveHeight: true,
      autoplaySpeed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      dots: true,
    };

  return(
    <div>
      <div className='container-fluid'>
        <div >
      <Panel style={PanelStyles}>
      <Slider className='myCarousel'>
        <div>
          <img style={ImageStyles} src={slide1}></img>
        </div>
        <div>
          <img style={ImageStyles} src={slide2}></img>
        </div>
        <div>
          <img style={ImageStyles} src={slide3}></img>
        </div>
        <div>
          <img style={ImageStyles} src={slide4}></img>
        </div>
        <div>
          <img style={ImageStyles} src={slide5}></img>
        </div>
      </Slider>
    </Panel>
    </div>
    </div>
    </div>
  );

  }
}

var ImageStyles = {
  maxHeight: '60rem',
  height: 'auto',
  width: 'auto',
  margin: 'auto',
  minWidth: '100%',
};

var PanelStyles = {
  padding: '30px',
  backgroundColor: '#272626',
  borderRadius: '8px',

};


export default Carousel;
