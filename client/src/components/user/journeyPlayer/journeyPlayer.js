import React from 'react';
import Slider from 'react-slick';

const JourneyPlayer = ({journey}) => {

  const sliderSettings = {
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    lazyLoad: true,
    fade: true,
    pauseOnHover: false,
  }

  const capStyle = {
    backgroundSize: 'cover',
    backgroundPosition:'center',
    backgroundRepeat: 'no-repeat',
  }

  if (journey.pages) {
    var images = journey.pages.map((page, index)=>(
      <img src={page.imgUrl}/>
    ));
    var showCap = journey.pages.map((page, index) => (
      <img alt={page.caption}/>
    ));
  } else {
    var images = (<div></div>)
    var showCap = (<div></div>)
  }

//   if (journey.pages) {
//   var showCap = journey.pages.map((page, index) => (
//    <img alt={page.caption} />
//   ))
// }


  return (
    <div className = "oneMemly" style = {capStyle}  >
        <Slider {...sliderSettings}>
          {images}
        </Slider>
        <Slider {...sliderSettings}>
          {showCap}
        </Slider>
    </div>
  )
};

export default JourneyPlayer;