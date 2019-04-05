import React from 'react';
import Slider from 'react-slick';

var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};

const Pictures = (props) => {
  return (
    // <ul listStyleType='none'>
    //   {props.images.map(img => {
    //     return(<li style={{ listStyleType: "none", paddingTop: '1em' }}><img src={img} alt={img} width='90%' ></img></li>)
    //   })}
    // </ul>
    // <div width='90%'>
    //   <Slider>
    //     {props.images.map((image, idx) => {
    //       return <img src={image} alt={image} id={idx} ></img>
    //     })}
    //   </Slider>
    // </div>
    <Slider {...settings}>
    <div>
      <h3>1</h3>
    </div>
    <div>
      <h3>2</h3>
    </div>
    <div>
      <h3>3</h3>
    </div>
    <div>
      <h3>4</h3>
    </div>
    <div>
      <h3>5</h3>
    </div>
    <div>
      <h3>6</h3>
    </div>
  </Slider>
  )
}

export default Pictures