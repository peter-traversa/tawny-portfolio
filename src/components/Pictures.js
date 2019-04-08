import React, { Component } from 'react';
import ReactModal from 'react-modal';

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
    return (
      <div >
        <ReactModal 
          isOpen={this.state.isOpen}
          onRequestClose={handleModalClose}
        >
          <button onClick={handleModalClose}></button>
          <img src={this.state.currentPic} alt={this.state.currentPic} ></img>
        </ReactModal>
        {this.props.images.map((image, idx) => {
          return <img src={image} alt={image} key={idx} onClick={handlePictureClick} ></img>
        })}
      </div>
    )
  }
}

export default Pictures