import React from 'react';
import ReactPlayer from 'react-player';

const Reels = () => {
  return (
    <>
      <h2 className="major">Reels</h2>
      <h3 className='minor'>Dramatic</h3>
      <ReactPlayer url='https://vimeo.com/217247146' width='35rem' />
      <br></br>
      <h3 className='minor'>Comedic</h3>
      <ReactPlayer url='https://vimeo.com/217246477' width='35rem' />
      <br></br>
      <h3 className='minor'>Voiceover</h3>
      <ReactPlayer url='https://vimeo.com/328266293' width='35rem' />
    </>
  )
}

export default Reels;