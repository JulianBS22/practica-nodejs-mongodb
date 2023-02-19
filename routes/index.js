const express = require('express');
const router = express.Router();
const Anuncio = require('../models/Anuncio');

router.get('/', async function(req, res, next) {
  try {
    const anuncios = await Anuncio.find();
    res.locals.anuncios = anuncios;
    res.render('index', { title: 'Anuncios', anuncios });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
