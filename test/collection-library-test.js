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

});