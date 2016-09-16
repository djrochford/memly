import React, { PropTypes, Component } from 'react'
import GoogleMap from 'google-map-react'

const SelectionPresentation = (props) => {
  const divStyle = {
    backgroundImage: 'url(' + props.url + ')',
    backgroundSize: 'cover',
    backgroundPosition:'center',
    backgroundRepeat: 'no-repeat',
  }

  return (

    <div className = "oneMemly" style = {divStyle} data-url = {props.url} data-selected = "false" onClick= {e => props.select(e)}>
      <div className="oneMemlyWrapper">
      </div>
    </div>
  
  );
}

export default SelectionPresentation