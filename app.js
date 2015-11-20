exports.HashMap = function() {
	var hashMap = {};
	var count = 0;

	function add(key, value) {

		hashMap[key] = value;
		count++;
	}

	function get(key) {

		
		return hashMap[key];
	}

	function remove(key) {

		if (count > 0) {
			delete hashMap[key];
			count--;
		}

	}

	function size() {

		return count;
	}
}