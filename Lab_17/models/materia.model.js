const db = require('../util/database');

module.exports = class Materia {

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(mi_ID_materia, mi_nombre, mi_profesor, mi_unidad) {
        this.ID_materia = mi_ID_materia;
        this.nombre = mi_nombre;
        this.profesor = mi_profesor;
        this.unidad = mi_unidad;
        
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        return db.execute(
            'INSERT INTO materias (ID_materia, nombre, profesor, unidades) VALUES (?, ?, ?, ?)',
            [this.ID_materia, this.nombre, this.profesor, this.unidad]
        );
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
        return db.execute('SELECT * FROM materias');
    }

    static fetchOne(ID_materia){
        return db.execute('SELECT * FROM materias WHERE ID_materia = ?', [ID_materia]);
    }

    static edit(ID_materia, nombre, profesor, unidad){
        return db.execute(
            'UPDATE materias SET ID_materia = ?, nombre = ?, profesor = ?, unidades = ?',
            [ID_materia, nombre, profesor, unidad]
        );
    }

}