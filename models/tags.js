'use strict';
const mongoose = require('mongoose');

const tagsSchema = new mongoose.Schema({
    nombre:{type: String},
    descripcion: String,}
);

tagsSchema.statics.lista = function(filtro, skip, limit, sort, fields) {
    const query = Tags.find(filtro); // thenables
    query.skip(skip);
    query.limit(limit);
    query.sort(sort);
    query.select(fields);
    return query.exec();
    };

const Tags = mongoose.model('Tags', tagsSchema);

module.exports = Tags;