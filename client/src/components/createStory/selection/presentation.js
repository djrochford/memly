import React, { PropTypes, Component } from 'react'
import GoogleMap from 'google-map-react'

const SelectionPresentation = (props) => {
  const divStyle = {
    backgroundImage: 'url(' + props.url + ')',
    backgroundSize: 'cover',
    backgroundPosition:'center',
    backgroundRepeat: 'no-repeat',
  }
  // return(
  //   <div className = "oneMemly" style={divStyle}>
  //   <div className="oneMemlyWrapper">
  //   </div>
  //   </div>
  //   )

// heyyy{console.log('props', props.memlys)} 
      // <img src={props.memlys.map(memly=>memly.media.url)} />
      // <img src=memly.media.url />
      // {props.memlys.map(memly => memly.media.url)}


  return (

    <div className = "oneMemly" style = {divStyle} data-url = {props.url} data-selected = "false" onClick= {e => props.select(e)}>
      <div className="oneMemlyWrapper">
      </div>
    </div>
  
  );
}

export default SelectionPresentation