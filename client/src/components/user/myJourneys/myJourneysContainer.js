import React from 'react';
import { Router, Route, hashHistory, IndexRoute, Link } from 'react-router';
import axios from 'axios';
import store from '../../../App.js';
import * as userActions from '../../../redux/userReducer';
import MyJourneys from './myJourneys.js';
import { connect } from 'react-redux';

class MyJourneysContainer extends React.Component {

  constructor(props) {
   super(props);
  }

  componentDidMount() {
    axios.get('/user/journey')
    .then((res) => {
      store.dispatch(userActions.setJourneys(res.data.journeys));
      console.log('Journeys Got');
    })
    .catch((err) => {
      console.log('Error getting journeys', err);
    });
  }

  selectJourney(event) {
    var selectedJourneyIndex = event.target.getAttribute('data-journeyIndex');
    store.dispatch(userActions.setCurrentJourney(selectedJourneyIndex, 'myJourneys'));
  }

  render() {
    return (
      <div className = "ProfileBoxes">
        <div className = "MemlysContainer">
          {this.props.journeys && this.props.journeys.map((journey, index) => (
            <MyJourneys index={index} journey={journey} selectJourney={this.selectJourney.bind(this)}/>
          ))}
        </div>
      </div>
    )
  }

};

function mapStateToProps(state) {
  return {
    journeys: state.userReducer.journeys,
  }
}

export default connect(mapStateToProps)(MyJourneysContainer);