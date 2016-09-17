import React from 'react';

var NearbyJourneys = (props) => {

  console.log('in NearbyJourneys ', props.journey);
  var divStyle = {
    backgroundImage: `url(${props.journey.pages[0].imgUrl})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  };

  return (
    <div className="oneMemly oneJourney" style={divStyle} data-journeyIndex={props.index} data-selected="false" onClick={props.selectJourney}>
      <div className="oneMemlyWrapper">
      </div>
    </div>
  )
};

export default NearbyJourneys;