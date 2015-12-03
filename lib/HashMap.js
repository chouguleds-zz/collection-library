exports.HashMap = function() {

	var hashMap = {};
	var count = 0;

	var add = function(key, value) {

		if (key === undefined)
			throw TypeError("Key Can not be undefined.");
		if (value === undefined)
			throw TypeError("Value Can not be undefined.");

		hashMap[key] = value;
		count++;
	};

	var get = function(key) {

		if (key === undefined)
			throw TypeError("Key Can not be undefined.");
		return hashMap[key];
	};

	var remove = function(key) {

		if (key === undefined)
			throw TypeError("Key Can not be undefined.");

		if (count > 0) {
			delete hashMap[key];
			count--;
		}

	};

	var size = function() {

		return count;
	};

	var clear = function() {

		for (var key in hashMap) {
			if ((hashMap).hasOwnProperty(key))
				delete hashMap[key];
		}
		count = 0;
	};

	var isEmpty = function() {

		return count === 0;
	};

	var getKeys = function() {

		var keys = [];
		for (var key in hashMap) {
			if (hashMap.hasOwnProperty(key))
				keys.push(key);
		}
		return keys;
	};

	var getValues = function() {

		var values = [];
		for (var key in hashMap) {
			if (hashMap.hasOwnProperty(key))
				values.push(hashMap[key]);
		}
		return values;
	};

	var containsKey = function(key) {

		if (key === undefined)
			throw TypeError("Key Can not be undefined.");

		return hashMap[key] !== undefined;
	};

	var containsValue = function(value) {

		if (value === undefined)
			throw TypeError("Value Can not be undefined.");

		for (var key in hashMap) {

			if (hashMap[key] === value)
				return true;
		}
	};

	return {
		add: add,
		get: get,
		remove: remove,
		size: size,
		clear: clear,
		isEmpty: isEmpty,
		getKeys: getKeys,
		getValues: getValues,
		containsKey: containsKey,
		containsValue: containsValue
	}
}