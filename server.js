var express = require('express');
var app = express();

var alumni = [{
	firstName: 'Liz',
	lastName: 'Holzman',
	track: 'WebDev',
	cohort: 'Fall 2015'
}]

app.get('/', function(request, response) {
	response.json(alumni);
});

var server = app.listen(1337, function(){
	console.log('Server is listening');
});

module.exports = server;