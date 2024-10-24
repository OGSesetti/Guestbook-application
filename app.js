const express = require('express');
const app = express();

var http = require("http");
const path = require('path')

app.use(express.static('public'));
// /, /guestbook, /newmessage, /ajaxmessage


app.get('/', function(req, res){
res.sendFile(path.join(__dirname, 'public', '/index.html'));
console.log('toimii')
});

app.get('/guestbook', function(req, res){
    res.sendFile(path.join(__dirname, 'public', '/guestbook.html'));
});

app.get('/newmessage', function(req, res){

});

app.get('/ajaxmessage', function(req, res){

});

const port = 8081;
app.listen(port, () =>{
    console.log('Server running on http://localhost:', port);
});