// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function (className) {
	var result = [];

	var findElements = function (element) {

		var elements = element.childNodes;

		var checkClasses = function(element) { 
			_.each(element.classList, function(classItem) {
			if (classItem === className) {
					result.push(element);
				}
		  });
		};

		checkClasses(element);

		_.each(elements, function(currentElement) {
			if(currentElement.childNodes.length === 0) {
				checkClasses(currentElement);
			} else {
				findElements(currentElement);
			}
		});

	};

	findElements(document.body);

	return result;

};

		