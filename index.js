/* eslint-disable indent */
/* eslint-disable no-console */
'use strict';
const express = require('express');
const socket = require('socket.io');
//APP setup
const app = express();
const server = app.listen(8080, function() {
	console.log('server running on 8080');
});

//Static Files
app.use(express.static('public'));

//Socket Setup
const io = socket(server);

io.on('connection', function() {
	console.log('made socket connection');
});
