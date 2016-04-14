import React, { Component }  from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getLoginStatus } from '../actions/index';

import AppBar from 'material-ui/lib/app-bar';
import IconButton from 'material-ui/lib/icon-button';
import NavigationClose from 'material-ui/lib/svg-icons/navigation/close';
import IconMenu from 'material-ui/lib/menus/icon-menu';
import MoreVertIcon from 'material-ui/lib/svg-icons/navigation/more-vert';
import MenuItem from 'material-ui/lib/menus/menu-item';

import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();



// .list-display-row {
//   list-style-type: none;
//   margin: 0;
//   padding: 0;
//   overflow: hidden;
//
//   li {
//     float: left;
//     a {
//       display: block;
//       text-align: center;
//       text-decoration: none;
//     }
//   }
// }

class FacebookLogin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      status: '',
    };
    // this.checkLoginState = this.checkLoginState.bind(this);
  }

  checkLoginState(event) {
    event.preventDefault();

    console.log(this.props);

    this.props.getLoginStatus()
      .then((response) => {
        console.log("response", response);
        if (response.payload.status === 'connected') {
            // Logged into your app and Facebook.
            this.setState({status: 'connected'});
            //testAPI();
          } else if (response.status === 'not_authorized') {
            // The person is logged into Facebook, but not your app.
            this.setState({status: 'Please log into app'});
          } else {
            // The person is not logged into Facebook, so we're not sure if
            // they are logged into this app or not.
            this.setState({status: 'Please log into Facebook'});          }
      });
  }

  render() {
    return (
      <div id="nav">
        <div><img width="230" height="33" src="http://www.printstagr.am/popup/logo_horiz-01.png" /></div>
        <div><button onClick={this.checkLoginState.bind(this)}>LOGIN IN TO FACEBOOK</button></div>
      </div>
    );
  }
}

// <img width="230" height="33" src="http://www.printstagr.am/popup/logo_horiz-01.png" />
// <AppBar
//   title="Social Print"
//
//   iconElementRight={
//     <IconMenu
//       iconButtonElement={
//
//         <button onClick={this.checkLoginState.bind(this)}>LOGIN IN TO FACEBOOK</button>
//
//       }
//       targetOrigin={{horizontal: 'right', vertical: 'top'}}
//       anchorOrigin={{horizontal: 'right', vertical: 'top'}}
//     >
//       <MenuItem primaryText="Refresh" />
//       <MenuItem primaryText="Help" />
//       <MenuItem primaryText="Sign out" />
//     </IconMenu>
//   }
// />

// .list-display-row {
//   list-style-type: none;
//   margin: 0;
//   padding: 0;
//   overflow: hidden;
//
//   li {
//     float: left;
//     a {
//       display: block;
//       text-align: center;
//       text-decoration: none;
//     }
//   }
// }

// function mapStateToProps(state) {
//   // this is from reducer/index.js
//   return { activeAlbum: state.activeAlbum }
// }

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getLoginStatus }, dispatch);
}

// This container doesn't care about state, so null is first arg
export default connect(null, mapDispatchToProps)(FacebookLogin);
