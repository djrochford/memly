import React, { PropTypes, Component } from 'react'
import { Router, Route, hashHistory, IndexRoute, Link } from 'react-router'
import shallowCompare from 'react-addons-shallow-compare'
import controllable from 'react-controllables' //need to look into use for this... allows you to control prop types somehow...
import GoogleMap from 'google-map-react'
import update from 'react-addons-update'
import axios from 'axios'
import { connect } from 'react-redux'
// import store from '...../App.js'
import store from '../../../App'
import TitlePresentation from './presentation.js'
// import * as mapActions from '../../../redux/mapReducer'
// import * as userActions from '../../../redux/userReducer'

class TitleContainer extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    var dani = this.props.selection
    console.log('userReducer', dani)
  }

  select(e) {
  }

  submit(e) {
    console.log('in submit', this.response)
    axios.post('/user/journey', this.response)
    .then(function(res) {
      console.log('this is the server response', res)
      const path = '/user/profile';
      hashHistory.push(path)
    })
    
  }

  addTitle(e) {

    var title = e.target.value;
    this.response = {
      journeyTitle: title, 
      pages: this.props.selection
    }
    console.log('eeee', response)
  }

  render() {

    return(

      <div className = "ProfileBoxes">

       <button type="submit" id="submit" className = "editProfileButton'" value="submit" onClick={this.submit.bind(this)} ref={(c) => this.button = c} >Submit</button>
      <div>
        <strong>Title: </strong><input size="100" onChange= {e=>this.addTitle(e)}/>
      </div>

        <div className ="MemlysContainer">
        {this.props.children}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  console.log('state----------------------', state.userReducer)
  return {
  //   currentUserLocation: state.mapReducer.currentUserLocation,
    selection: state.userReducer.selection
  //   memlyIdStorage: state.memlysReducer.memlyIdStorage,
  }
}

export default connect(mapStateToProps)(TitleContainer)

