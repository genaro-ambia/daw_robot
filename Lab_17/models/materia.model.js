const db = require('../util/database');

module.exports = class Materia {

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(mi_clave, mi_nombre, mi_profesor, mi_unidades) {
        this.nombre = mi_nombre;
        this.clave = mi_clave ? mi_clave : 'esta es mi clave';
        this.profesor = mi_profesor ? mi_profesor : 'pon aqui al profesor';
        this.unidades = mi_unidades ? mi_unidades : 8;
    }

    save() {
        return db.execute(
            'INSERT INTO materias (ID_materia, nombre, profesor, unidades) VALUES(?, ?, ?, ?)',
            [this.clave, this.nombre, this.profesor, this.unidades]);
    }

    static fetchAll() {
        return db.execute('SELECT * FROM materias');
    }

    static fetchOne(ID_materia){
        return db.execute('SELECT * FROM materias WHERE ID_materia = ?', [ID_materia]);
    }

    static edit(ID_materia, nombre, profesor, unidades){
        return db.execute(
            'UPDATE materias SET nombre = ?, profesor = ?, unidades = ? WHERE ID_materia = ?',
            [ID_materia, nombre, profesor, unidades]);
        
    }

}