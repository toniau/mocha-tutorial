let convert = require('../app.js');
let assert = require('assert');

describe('Temperature Conversion', function(){
	describe('cToF/K',function() {
		it('should convert -40C to -40F', function(){
			assert.equal(-40, convert.cToF(-40));
		});
		it('should convert 0C to 32F', function(){
			assert.equal(32, convert.cToF(0));
		});
		it('should convert 0C to 273.15K', function(){
			assert.equal(273.15, convert.cToK(0));
		});
		it('should return undefined if no temperature input', function(){
			assert.equal(undefined, convert.cToF(''));
		});
	});
	describe('fToC/K', function(){
		it('should convert -40F to -40C', function(){
			assert.equal(-40, convert.fToC(-40));
		});
		it('should convert 32F to 0C', function(){
			assert.equal(0, convert.fToC(32));
		});
		it('should convert 32F to 273.15K', function(){
			assert.equal(273.15, convert.fToK(32));
		});
		it('should return undefined if no temperature input', function(){
			assert.equal(undefined, convert.fToC(''));
		});
	});
});