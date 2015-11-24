exports.HashMap = function() {

	this.hashMap = {};
	this.count = 0;

	this.add = function(key, value) {

		if (key === undefined)
			throw TypeError("Key Can not be undefined.");
		if (value === undefined)
			throw TypeError("Value Can not be undefined.");

		this.hashMap[key] = value;
		this.count++;
	}

	this.get = function(key) {

		if (key === undefined)
			throw TypeError("Key Can not be undefined.");
		return this.hashMap[key];
	}

	this.remove = function(key) {

		if (key === undefined)
			throw TypeError("Key Can not be undefined.");

		if (this.count > 0) {
			delete this.hashMap[key];
			this.count--;
		}

	}

	this.size = function() {

		return this.count;
	}

	this.clear = function() {

		for (var key in this.hashMap) {
			if ((this.hashMap).hasOwnProperty(key))
				delete this.hashMap[key];
		}
		this.count=0;
	}

	this.isEmpty = function() {

		return this.count === 0;
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

	this.containsKey = function(key) {

		if (key === undefined)
			throw TypeError("Key Can not be undefined.");

		return this.hashMap[key] !== undefined;
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