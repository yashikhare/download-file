// Requiring express package for routing
const express = require('express')

// Creating app
const app = express();

// Requiring express-zip for downloading a zip file
const zip = require('express-zip');

// The folder path for the files
const folderPath = __dirname+'/Files';

// GET request for single file
app.get('/single',function(req,res) {
	console.log('single file');
	
	// Download function provided by express
	res.download(folderPath+'/single_gfg.txt', function(err) {
		if(err) {
			console.log(err);
		}
	})
})

// GET request for multiple file download as zip
app.get('/multiple', function(req, res) {
	console.log('Multiple file download')

	// zip method which take file path
	// and name as objects
	res.zip([
		{ path: folderPath+'/multiple_one_gfg.txt',
			name: 'one_gfg.txt'},
		{ path: folderPath+'/multiple_two_gfg.txt',
			name: 'two_gfg.txt'},
		{ path: folderPath+'/multiple_three_gfg.txt',
			name: 'three_gfg.txt'}
	])
})

// GET request to the root of the app
app.get('/', function(req, res){
	res.sendFile(__dirname+'/index.html');
})

// Creating server at port 3000
app.listen(3000,function(req,res){
	console.log('Server started to listen at 3000');
})
