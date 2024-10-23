const express = require('express');
const app = express();
app.use(express.static('public'));
var http = require("http");

app.use(express.static('public'));
// /, /guestbook, /newmessage, /ajaxmessage


app.get('/', function(req, res){
res.sendFile(__dirname + '/public/index.html');
console.log('toimii')
});

app.get('/guestbook', function(req, res){

});

app.get('/newmessage', function(req, res){

});

app.get('/ajaxmessage', function(req, res){

});

const port = 8081;
app.listen(port, () =>{
    console.log('Server running on http://localhost:${port}')
});