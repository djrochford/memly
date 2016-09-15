import React, { PropTypes, Component } from 'react'
import GoogleMap from 'google-map-react'

const CaptionPresentation = (props) => {
  const divStyle = {
    backgroundImage: 'url(' + props.url + ')',
    backgroundSize: 'cover',
    backgroundPosition:'center',
    backgroundRepeat: 'no-repeat',
  }

  const capStyle = {
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
    <div>
      <div className = "oneMemly" style = {divStyle} data-url = {props.url} >
        <div className="oneMemlyWrapper"></div>
      </div>

      <div className = "oneMemly" style = {capStyle} >Caption: <input onChange={e=>props.addCaption(e, props.url, props.order)} size="60" maxlength="140" width="48" height="48"/></div>
    </div>
  );
}

export default CaptionPresentation