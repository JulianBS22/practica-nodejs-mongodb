'use strict';
const mongoose = require('mongoose');

//mongoose.Promise = global.Promise;


const anuncioSchema = new mongoose.Schema({
    nombre:{type: String},
    descripcion: String,
    venta: { type: Boolean},
    precio: { type: Number},
    foto: String,
    tags: { type: [String]}
});

anuncioSchema.statics.lista = function(filtro, skip, limit, sort, fields) {
    const query = Anuncio.find(filtro); // thenables
    query.skip(skip);
    query.limit(limit);
    query.sort(sort);
    query.select(fields);
    return query.exec();
  }

//Crear el modelo
const Anuncio = mongoose.model('Anuncio', anuncioSchema);

module.exports = Anuncio;