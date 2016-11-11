var chai = require('chai');
var chaiHttp = require('chai-http');
var assert = chai.assert; 

chai.use(chaiHttp);

var server;

describe('GET - root path', function() {
	beforeEach(function() {
		server = require('../server');
	});

	afterEach(function() {
		server.close();
	});

	it('returns a 200', function(done) {
		chai.request(server).get('/').end(function(error, response) {
			assert.equal(response.status, 200);
			done();
		});
	});

	it('returns alumni data',function(done) {
		chai.request(server).get('/').end(function(error, response) {
			var expected = [{
				firstName: 'Liz',
				lastName: 'Holzman',
				track: 'WebDev',
				cohort: 'Fall 2015'
		}];

			assert.deepEqual(response.body, expected);
			done();
		});
	});
});