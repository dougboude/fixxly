import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router, IndexRoute, Route, browserHistory } from 'react-router';
import  auth from '../../../imports/services/auth.jsx';

//import main app wrapper
import App from '../../../imports/startup/client/App.jsx';

//import layouts
import darklayoutwithlogo from '../../../imports/ui/layouts/darkwithlogo.jsx';
import layoutwithfooternav from '../../../imports/ui/layouts/layoutwithfooternav.jsx';

//import components
import LoginForm from '../../../imports/ui/components/loginform.jsx';
import Welcome from '../../../imports/ui/components/welcome.jsx';
import Home from '../../../imports/ui/components/home.jsx';
import forgotpassword from '../../../imports/ui/components/forgotpassword.jsx';
import resetpassword from '../../../imports/ui/components/resetpassword.jsx';
import signup from '../../../imports/ui/components/signup.jsx';

var requireAuth = function (nextState, replace) {
	var authenticated = false;
	if( auth.isLoggedIn() )
	{
		authenticated = true;
	}
    if( !authenticated ) {
        replace({
          pathname: '/login',
          state: { nextPathname: nextState.location.pathname }
        })
    }
}

export default class Routes extends Component {
  render() {
    return (
		<Router history={ browserHistory }>
	      <Route path="/" component={ App }>
	        <Route component = { darklayoutwithlogo }>
				<Route path="/login" component={ LoginForm } />
				<Route path="/signup" component={ signup } />
				<Route path="/forgotpassword" component={ forgotpassword } />
				<Route path="/resetpassword" component={ resetpassword } />
	        </Route>
	        <Route component = { layoutwithfooternav }>
	        	<IndexRoute component={ Home } onEnter={ requireAuth } />
				<Route path="/home" component={ Home } onEnter={ requireAuth } />
				<Route path="/welcome" component={ Welcome } onEnter={ requireAuth } />
	      	</Route>
	      </Route>
	    </Router>
    );
  }
}