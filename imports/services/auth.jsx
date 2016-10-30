(function () {
	import { locsession as localsession } from './localsession';

	var getNewUser = function(){//return an empty user object
		var user = {
			id:0,
			name:"",
			token:""
		}
		return user;
	}

	var OLD_login = function(creds){//I'll return the user object, regardless of how login goes. In case someone needs it conveniently.
		var promise = new Promise(function(resolve,reject){
			var retval = {user:getUser(),success:true,message:""};
			//login process below. will replace with call to api later
			//
		  	if(creds.iEmail == "doug@gmail.com" && creds.iPassword == "derp"){
		  		retval.user.id = 1;
		  		retval.user.name = 'DougieB';
		  		retval.user.token = 'asdasdas';
		  		localsession.set('thisuser',retval.user);
		  		resolve(retval);
		  	} else {//login failed
		  		retval.success = false;
		  		retval.message = "login failed";
		  		reject(retval);
		  	}			
		});

	  	return promise;
	}

	var login = function(creds){
		var promise = new Promise(function(resolve,reject){
			var retval = {user:getUser(),success:true,message:""};
			//login process below. will replace with call to api later
			fetch( 'http://localhost:1337/login', {credentials:  'same-origin',method:'POST'})
			.then( (data) => data.json() )
			.then( (data) => {	
				if( data.success === true) {
			  		retval.user.id = data.user.id;
			  		retval.user.name = data.user.name;
			  		retval.user.token = data.user.token;
			  		localsession.set('thisuser',retval.user);
			  		resolve(retval);
				} else {//login failed
			  		retval.success = false;
			  		retval.message = data.message;
			  		reject(retval);
				}
			});
		});
	  	return promise;
	};

	var getResetLink = function(email){
		var retval = {success:true,message:""};

		var promise = new Promise(function(resolve,reject){
			//verify the value passed in is valid in the system...
			isValidEmailAccount(email).then(
				function(result){
					if(result.isvalid){
						//make call to send email...
						retval.message = "Email has been sent to " + email;
						resolve(retval);
					} else {
						retval.success = false;
						retval.message = "email provided is not a valid email or not a valid account";
						resolve(retval);
					}
				}
			);
		});
		return promise;
	}

	var isValidEmailAccount = function(email){
		var retval = {isvalid:true,message:""};
		var promise = new Promise(function(resolve,reject){
			//code below simulates call to the API to validate that the email address provided IS a valid account
			if(email == "doug@gmail.com"){
				resolve(retval);
			} else {
				retval.isvalid = false;
				resolve(retval);
			}
		});
		return promise;
	}

	var logout = function(){

	}

	var getUser = function(){
		return (!isLoggedIn())?getNewUser():localsession.get('thisuser');
	}

	var initializeUser = function(){
		if(localsession.get('thisuser') == undefined){
			localsession.set('thisuser',getNewUser());
		}		
	}

	var isLoggedIn = function(){
		//thisuser will already exist in session because our main.js is initializing at least an empty user before anything else is called
		var thisuser = localsession.get('thisuser');
		return (thisuser.token == "" || thisuser.token == null)?false:true;
	}

  	module.exports = {
		login:login
	    ,logout:logout
	    ,getUser:getUser
	    ,isLoggedIn:isLoggedIn
	    ,initializeUser:initializeUser
	    ,getResetLink:getResetLink
  	};

}());