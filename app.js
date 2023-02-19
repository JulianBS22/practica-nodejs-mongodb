const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const anunciosAPIRouter = require('./routes/api/anuncios');
const { connect } = require('./lib/connectMongoose');

const app = express();

// Conexión a la base de datos
connect();

// Configuración del motor de plantillas
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Middlewares de aplicación
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Rutas del API de anuncios
app.use('/api/anuncios', anunciosAPIRouter);

// Rutas del sitio web
app.use('/', indexRouter);
app.use('/users', usersRouter);

// Manejador de errores 404
app.use(function(req, res, next) {
  next(createError(404));
});

// Manejador de errores
app.use(function(err, req, res, next) {
  // Configuración de variables locales para el motor de plantillas
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // Renderización de la página de error
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;