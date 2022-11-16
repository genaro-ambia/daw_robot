const express = require('express');
const router = express.Router();
const materias = [];

router.get('/new', (request, response, next) => {
    let html = '<!DOCTYPE html>';
    html += "<h1>Registrar materias</h1>";
    html += '<form action="/materias/new" method="POST">';
    html += '<label for="nombre">Nombre de la materia: </label>';
    html += '<input type="text" id="curso" name="curso">';
    html += "<br><br>";
    html += '<input type="submit" id="enviar" name="enviar" value="Registrar">';
    html += "</form>";
    response.send(html);   
});

router.post('/new', (request, response, next) => {
    console.log(request.body);
    materias.push(request.body.nombre);
    response.redirect('/materias');
});

router.get('/', (request, response, next) => {
    let html = '<!DOCTYPE html>';
    html += "<h1>Listado de materias</h1>";
    html += "<ul>";
    for (let m of materias) {
        html += "<li>" + m +"</li>";
    }
    html += "</ul>";
    response.send(html); 
});

router.get('/isd', (request, response, next) => {
    let html = '<!DOCTYPE html>';
    html += "<h1>Ingeniero en sistemas digitales y robotica</h1>";
    response.send(html); 
});

router.get('/imi', (request, response, next) => {
    let html = '<!DOCTYPE html>';
    html += "<h1>Ingeniero en produccion musical digital</h1>";
    response.send(html); 
});

router.get('/itc', (request, response, next) => {
    let html = '<!DOCTYPE html>';
    html += "<h1>Ingeniero en tecnologías computacionales</h1>";
    response.send(html); 
});

module.exports = router;