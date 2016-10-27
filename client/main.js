import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { Session } from 'meteor/session';
import { Router, Route, browserHistory } from 'react-router';
import auth from '../imports/services/auth.jsx';
import Routes from '../imports/startup/client/routes.jsx';

function init(){
	auth.initializeUser();
}

Meteor.startup(() => {
	init();
  render(<Routes />, document.getElementById('render-target'));
});