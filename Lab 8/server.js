const http = require('http');

const server = http.createServer((reqest,response)=>{
    console.log(request.url);

})

server.listen(3000);