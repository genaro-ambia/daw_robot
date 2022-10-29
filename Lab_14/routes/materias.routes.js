const express = require('express');
const router = express.Router();
const path = require('path');
const materias = ["Sistemas digitales", "Fundamentos de programacion"];

router.get('/new', (request, response, next) => {
    response.render(path.join('materias','new.ejs')); 
});

router.post('/new', (request, response, next) => {
    console.log(request.body);
    materias.push(request.body.nombre);
    response.redirect('/materias');
});

router.get('/', (request, response, next) => {
    response.render(path.join('materias','list.ejs'), {
        materias: materias,
    }); 
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