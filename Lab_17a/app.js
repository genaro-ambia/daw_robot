const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const app = express();
app.set('view engine', 'ejs');
app.set('views', 'views');



app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({extended: false}));

app.use(cookieParser());

+app.use(session({
    secret: 'shfjdfhefwbfns475fe4db37bdnewnudnw94373bnda', 
    resave: false,  
    saveUninitialized: false, 
}));

app.use((request, response, next) => {
    const clicks = Number(request.cookies.numero_clicks ? request.cookies.numero_clicks : 0) + 1;
    console.log(request.cookies);
    response.setHeader('Set-Cookie', 'numero_clicks=' + clicks);
    next(); //Le permite a la petición avanzar hacia el siguiente middleware
});

const rutasMaterias = require('./routes/materias.routes');
app.use('/materias', rutasMaterias);
const rutasUsuarios = require('./routes/user.routes');
app.use('/user', rutasUsuarios);

app.use((request, response, next) => {
    response.status(404);
    response.sendFile(path.join(__dirname, 'views', 'error.html'));
});

app.listen(3000);