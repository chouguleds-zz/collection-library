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

	this.size = function() {

		return this.count;
	}

	this.toArray = function() {

		var values = [];
		for (var key in this.hashSet) {
			if (this.hashSet.hasOwnProperty(key))
				values.push(this.hashSet[key]);
		}
		return values;
	}
}