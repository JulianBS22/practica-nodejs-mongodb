const express = require('express');
const { routes, render } = require('../../app');
const router = express.Router();
const Anuncio = require('../../models/Anuncio');

//GET Api anuncios

router.get('/', async (req, res, next) => {
    try {
  
      // filtros
      const filterByName = req.query.nombre;
      const filterByPrecio = req.query.precio;
      const filterByTags = req.query.tags;
      const filterByState = req.query.venta;
      
      // paginación
      const skip = req.query.skip;
      const limit = req.query.limit;
      // ordenar
      const sort = req.query.sort;
      // selección de campos
      const fields = req.query.fields;

    const filtro = {};

    if (filterByName) {
      filtro.nombre = new RegExp('^' + filterByName);
    }

    if (filterByPrecio) {
      filtro.precio = filterByPrecio;
    }

    if (filterByTags) {
        filtro.tags = filterByTags;
    }
    
      
    if (filterByState) {
        filtro.venta = filterByState;
    }
    
    const anuncios = await Anuncio.lista(filtro, skip, limit, sort, fields);

    res.json({ results: anuncios });
    
  } catch (error) {
    next(error);
  }
});

module.exports = router;