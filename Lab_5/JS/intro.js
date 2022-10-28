console.log("Hola Mundo!");
console.info("esto es importante");
console.warn("esto es una advertencia");
console.error("esto es un error");
console.assert(1 === 1);

//declaracion de variables

let precio = 59.99; //variable

const precios = 59.99 // constante

//alert, prompt, configure

alert("hola");
prompt("¿Como te llamas?");

const nombre = prompt("Como te llamas");
console.log("hola" + nombre);

const respuesta = confirm("Tienes sueño?");
if (respuesta){
    console.log("necesitas cafe");
}else{
    console.log("no necesitas cafe");
}

function tomar_cafe(){
    console.log("Glu glu glu");
}

tomar_cafe();

function tomar(bebida){
    console.log("Tomando " + bebida);
}

tomar("te");

//funciones modernas

let comer_variado = (comida) => {
    console.log("comiendo" + comida);
}

comer_variado(torta);

//Arreglos
const arreglo = [1,2,3,"elemento"];
arreglo.push("ISDR");
arreglo[10] = "uno mas";
console.log(arreglo);

//arreglo asociativo

arreglo["ISDR"] = "Ingeniería en sistemas digitales y robótica";
console.log(arreglo);

document.write(arreglo);