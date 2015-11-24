var collection = require("../app.js");
var assert = require("assert");

describe("HashMap", function() {



	describe("#add()", function() {

		it("should add the key-value pair successfully.", function() {

			var hashMap = new collection.HashMap();
			hashMap.add(1, "one");
			hashMap.add(2, "two");
			hashMap.add(3, "three");
			assert.equal("one", hashMap.get(1));
			assert.equal("three", hashMap.get(3));
			assert.equal("two", hashMap.get(2));
		});

		it('should throw type error for invalid  (undefined) key argument', function() {

			var hashMap = new collection.HashMap();
			assert.throws(function() {
				hashMap.add(undefined, 5);
			}, /Key Can not be undefined./);

		});

		it("should throw type error for invalid  (undefined) value argument", function() {

			var hashMap = new collection.HashMap();
			assert.throws(function() {
				hashMap.add(5, undefined)
			}, /Value Can not be undefined./)

		});


	});

	describe("#get()", function() {

		it("should get the correct value for specified key", function() {

			var hashMap = new collection.HashMap();
			hashMap.add(1, "one");
			hashMap.add(2, "two");
			hashMap.add(3, "three");
			assert.equal("one", hashMap.get(1));
			assert.equal("three", hashMap.get(3));
			assert.equal("two", hashMap.get(2));
		});

		it('should throw type error for invalid  (undefined) key argument', function() {

			var hashMap = new collection.HashMap();
			assert.throws(function() {
				hashMap.get(undefined);
			}, /Key Can not be undefined./);

		});

	});

	describe("#remove()", function() {

		it("should remove the entry from HashMap for specified key", function() {

			var hashMap = new collection.HashMap();
			hashMap.add(1, "one");
			hashMap.add(2, "two");
			hashMap.add(3, "three");

			hashMap.remove(1);
			hashMap.remove(3);

			assert.equal(undefined, hashMap.get(1));
			assert.equal(undefined, hashMap.get(3));
		});

		it('should throw type error for invalid  (undefined) key argument', function() {

			var hashMap = new collection.HashMap();
			assert.throws(function() {
				hashMap.remove(undefined);
			}, /Key Can not be undefined./);

		});

	});

	describe("#size()", function() {

		it("should give number of entries in the hashmap", function() {

			var hashMap = new collection.HashMap();
			hashMap.add(1, "one");
			hashMap.add(2, "two");
			hashMap.add(3, "three");

			assert.equal(3, hashMap.size());

			hashMap.remove(1);

			assert.equal(2, hashMap.size());
		});

	});

	describe("#clear()", function() {

		it("should clear all the entries in the HashMap", function() {

			var hashMap = new collection.HashMap();
			hashMap.add(1, "one");
			hashMap.add(2, "two");
			hashMap.add(3, "three");

			assert.equal(3, hashMap.size());

			hashMap.clear();

			assert.equal(0, hashMap.size());
		});

	});

	describe("#isEmpty()", function() {

		it("should return true if the Hashmap is empty", function() {

			var hashMap = new collection.HashMap();
		
			assert.equal(true, hashMap.isEmpty());
		});

		it("should return false if the Hashmap is not empty", function() {

			var hashMap = new collection.HashMap();
			hashMap.add(1, "one");
			hashMap.add(2, "two");
			hashMap.add(3, "three");
		
			assert.equal(false, hashMap.isEmpty());
		});

	});

	describe("#getKeys()", function() {

		it("should return array of keys of HasMap", function() {

			var hashMap = new collection.HashMap();
			hashMap.add(1, "one");
			hashMap.add(2, "two");
			hashMap.add(3, "three");
		
			assert.deepEqual([1,2,3], hashMap.getKeys());
			hashMap.clear();
			assert.deepEqual([], hashMap.getKeys());

		});

	});

	describe("#getValues()", function() {

		it("should return array of values of HasMap", function() {

			var hashMap = new collection.HashMap();
			hashMap.add(1, "one");
			hashMap.add(2, "two");
			hashMap.add(3, "three");
		
			assert.deepEqual(["one","two","three"], hashMap.getValues());
			hashMap.clear();
			assert.deepEqual([], hashMap.getValues());

		});

	});

	describe("#containsKey()", function() {

		it("should return true if the HashMap contains specified key", function() {

			var hashMap = new collection.HashMap();
			hashMap.add(1, "one");
			hashMap.add(2, "two");
			hashMap.add(3, "three");

			assert.equal(true, hashMap.containsKey(1));
			assert.equal(true, hashMap.containsKey(3));
		});

		it("should return false if the HashMap doesn't contains specified key", function() {

			var hashMap = new collection.HashMap();
			hashMap.add(1, "one");
			hashMap.add(2, "two");
			hashMap.add(3, "three");

			assert.equal(false, hashMap.containsKey(4));
			hashMap.remove(2);
			assert.equal(false, hashMap.containsKey(2));
		});


		it('should throw type error for invalid  (undefined) key argument', function() {

			var hashMap = new collection.HashMap();
			assert.throws(function() {
				hashMap.containsKey(undefined);
			}, /Key Can not be undefined./);

		});

	});

	describe("#containsValue()", function() {

		it("should return true if the HashMap contains specified value", function() {

			var hashMap = new collection.HashMap();
			hashMap.add(1, "one");
			hashMap.add(2, "two");
			hashMap.add(3, "three");

			assert.equal(true, hashMap.containsValue("one"));
			assert.equal(true, hashMap.containsValue("three"));
		});

		it("should return false if the HashMap doesn't contains specified value", function() {

			var hashMap = new collection.HashMap();
			hashMap.add(1, "one");
			hashMap.add(2, "two");
			hashMap.add(3, "three");

			assert.equal(false, hashMap.containsKey("hello"));
			hashMap.remove(2);
			assert.equal(false, hashMap.containsKey("two"));
		});


		it('should throw type error for invalid  (undefined) value argument', function() {

			var hashMap = new collection.HashMap();
			assert.throws(function() {
				hashMap.containsValue(undefined);
			}, /Value Can not be undefined./);

		});

	});

});