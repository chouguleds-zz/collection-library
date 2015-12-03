exports.HashSet = function() {

	var hashSet = {};
	var count = 0;

	var add = function(value) {

		if (value === undefined)
			throw TypeError("Value Can not be undefined.");

		if (hashSet[value] !== undefined)
			return false;

		else {
			hashSet[value] = value;
			count++;
		}

	};

	var clear = function() {

		for (var key in hashSet) {
			if ((hashSet).hasOwnProperty(key))
				delete hashSet[key];
		}
		count = 0;
	};

	var contains = function(value) {

		if (value === undefined)
			throw TypeError("Value Can not be undefined.");

		return hashSet[value] !== undefined;
	};

	var isEmpty = function() {

		return count === 0;
	};

	var remove = function(value) {

		if (value === undefined)
			throw TypeError("Key Can not be undefined.");

		if (count > 0) {
			delete hashSet[key];
			count--;
		}

	};

	var size = function() {

		return count;
	};

	var toArray = function() {

		var values = [];
		for (var key in hashSet) {
			if (hashSet.hasOwnProperty(key))
				values.push(hashSet[key]);
		}
		return values;
	};

	var iterator = function() {


	};
	return {
		add: add,
		remove: remove,
		size: size,
		clear: clear,
		isEmpty: isEmpty,
		toArray:toArray,
		iterator:iterator,
		contains:contains
	}

}