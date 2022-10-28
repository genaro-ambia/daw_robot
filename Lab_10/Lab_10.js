const filesystem = require('fs');

const http = require('http');
const server = http.createServer((request, response)=>{
    if(request.url == "/"){
        console.log(request.url);
        response.setHeader('Content-type', 'text/html');
        response.write('<!DOCTYPE html>');
        response.write("<h1>Pagina principal</h1>");
        response.write("<h1>Sub paginas: /isd, /imi, /random</h1>");

    }
    else if(request.url == "/isd"){
        console.log(request.url);
        response.setHeader('Content-type', 'text/html');
        response.write('<!DOCTYPE html>');
        response.write("<h1>Ingeniero en sistemas digitales y robotica</h1>")

    }
    else if(request.url == "/imi"){
        console.log(request.url);
        response.setHeader('Content-type', 'text/html');
        response.write('<!DOCTYPE html>');
        response.write("<h1>Ingeniero en produccion musical digital</h1>")

    }
    else if(request.url == "/new" && request.method == "GET"){
        console.log(request.url);
        response.setHeader('Content-Type', 'text/html');
        response.write("<h1> Pagina para agregar otras carreras </h1>");
        response.write("<br>")
        response.write('<form action="/new" method="POST">');
        response.write('<label for="carrera">Nombre carrera: </label>');
        response.write('<input type="text" id="carrera" name="Carrera>');
        response.write("<br>");
        response.write("<br>");
        response.write('<input type="submit" id="enviar" name="enviar" value="">');
        response.write("</form>");
    }
    else if(request.url == "/new" && request.method == "POST"){
        const info = []
        request.on('data', (dato) => {
            info.push(dato);
        });
        return request.on('end', () => {
            const dato_final = Buffer.concat(info).toString();
            filesystem.writeFileSync('output.txt', dato_final.split('&')[0].split('=')[1]);
            response.setHeader('Content-Type', 'text/html');
            response.write('<!DOCTYPE html>');
            response.write("<h1>Se ha registrado correctamente la carrera</h1>");
            response.end();
        });

    }
    else{
        response.setHeader('Content-type', 'text/html');
        response.write('<!DOCTYPE html>');
        response.write("<h1>ERROR 404: El recurso no existe</h1>")
    }
    response.end();
});

server.listen(3000);