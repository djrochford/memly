import React from 'react'
import { Router, Route, hashHistory, IndexRoute, Link } from 'react-router'


const MyJourneys = (props) => {

  const divStyle = {
    backgroundImage: `url(${props.journey.pages[0].imgUrl})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  }

  return (
    <div className="oneMemly" style={divStyle}>
      <div className="oneMemlyWrapper">
      </div>
    </div>
  )
}

export default MyJourneys;