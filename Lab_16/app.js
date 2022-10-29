const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cookieParser = require('cookie-parser');

const app = express();
app.set('view engine', 'ejs');
app.set('views', 'views');



app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({extended: false}));

app.use(cookieParser());

app.use((request, response, next) => {
    const clicks = Number(request.cookies.numero_clicks ? request.cookies.numero_clicks : 0) + 1;
    console.log(request.cookies);
    response.setHeader('Set-Cookie', 'numero_clicks=' + clicks);
    next(); //Le permite a la petición avanzar hacia el siguiente middleware
});

const rutasMaterias = require('./routes/materias.routes');
const cookieParser = require('cookie-parser');
app.use('/materias', rutasMaterias);

app.use((request, response, next) => {
    response.status(404);
    response.sendFile(path.join(__dirname, 'views', 'error.html'));
});

app.listen(3000);