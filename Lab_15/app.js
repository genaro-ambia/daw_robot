const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
app.set('view engine', 'ejs');
app.set('views', 'views');



app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({extended: false}));
//Middleware
app.use((request, response, next) => {
    console.log('Middleware!');
    next(); //Le permite a la petición avanzar hacia el siguiente middleware
});

const rutasMaterias = require('./routes/materias.routes');
app.use('/materias', rutasMaterias);

app.use((request, response, next) => {
    response.status(404);
    response.sendFile(path.join(__dirname, 'views', 'error.html'));
});

app.listen(3000);