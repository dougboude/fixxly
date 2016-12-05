(function () {
	import { locsession as localsession } from './localsession';

	var getNewUser = function(){//return an empty placeholder user object
		var user = {
			id:0,
			name:'',
			token:''
		}
		return user;
	}

	var getTokenHeaders = function(token){
		var retval = new Headers({'authorization': 'Bearer ' + token});

		return retval;
	}

	var validateToken = function(token, returnMessage){
		var returnMessage = returnMessage || false;

		var promise = new Promise(function(resolve,reject){
			var response = {valid:true,message:''};

			fetch( 'http://localhost:1337/auth/validateToken', 
				{
					credentials:'same-origin',
					headers:getTokenHeaders(token)
				}
			).then( (data) => data.json() )
			.then( (data) => {
				if(data.err){
					response.valid = false;
					response.message = data.err;
				}
				resolve((returnMessage)?response:response.valid);
			} );
		});

		return promise;
	}

	var login = function(creds){
		var promise = new Promise(function(resolve,reject){
			var retval = {message:'',success:true,user:getUser(),token:''};
			//transform submitted creds into form data
			var frmCreds = new FormData();
			for(let cred of Object.keys(creds)){
				frmCreds.append(cred,creds[cred]);
			}

			fetch( 'http://localhost:1337/login', {credentials:'same-origin',method:'POST',body: frmCreds})
			.then( (data) => data.json() )
			.then( (data) => {	
				if( data.success === true) {
			  		retval.user = data.user;
			  		//retval.user.token = data.token;
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
		var retval = {success:true,message:''};

		var promise = new Promise(function(resolve,reject){
			//verify the value passed in is valid in the system...
			isValidEmailAccount(email).then(
				function(result){
					if(result.isvalid){
						//make call to send email...
						retval.message = 'Email has been sent to ' + email;
						resolve(retval);
					} else {
						retval.success = false;
						retval.message = 'email provided is not a valid email or not a valid account';
						resolve(retval);
					}
				}
			);
		});
		return promise;
	}

	var isValidEmailAccount = function(email, returnMessage){
		var returnMessage = returnMessage || false;

		var promise = new Promise(function(resolve,reject){
			var response = {valid:true,message:''};

			fetch( 'http://localhost:1337/auth/validateemail?email=' + email, 
				{
					credentials:'same-origin'
				}
			).then( (data) => data.json() )
			.then( (data) => {
				if(!data.success){
					response.valid = false;
					response.message = data.message;
				}
				resolve((returnMessage)?response:response.valid);
			} );
		});

		return promise;
	}

	var logout = function(){
		localsession.set('thisuser',getNewUser());
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
		return (thisuser.token == '' || thisuser.token == null)?false:true;
	}

  	module.exports = {
		login:login
	    ,logout:logout
	    ,getUser:getUser
	    ,isLoggedIn:isLoggedIn
	    ,initializeUser:initializeUser
	    ,getResetLink:getResetLink
	    ,validateToken:validateToken
	    ,isValidEmailAccount:isValidEmailAccount
  	};

}());