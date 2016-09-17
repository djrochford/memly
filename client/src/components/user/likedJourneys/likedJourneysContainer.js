import React from 'react';
import { Router, Route, hashHistory, IndexRoute, Link } from 'react-router';
import axios from 'axios';
import store from '../../../App.js';
import * as userActions from '../../../redux/userReducer';
import LikedJourneys from './likedJourneys.js';
import { connect } from 'react-redux';


class LikedJourneysContainer extends React.Component {

  constructor(props) {
   super(props);
  }

  selectJourney(event) {
    var selectedJourneyIndex = event.target.getAttribute('data-journeyIndex');
    store.dispatch(userActions.setCurrentJourney(selectedJourneyIndex, 'favouriteJourneys'));
  }

  render() {
    return (
      <div className = "ProfileBoxes">
        <div className = "MemlysContainer">
          {console.log('inside LikedJourneysContainer, ', this.props.journeys)}
          {this.props.journeys && this.props.journeys.map((journey, index) => (
            <LikedJourneys index={index} journey={journey} selectJourney={this.selectJourney.bind(this)}/>
          ))}
        </div>
      </div>
    )
  }

};

function mapStateToProps(state) {
  return {
    journeys: state.userReducer.favouriteJourneys,
  }
}

export default connect(mapStateToProps)(LikedJourneysContainer);