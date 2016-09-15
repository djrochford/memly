import React, { PropTypes, Component } from 'react'
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

  componentDidMount() {
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
        this.currOrder++;
        this.pages.push(page);
        console.log('pages', this.pages)
        e.target.setAttribute('data-selected', 'true');

      } else {
        e.target.style.opacity = '1';
        var removeIndex = -1;
        this.pages.forEach(page => {
          if(page.imgUrl === url) {
            removeIndex = this.pages.indexOf(page);
            console.log('this pages', this.pages)
          }
        })
        this.pages.splice(removeIndex, 1);

        e.target.setAttribute('data-selected', 'false');
        this.currOrder--;
        // console.log('in decrement', index)
        for (var i = 0; i < this.pages.length; i++) {
          // console.log('order', this.pages[i].order, i,  index)
          this.pages[i].order = i;
        }
        console.log(this.pages)
      }
      
  }

  render() {

    return(
      <div className = "ProfileBoxes">
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


