const express = require('express');
const app = express();

// middleware

app.use((request, response, next) => {
    console.log('middleware!');
    next();
})

app.use((request, response, next) => {
    console.log('Otro middleware');
    response.send('Hola mundo!');
})

app.listen(3000);