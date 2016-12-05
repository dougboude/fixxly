import React, { Component } from 'react';
import { render } from 'react-dom';
import { locsession as localsession } from '../../services/localsession';
import { Link, browserHistory } from 'react-router';
import { Modal, Button } from 'react-bootstrap';
import auth from '../../services/auth.jsx';

export default class LoginForm extends Component {
  constructor(props) {
	    super(props);
	    this.state = {
	    	error:"",
	    	showModal:false,
	    	modalmessage:"",
	    	formvals:{
	    		email:""
	    		,password:""
	    	}
		};
		this.inputValChange = this.inputValChange.bind(this);
		this.showError = this.showError.bind(this);
		this.closemodal = this.closemodal.bind(this);
		this.showmodal = this.showmodal.bind(this);
	}

	componentWillMount(){

	}

	componentDidMount(){

	}

	inputValChange(event){//capturing form values in our state so they're available when it's time to submit for authentication
		//note that the '...' prefix to this.state allows us to do a deep merge without overwriting things. ES6 shorthand for some stuff
		this.setState({ formvals: { ...this.state.formvals, [event.target.name]: event.target.value } });
	}

  login(){
  	var creds = this.state.formvals;
  	var self = this;
  	//a wee bit of client side validation
  	if(creds.email == "" || creds.password == ""){
  		this.setState({modalmessage:"Please enter a username and password"});
  		this.showmodal();
  		return;
  	}
  	//login returns a promise...
  	auth.login(this.state.formvals).then(
  		function(result){//resolved
  			console.log('resolved. should push home');
  			browserHistory.push('/home');
  		},
  		function(result){//rejected
  			console.log('login rejected.');
  		//set state error message
  		var newstate = {error:result.message};
  		self.setState(newstate);
  		self.clearForm();
  		setTimeout(self.showError,2000);
  		}
  	);
  }

  clearForm(){
  	var newformvals = {formvals:{email:"",password:""}};
  	this.setState(newformvals);
  }

  showError(){
  	var elem = this.refs.divError;
  	var localthis = this;
  	//all of the following is to fade out the error message and then reset the element to prep it for its next message
  	elem.style.opacity = 1;
    window.requestAnimationFrame(function() {
        elem.style.transition = "opacity 1500ms";
        elem.style.opacity = 0;
	    setTimeout(function(){//when transition is done, reset element styles and error message. Running this timer in parallel to the transition
	    	elem.style.transition = "initial";
	  		var newstate = {error:""};
	  		localthis.setState(newstate);	    	
	  		elem.style.opacity = 1;
	    },1500,elem,localthis);	        
    });
  }

  logout(e){
  	e.preventDefault();
  	localsession.delete('thisuser');
  	auth.initializeUser();
  	browserHistory.push('/');//push for root, let the system take us where it will
  }

  closemodal(){
    this.setState({showModal:false,modalmessage:""});
  }

  showmodal(){
    this.setState({showModal:true});
  }

  render() {
  	if(!auth.isLoggedIn()){
	    return (
		      <div className="form-group row-fluid">
		        <div className="col-xs-6 divLoginform col-centered ">
		          <div className="bottomWhite">
		            <input type="email" name="email" id="email" ref="email" onChange={this.inputValChange} value={this.state.formvals.email} className="inputLogin" placeholder="Email" />
		          </div>
		          <div className="bottomWhite">
		            <input type="password" name="password" ref="password" id="password" onChange={this.inputValChange} value={this.state.formvals.password} className="inputLogin" placeholder="Password" />
		            <Link to="/forgotpassword" id="aForgotPassword">Forgot?</Link>
		            <div className="clearfix"></div>
		          </div>
		          <div className="bigredcenter" ref="divError">{this.state.error}</div>
		          <div>
		            <button id="btnLogin" className="btn" onClick={this.login.bind(this)}>
		              Login
		            </button>
		          </div>
		          <div className="bigwhitecenter">
		          	<Link to="/signup" id="aSignup">Sign Up</Link>
		          </div>
		        </div>
			      <div>
			        <Modal show={this.state.showModal} onHide={this.closemodal}>
			          <Modal.Body>
			            <h3>{this.state.modalmessage}</h3>
			          </Modal.Body>
			          <Modal.Footer>
			            <Button onClick={this.closemodal}>Okay</Button>
			          </Modal.Footer>
			        </Modal>
			      </div>
		      </div>
		    );
	} else {//user IS logged in. Show them the logout link.
		return (
				<div className="row-fluid">
		        	<div className="col-xs-6 divLoginform col-centered ">
			          <div className="bigwhitecenter">
			          	<span id="aLogout" onClick={this.logout.bind(this)}>LOGOUT</span>
			          </div>
			        </div>
			    </div>
		    );
	}
  }
}