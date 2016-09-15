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
import SelectionPresentation from './presentation.js'
// import * as mapActions from '../../../redux/mapReducer'
// import * as userActions from '../../../redux/userReducer'

class SelectionContainer extends Component {

  constructor(props) {
    super(props);
    this.currOrder = 0;
    this.pages = [];
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

  componentWillMount() {
    this._refs = {};
  }

  componentDidMount() {
    this.button.disabled = true;
    // console.log('===================getState', store.getState());
    axios.get('/user/retrieve/profileinfo/').then(response => {
      var list = [];
      var urlsLikedMemlys = response.data.likedMemlys.map(url => url.mediaUrl)
      console.log('urlsLikedMemlys', urlsLikedMemlys)
      list = list.concat(urlsLikedMemlys);
      list = list.concat(response.data.memlys);
      console.log('response===========================', list)
      store.dispatch({
        type: 'USER_LIST_MEMLYS',
        memlys: list
      });
    });

  }

  select(e) {
    // console.log('in select event', e.target.getAttribute('data-url');
      var url = e.target.getAttribute('data-url');
      var selected = e.target.getAttribute('data-selected');

      if (selected === 'false') {
        e.target.style.opacity = '0.5';

        var page = {
          order: this.currOrder,
          imgUrl: url
        }
        console.log('child', e.target.children)
        e.target.childNodes[0].nodeValue = 'dani';
        console.log('----------------button', this.button)
        this.button.disabled = false;
        this.currOrder++;
        this.pages.push(page);
        e.target.setAttribute('data-selected', 'true');
        // console.log(this.button)
      } else {
        e.target.style.opacity = '1';
        var removeIndex = -1;
        this.pages.forEach(page => {
          if(page.imgUrl === url) {
            removeIndex = this.pages.indexOf(page);
          }
        })
        this.pages.splice(removeIndex, 1);

        e.target.setAttribute('data-selected', 'false');
        this.currOrder--;
        for (var i = 0; i < this.pages.length; i++) {
          this.pages[i].order = i;
        }
        console.log('length', this.pages.length)
        if (this.pages.length === 0) {
          this.button.disabled = true;
        }


      // <button type="submit" id="submit" value="submit" disabled ref={(c) => this.button = c} onClick={this.submit.bind(this)}><Link to="addcaptions" disabled>Submit</Link></button>
      // <Link to="addcaptions" className="editProfileButton" role="button" ref={(c) =>  this._refs['submit'] = c} id="disabledCursor" onClick={ (e) => e.preventDefault() }>Submit</Link>
// <Link to="/addcaptions" id="disabledCursor" >Submit</Link>
      }
  }

  submit(e) {
    console.log('in submit')
    if(this.pages.length) {
      const path = '/addcaptions'
      console.log(path, hashHistory)
      hashHistory.push(path)
      console.log(path, hashHistory)
      
    }

            // <li><Link to="/">Home</Link></li>
      // <Link to="/photo">Upload</Link>

    // var transitionTo = Router.transitionTo;
    // this.pages.length > 0 && transitionTo('addcaptions');
  }

  render() {

    return(
      <div className = "ProfileBoxes">
       <button type="submit" id="submit" value="submit" onClick={this.submit.bind(this)} ref={(c) => this.button = c} >Submit</button>

        <div className ="MemlysContainer">
          {this.props.memlys && this.props.memlys.map((url) => <SelectionPresentation url={url} select={this.select.bind(this)} />)}
        </div>
      </div>
    )
  }

  // render() {
  //   return <SelectionPresentation memlys={this.props.memlys} />
  // }
}

function mapStateToProps(state) {
  console.log('state----------------------', state.userReducer)
  return {
  //   currentUserLocation: state.mapReducer.currentUserLocation,
    memlys: state.userReducer.allMemlys
  //   memlyIdStorage: state.memlysReducer.memlyIdStorage,
  }
}

export default connect(mapStateToProps)(SelectionContainer)


