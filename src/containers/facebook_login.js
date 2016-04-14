import React, { Component }  from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getLoginStatus } from '../actions/index';

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
      <div>
        <button onClick={this.checkLoginState.bind(this)}>LOGIN IN TO FACEBOOK</button>
        <div id="status">STATUS {this.state.status}</div>
      </div>
    );
  }
}

// function mapStateToProps(state) {
//   // this is from reducer/index.js
//   return { activeAlbum: state.activeAlbum }
// }

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getLoginStatus }, dispatch);
}

// This container doesn't care about state, so null is first arg
export default connect(null, mapDispatchToProps)(FacebookLogin);
