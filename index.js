'use strict';
const express = require('express');
//APP setup
const app = express();
const server = app.listen(8080, function() {
	console.log('Listening on 8080');
});

//Static Files
app.use(express.static('public'));
