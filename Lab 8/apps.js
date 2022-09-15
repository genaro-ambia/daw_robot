const filesystem = require('fs');
filesystem.writeFileSync('hola.txt', 'hola desde node');


console.log("hola desde node");

const array = [100,22,303,0.4,545,236,97,28,59,10];

//for (let item of array){
  //  console.log(item);
//}

//for let item of array: sobre los elementos del arrelo
//for let item in array: sobre los indices del arreglo

for (let item of array){
    setTimeout(() => {
        console.log(item);
    }, item);
}

const http = require('http');

const server = http.createServer( (request, response) => {
    console.log(request.url);
    response.setHeader('Content-Type', 'text/html');
    response.write("Hello world");
    response.end();

});

server.listen(3000);