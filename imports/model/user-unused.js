(function(){
	var UserInstance = {};

    var _id = 0;
    var _name = "";
    var _token = "";

    UserInstance.getName = function() {
        return _name;
    }
  
    UserInstance.setName = function(newName) {
        _name = newName;
        return this;
    }
    UserInstance.getToken = function() {
        return _token;
    }
  
    UserInstance.setToken = function(newToken) {
        _token = newToken;
        return this;
    }
    UserInstance.getId = function() {
        return _id;
    }
  
    UserInstance.setId = function(newId) {
        _id = newId;
        return this;
    }  

    UserInstance.newUser = function(){
    	UserInstance.setId(0);
    	UserInstance.setName("");
    	UserInstance.setToken("");
    	return UserInstance;
    }

    UserInstance.getUserVals = function(){
    	return {
    		id:_id,
    		name:_name,
    		token:_token
    	};
    }

	export var User = UserInstance;

})();
