const express = require('express');
const router = express.Router();
const Anuncio = require('../models/Anuncio');
const Tags = require ('../models/Tags');

router.get('/', async function(req, res, next) {
  try {
    const anuncios = await Anuncio.find();
    const tags = await Tags.find();
    res.locals.anuncios = anuncios;
    res.locals.tags = tags;
    res.render('index', { title: 'NodePop', Anuncio: anuncios, Tags:tags });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
