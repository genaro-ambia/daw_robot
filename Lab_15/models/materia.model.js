const materias = [
    {nombre: 'Sistemas digitals', clave: "TE1010", profesor: "Ricardo Acevedo"}, 
    {nombre: 'Fundamentos de programacion', clave: "TC1014", profesor: "Jorge Ramirez"}
];

module.exports = class Robot {

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(mi_nombre, mi_clave, mi_profesor) {
        this.nombre = mi_nombre;
        this.clave = mi_clave ? mi_clave : 'esta es mi clave';
        this.profesor = mi_profesor ? mi_profesor : 'pon aqui al profesor';
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        materias.push(this);
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
        return materias;
    }

}