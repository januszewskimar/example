const Str = require(__dirname+"/../str.js");
assert = require("assert");


var example1 = new Str ("abc");
var example2 = new Str ("DCBA");

describe('Str class', function(){
	describe('Load', function(){
		it('Should load', function(){
			assert(example1, "example1 loaded");
			assert(example2, "example2 loaded");
		});
	});
	describe('Capitalize', function(){
		it('Should capitalize correctly', function(){
		    assert.equal(example1.getCapitalized(), "ABC");
		    assert.equal(example2.getCapitalized(), "DCBA");
		});
	});
	describe('Lowercase', function(){
		it('Should lowercase correctly', function(){
			assert.equal(example1.getLowercased(), "abc");
			assert.equal(example2.getLowercased(), "dcba");
		});
	});
	describe('Revert', function(){
		it('Should reverse correctly', function(){
			assert.equal(example1.getReversed(), "cba");
			assert.equal(example2.getReversed(), "ABCD");
		});
	});
});
