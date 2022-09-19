const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// middleware

app.use(bodyParser.urlencoded({extended: false}));

app.use((request, response, next) => {
    console.log('middleware!');
    next();
});

app.use('/robots/new', (request, response, next) => {
    response.send('Respuesta de la ruta "/robots/new"'); 
});

app.use('/robots', (request, response, next) => {
    console.log(request.body);
    response.send('Respuesta de la ruta "/robots"'); 

});

app.use((request, response, next) => {
    console.log('Otro middleware');
    response.send('Hola mundo!');
})

app.listen(3000);