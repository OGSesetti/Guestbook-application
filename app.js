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
    let html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Guestbook</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/purecss@3.0.0/build/pure-min.css" integrity="sha384-X38yfunGUhNzHpBaEBsWLO+A0HDYOQi8ufWDkZ0k9e0eXz/tH3II7uKZ9msv++Ls" crossorigin="anonymous">
 
    <link rel="stylesheet" href="/css/styles.css">

</head>
<body>
    <div class="pure-g">
<div class="pure-u-1">
<h1>Vieraslista</h1>
    </div>

    <div="pure-g">
<div class="pure-u-1">
<button>Etusivu</button>
<button>Vieraslista</button>
 </div>

 <div class="pure-u-1">
 <ul>
<li></li>


 </ul>
     </div>


</body>
</html>
    
    `;
    res.send(html);
});

app.get('/newmessage', function(req, res){

});

app.get('/ajaxmessage', function(req, res){

});

const port = 8081;
app.listen(port, () =>{
    console.log('Server running on http://localhost:', port);
});