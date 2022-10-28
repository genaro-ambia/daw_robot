const filesystem = require('fs');
const Readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

arr = [24,34,2,46,77,54,32,1,65,3];

//Función que recibe un arreglo y devuelve su promedio

const av_array = (arr) =>{
    let cont = 0;
    for(let i = 0; i<arr.length; i++){
        cont += arr[i];
    }
    return cont/arr.length;
}
//Funcion que recibe un arreglo y devuelve la cantidad de números pares
const even_array = (arr) => {
    let cont_2 = 0;
    for(let j = 0; j<arr.length; j++){
        if(arr[i] % 2 == 0){
            cont_2++;
        }
    }
    return cont_2;
}

//Funcion para agregar un texto y escribirlo en un .txt

const text_function = () =>{
    return new Promise((resolve, reject) => {
        Readline.question('Ingrese un texto: ', (Texto) => { filesystem.writeFileSync('Lab_9.txt', Texto); resolve();});
    });
}

const main = async () => {
    await text_function();
    Readline.close();
}

main();
//Funcion que devuelve una página creada anteriormente
const http = require('http');
const html = filesystem.readFileSync('../Lab_1/index.html');
const server = http.createServer((request, response)=>{
    console.log(request.url);
    response.setHeader('Content-Type', 'text/html');
    response.write(html);
    response.end();
});

server.listen(3000);
