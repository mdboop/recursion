// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
	var result = "";
	//set up logic for determining what current value is
	var stringify = function(obj) {
		if(Array.isArray(obj)) {
			result += "[";
			_.each(obj, function(value, index) {
				if(index !== obj.length - 1) {
					stringify(value);
					result += ",";
				} else stringify(value);
			});
			result += "]";
		} else if (typeof obj === "object" && obj !== null) {
			result += "{";
			_.each(obj, function(value, key) {
				if(Array.isArray(value)) {
					result += "\"" + key + "\"" + ":";
					stringify(value);
					result += ",";
				} else if (typeof value === "object" && value !== null) {
					result += "\"" + key + "\"" + ":";
					stringify(value);
					result += ",";
				} else if (value === null || typeof value === "boolean") {
					result += "\"" + key + "\"" + ":" + value + ",";
				} else if (typeof value === "function" || typeof value === "undefined") {
					result = result;
				} else {
					result += "\"" + key + "\"" + ":" + "\"" + value + "\"" + ",";
				}
			}); 
			if(result.charAt(result.length -1) === ",") {
				result = result.slice(0, result.length - 1) + "}";
			} else {
				result += "}";
			}
		} else if (typeof obj === "string") {
			result += "\"" + obj + "\"";
		} else if (typeof obj === "object" && obj !== undefined) {
			result += obj;
		} else {
			result += obj.toString();
		}
  };

	stringify(obj);

	return result;

};
