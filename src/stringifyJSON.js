// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {
  	var result = '';
  	if (typeof(obj) == "string"){
  		result += '"'+obj+'"';
  	}
  	else if (Array.isArray(obj)){
  		result += "[";
  		for (var i=0;i<obj.length;i++){
  			result += stringifyJSON(obj[i])+',';
  		}
  		if (result[result.length-1] == ","){
  		result = result.substring(0,result.length - 1);
  		}
  		result += "]";
  	}
  	else if(Object.prototype.toString.call(obj) === '[object Object]'){
  		result += "{";
  		for (var key in obj){
  			if (typeof(obj[key])!=="function" && typeof(obj[key])!=="undefined") {
  				result += stringifyJSON(key)+':'+stringifyJSON(obj[key])+',';
  			}
  		}
  		if (result[result.length-1] == ","){
  		result = result.substring(0,result.length - 1);
  		}
  		result += "}";
  	}
  	else {
  		result += obj;
  	}
  	return result;
};
