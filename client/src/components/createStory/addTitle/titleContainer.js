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

class Title2Container extends Component {

  constructor(props) {
    super(props);
  }

//   {
//   storyTitle: String,
//   pages: [
//     {
//       order: Number,
//       imgUrl: String,
//       caption: String
//     },
//     {
//       order: Number,
//       imgUrl: String,
//       caption: String
//     }
//   ]

// }

  // componentWillMount() {
  //   this._refs = {};
  // }

  componentDidMount() {
    var dani = this.props.selection
    console.log('userReducer', dani)
  }

  select(e) {
  }

  submit(e) {
    console.log('in submit')
    this.props.dispatch({
        type: 'SELECTED_MEMLYS', 
        selection: this.props.selection
    })
    
  }

  addCaption(e, url, order) {
    var page = this.props.selection[order];
    page.caption = e.target.value;

    console.log('eeee', page, this.props.selection)
  }

  render() {

    return(

      <div>
          {this.props.selection && this.props.selection.map(page=> <TitlePresentation url={page.imgUrl} order={page.order} caption= {page.caption}/>)}
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

export default connect(mapStateToProps)(Title2Container)

