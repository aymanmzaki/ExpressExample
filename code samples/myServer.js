// import http module 
const http = require('http');
const url = require('url');
const headers = { 'contentType': 'text/html' };

// function handle requests 
const requestHandler = function (request, response) {
    var paredUrl = url.parse(request.url, true);
    var q = paredUrl.query;
    // only send ok header
    console.log(paredUrl);
    console.log(`name = ${q.nme}`)
    response.writeHead(200, headers);
    response.end(q.nme);
};
// create server process listen on port 8080 on localhost
http.createServer(requestHandler).listen(8080)

