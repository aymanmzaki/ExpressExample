const http = require('http');
const fs = require ('fs');

const handelRequests = function(req,res){
    if (req.url === '/'){
        res.writeHead(200,{'contentType':'text/html'});
        fs.createReadStream('index.html').pipe(res);
    }else if (req.url ==='/reg')
    {
        res.writeHead(200,{'contentType':'text/html'});
        fs.createReadStream('regs.html').pipe(res);
    }

}

http.createServer(handelRequests)
.listen(9999);