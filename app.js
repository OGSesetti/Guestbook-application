const express = require('express');
const app = express();
app.use(express.static('public'));
var http = require("http");

// /, /guestbook, /newmessage, /ajaxmessage


app.get('/', function(req, res){

});

app.get('/guestbook', function(req, res){

});

app.get('/newmessage', function(req, res){

});

app.get('/ajaxmessage', function(req, res){

});

const port = 8081;
app.listen(port, () =>{
    console.log('Server running on http://localhost:${PORT}')
});