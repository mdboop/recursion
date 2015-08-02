// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function (string) {
  var current = null;
  var next = function(start, end) {
    current = string.slice(start, end);
  };
  var result = null;
  if(string.charAt(1) === "[") {
    result = [];
  } else {
    result = {}; 
  }
  var numPattern = /^\d+\.?\d*/;
  var stringPattern = /\".+\"/;
  if(numPattern.test(current)) {
    return Number(current);
  }
  if(stringPattern.test(current)) {

  }
  if(whiteSpace.test(current)) {
    
  }
};




