exports.HashSet = function() {

	this.hashSet = {};
	this.count = 0;

	this.add = function(value) {

		if (value === undefined)
			throw TypeError("Value Can not be undefined.");

		if (hashSet[value] !== undefined)
			return false;

		else {
			this.hashSet[value] = value;
			this.count++;
		}

	}

	this.clear = function() {

		for (var key in this.hashSet) {
			if ((this.hashSet).hasOwnProperty(key))
				delete this.hashSet[key];
		}
		this.count = 0;
	}

	this.contains = function(value) {

		if (value === undefined)
			throw TypeError("Value Can not be undefined.");

		return this.hashSet[value] !== undefined;
	}

	this.isEmpty = function() {

		return this.count === 0;
	}
	
	this.remove = function(value) {

		if (value === undefined)
			throw TypeError("Key Can not be undefined.");

		if (this.count > 0) {
			delete this.hashSet[key];
			this.count--;
		}

	}

	this.get = function(key) {

		if (key === undefined)
			throw TypeError("Key Can not be undefined.");
		return this.hashMap[key];
	}



	this.size = function() {

		return this.count;
	}



	this.getKeys = function() {

		var keys = [];
		for (var key in this.hashMap) {
			if (this.hashMap.hasOwnProperty(key))
				keys.push(key);
		}
		return keys;
	}

	this.getValues = function() {

		var values = [];
		for (var key in this.hashMap) {
			if (this.hashMap.hasOwnProperty(key))
				values.push(this.hashMap[key]);
		}
		return values;
	}

	this.containsValue = function(value) {

		if (value === undefined)
			throw TypeError("Value Can not be undefined.");

		for (var key in this.hashMap) {

			if (this.hashMap[key] === value)
				return true;
		}
	}
}