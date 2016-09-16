import React from 'react';

const MyJourneys = (props) => {

  var divStyle = {
    backgroundImage: `url(${props.journey.pages[props.pageIndex].imgUrl})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  };

  return (
    <div className="oneMemly" style={divStyle}>
      <div className="oneMemlyWrapper">
      </div>
    </div>
  )
};

export default MyJourneys;