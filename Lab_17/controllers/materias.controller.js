const path = require('path');
const Materia = require('../models/materia.model');

exports.get_new = (request, response, next) => {
    response.render(path.join('materias','new.ejs'),{
        info: '',
        materia: '',
    }); 
};

exports.get_edit = (request, response, next) => {

    Materia.fetchOne(request.params.id)
        .then( ([rows, fieldData]) => {
            response.render(path.join('materias','new.ejs'), {
                materia: rows[0] ? rows[0] : '',
                info: '',
            });
        }).catch( (error) => {
            console.log(error);
        });

};
    
exports.post_edit = (request, response, next) => {
    
    Materia.edit(request.body.ID_materia, request.body.nombre, request.body.profesor, request.body.unidades)
        .then( () => {
            request.session.info = "La información de la materia " + request.body.nombre + " fue actualizada exitosamente";
            response.redirect('/materias');
        }).catch( (error) => {
            console.log(error);
        });
    
};


exports.post_new = (request, response, next) => {
    const materia = new Materia(request.body.ID_materia, request.body.nombre, request.body.profesor, request.unidades);
    materia.save()
        .then( () => {
            request.session.ultima_materia = materia.nombre;
            request.session.info = "La materia " + materia.nombre + " fue creada exitosamente";
            response.setHeader('Set-Cookie', 'this_a_cookie');
            response.redirect('/materias');
        }).catch((error)=>{
            console.log(error);
        })
    
};

exports.get_root = (request, response, next) => {
    let info = request.session.info ? request.session.info : '';
    request.session.info = '';

    Materia.fetchAll()
    .then( ([rows, fieldData]) => {
        response.render(path.join('materias', 'list.ejs'),{
            materias: rows,
            ultima_materia: request.session.ultima_materia ? request.session.ultimo_robot : '',
            info: info,
        });
    }).catch((error)=>{
        console.log(error);
    });
};

exports.get_one = (request, response, next) => {
    
    let info = request.session.info ? request.session.info : '';

    request.session.info = '';

    Materia.fetchOne(request.params.ID_materia)
        .then( ([rows, fieldData]) => {

            response.render(path.join('materias', 'list.ejs'), {
                materias: rows,
                ultima_materia: request.session.ultima_materia ? request.session.ultima_materia : '',
               info: info,
            }); 

        }).catch( (error) => {
            console.log(error);
        });

};