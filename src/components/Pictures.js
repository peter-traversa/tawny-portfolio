import React from 'react';

const Pictures = (props) => {
  return (
    <ul listStyleType='none'>
      {props.images.map(img => {
        return(<li style={{ listStyleType: "none", paddingTop: '1em' }}><img src={img} width='90%' ></img></li>)
      })}
    </ul>
  )
}

export default Pictures