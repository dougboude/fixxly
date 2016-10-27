(function(localsession){//I am a persistence service layer with my own namespace, whatever good that might be.

	localsession.get = function(key){
		return prepValToGet(window.sessionStorage.getItem(key));
	}

	localsession.set = function(key,value){
		window.sessionStorage.setItem(key,prepValToSet(value));
	}

	localsession.delete = function(key){
		window.sessionStorage.removeItem(key);
	}

	function prepValToSet(thevalue){//gotta serialize any incoming objects (SIMPLE objects, I might add! Complex objects are a no no)
		if(isOBJ(thevalue)){
			return JSON.stringify(thevalue);
		} else {
			return thevalue;
		}
	}

	function isOBJ(thevalue){
		if(typeof thevalue === 'object'){
			return true;
		}
		return false;
	}

	function prepValToGet(thevalue){
		if(isJSON(thevalue)){//if we need to convert the stored string back to an object...
			return JSON.parse(thevalue);
		} else {
			return thevalue;
		}
	}

	function isJSON(thevalue){
		if(thevalue == null){//believe it or not, null values PASS a JSON.parse call! strange.
			return false;
		} else {
		    try {
		        JSON.parse(thevalue);
		    } catch (e) {
		        return false;
		    }			
		}
	    return true;
	}

	export var locsession = localsession;

})(window.localsession = window.localsession || {});