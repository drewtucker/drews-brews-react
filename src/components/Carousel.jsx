import React from 'react';
import $ from 'jquery';
import Slider from "react-slick";
import slide1 from '../assets/img/slide1.jpeg';
import slide2 from '../assets/img/slide2.jpeg';
import slide3 from '../assets/img/slide3.jpeg';
import slide4 from '../assets/img/slide4.jpeg';
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
      <div className='container'>
        <div className='col-md-4'>

      <Slider style={CarouselStyles} className="myCarousel">
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
      </Slider>
    </div>
    </div>
    </div>
  );

  }
}

var ImageStyles = {
  maxHeight: '456px',
  margin: 'auto',
  minWidth: '100%',


}

var CarouselStyles = {
  backgroundColor: 'gray'
}

export default Carousel;
