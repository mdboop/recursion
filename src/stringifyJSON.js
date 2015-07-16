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
				if(Array.isArray(value) || (typeof value === "object" && value !== null)) {
					stringify(value);
				}
				if(typeof value !== "function" && typeof value !== undefined) {
				  result += "\"" + key.toString(); + ":" + value.toString();
			  }
			}); 
			result += result.slice(0,-1) + "}";

		} else if (typeof obj === "string") {
			result += "\"" + obj.toString() + "\"";
		} else if (typeof obj === "object" && obj !== undefined) {
			result += "null";
		} else {
			result += obj.toString();
		}
  };
	stringify(obj);
	return result;

};
