var express = require('express');
var router = express.Router();

const Anuncio = require('../models/anuncio');

/*
router.get('/', function(req, res) {
  const anuncios = [
    { nombre: 'Bicicleta', precio: 100 },
    { nombre: 'Muñeco chochon', precio: 200 },
    { nombre: 'Mobil', precio: 300 }
  ];

  res.render('index', { title: 'Mi sitio web', anuncio: anuncios });
});*/


/* GET home page. */
router.get('/', async function(req, res, next) {
  res.render('index', { title: 'Anuncios'});
  


  const anuncio = await Anuncio.find();
  res.locals.anuncio = anuncio;

});

module.exports = router;
