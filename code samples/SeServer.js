/// import http module 
const http = require('http')
const url= require('url')
const fs= require('fs')


const headers = {'content-type':'text/html'};
let requestHandler = function (request,response){
    if (request.url =='/'){
        response.writeHead(200,headers)
        fs.createReadStream('index.html').pipe(response);
    }

//     console.log(url.parse(request.url))
   
//     let query = url.parse(request.url,true).query
//    response.setHeaders()
//     // Create response and flush it to client
//     response.writeHead(200,headers)
//     response.write('<html><head><title>MyPage</title></head><body>')
//     response.write('<center><h1>Hello '+ query.name+ '!!</h1></center>')
//     response.write('</body></html>')
//     response.end()

}

// create server and listen on port number 8888 
http.createServer(requestHandler)
    .listen(8888)