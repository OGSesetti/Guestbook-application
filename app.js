var http = require("http");

http.createServer(function (request, response) {
    response.writeHead(200, { 'Content-Type': 'text/html' });
    
    
    var heading1 = "<h1>Heading 1</h1>";
    var heading2 = "<h2>Heading 2</h2>";
    var newParagraph = "What's up guys my name is Dirk Tendick and I am here, stuck in a web server! Help!";

    response.write(heading1 + heading2 + newParagraph)
    response.end('');
}).listen(8081);

console.log('Server running at http://127.0.0.1:8081')