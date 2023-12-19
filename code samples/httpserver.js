const http = require('http');
const url = require('url');

const host = 'localhost';
const port = 8000;

const requestHandler = function (req, res) {  
  res.writeHead(200);
  var qparam = url.parse(req.url, true).query;
  var name = qparam.name;
  res.end(name);
};

const server = http.createServer(requestHandler);

server.listen(port, host ,() => {
  console.log(`server is runing on ${host}:${port}`)
});
