import React, { Component } from 'react';
import { render } from 'react-dom';
import { browserHistory } from 'react-router';
import { Modal, Button } from 'react-bootstrap';
import auth from '../../services/auth.jsx';

export default class forgotpassword extends Component {
	constructor(props) {
	    super(props);
	    this.state = {
	    	message:"",
	    	showModal:false,
	    	modalmessage:"",
	    	iEmail:"",
	    	messageclass:""
		};
		this.handleClick = this.handleClick.bind(this);
		this.inputValChange = this.inputValChange.bind(this);
		this.showMessage = this.showMessage.bind(this);
	}

	componentDidMount(){

	}

	inputValChange(event){//capturing form values in our state so they're available when it's time to submit for authentication
		//note that the '...' prefix to this.state allows us to do a deep merge without overwriting things. ES6 shorthand for some stuff
		this.setState({iEmail: event.target.value });
	}

	handleClick(){
		var self = this;
		//validate that the value IS an email
		auth.getResetLink(this.state.iEmail).then(
			function(result){
				if(result.success){
					self.setState({message:result.message,messageclass:"biggreencenter"});
				} else {
					self.setState({message:result.message,messageclass:"bigredcenter"});
				}
		  		self.clearForm();
		  		setTimeout(self.showMessage,2000);				
			},
			function(result){

			}
		);
	}

	clearForm(){
		this.setState({iEmail:""});
	}

	showMessage(){
		var elem = this.refs.divMessage;
		var localthis = this;
		//all of the following is to fade out the error message and then reset the element to prep it for its next message
		elem.style.opacity = 1;
	window.requestAnimationFrame(function() {
	    elem.style.transition = "opacity 1500ms";
	    elem.style.opacity = 0;
	    setTimeout(function(){//when transition is done, reset element styles and error message. Running this timer in parallel to the transition
	    	elem.style.transition = "initial";
	  		var newstate = {message:""};
	  		localthis.setState(newstate);	    	
	  		elem.style.opacity = 1;
	    },1500,elem,localthis);	        
	});
	}

	closemodal(){
	this.setState({showModal:false,modalmessage:""});
	}

	showmodal(){
	this.setState({showModal:true});
	}



	render() {
	    return (
		      <div className="form-group row-fluid">
		        <div className="col-xs-6 divLoginform col-centered text-center">
		        	<h2 className="whiteheader">Forgot your password?</h2>
		        	<h3 className="whiteheader">We'll email you a link to reset it</h3>
		          <div className="bottomWhite" style={{marginTop:"50px"}}>
		            <input type="email" value={this.state.iEmail} name="iEmail" id="iEmail" ref="iEmail" onChange={this.inputValChange} className="inputLogin" placeholder="Email" />
		          </div>
		          <div className={this.state.messageclass} ref="divMessage">{this.state.message}</div>
		          <div>
		            <button id="btnLogin" className="btn" onClick={this.handleClick}>
		              Submit
		            </button>
		          </div>
		        </div>
			      <div>
			        <Modal show={this.state.showModal}>
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
	}
} 