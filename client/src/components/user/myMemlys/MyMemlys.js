import React from 'react'


const MyMemlys = (props) => {
  //inline CSS style. fills the entire oneMemly div with photo
  console.log('MyMemlys mediaUrl', props.item)
    const divStyle = {
      backgroundImage: `url(${props.item})`,
      backgroundPosition:'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'
    };

  return (
    <div className = "oneMemly" style={divStyle}>
        <div className="oneMemlyWrapper">
        </div>
    </div>
    )
}

export default MyMemlys;