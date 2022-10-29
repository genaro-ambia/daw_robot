const path = require('path');
const Materia = require('../models/materia.model')

exports.get_new = (request, response, next) => {
    response.render(path.join('materias','new.ejs')); 
};

exports.post_new = (request, response, next) => {
    const materia = new Materia(request.body.nombre, request.body.clave);
    materia.save();
    response.setHeader('Set-Cookie', 'this_a_cookie');
    response.redirect('/materias');
};

exports.get_root = (request, response, next) => {
    response.render(path.join('materias','list.ejs'), {
        materias: Materia.fetchAll(),
    }); 
};