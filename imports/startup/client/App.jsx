import React, { Component } from 'react';
import { render } from 'react-dom';
import { locsession as localsession } from '../../services/localsession';
import auth from '../../services/auth.jsx';
import { browserHistory } from 'react-router';

// App component - represents the whole app

export default class App extends Component {
  render() {//this method is called on every navigational move...like onrequeststart
    //console.log('user at app level',localsession.get('thisuser'));
    //console.log('user is logged in (app render)?',auth.isLoggedIn());

    return (
      <div id="maindiv">
        { this.props.children }
      </div>
    );
  }
}