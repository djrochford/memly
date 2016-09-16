import React from 'react';
import {connect} from 'react-redux';
import JourneyPlayer from './journeyPlayer.js'

class JourneyPlayerContainer extends React.Component {

  constructor(props) {
    super(props);
  }



  render() {
    return (
      <JourneyPlayer journey={this.props.currentJourney}/>
    )
  }

}

function mapStateToProps(state) {
  return {
    currentJourney: state.userReducer.currentJourney,
  }
}

export default connect(mapStateToProps)(JourneyPlayerContainer);