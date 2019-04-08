import React, { Component } from 'react';
// import ReactModal from 'react-modal';
import Slider from 'react-slick';
import '../assets/scss/test.css';

class Pictures extends Component {
  constructor(props) {
    super()
    this.state = {
      showModal: false,
      currentPic: null,
    }
  }

  render() {
    const handlePictureClick = (e)=> {
      this.setState({showModal: true, currentPic: e.target});
      console.log(this.state);
    };
    const handleModalClose = () => {
      this.setState({showModal: false, currentPic: null});
      console.log(this.state);
    }
    const settings = {
      dots: true,
    }
    return (
      <div className='container'>
        <Slider settings={settings} >
          {this.props.images.map((image, idx) => {
            return (
              <div>
                <img src={image} alt={image} key={idx} className='slick-image'></img>
              </div>
            )
          })}
        </Slider>
      </div>
    )
  }
}

export default Pictures