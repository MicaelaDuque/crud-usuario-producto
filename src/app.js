const express = require('express');
const path = require('path');
const userRoutes = require('./routes/usersRoutes');
const session = require("express-session")
const loggMiddleware =require('./middleware/auth')

const indexRouter = require('./routes/index');

const moviesRoutes = require('./routes/moviesRoutes');
const genresRoutes = require('./routes/genresRoutes');
const app = express();

// view engine setup
app.set('views', path.resolve(__dirname, './views'));
app.set('view engine', 'ejs');

app.use(session({
    secret : 'Este mensage es secreto',
    resave : false,
    saveUninitialized : false
}));
app.use(loggMiddleware)

app.use(express.static(path.resolve(__dirname, '../public')));

//URL encode  - Para que nos pueda llegar la información desde el formulario al req.body
app.use(express.urlencoded({ extended: false }));


app.use('/', indexRouter);
app.use(moviesRoutes);
app.use(genresRoutes);
app.use(userRoutes);
app.use(express.json());

app.listen('3001', () => console.log('Servidor corriendo en el puerto 3001'));
