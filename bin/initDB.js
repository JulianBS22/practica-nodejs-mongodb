'use strict';

const Anuncio = require('../models/Anuncio');
const connection = require('../lib/connectMongoose');

main().catch(err => console.log('Hubo un error', err));

async function main() {

  // inicializamos colección de agentes
  await initAnuncio();

  connection.close();

}

async function initAnuncio() {
  // borrar todos los documentos de la colección de agentes
  const deleted = await Anuncio.deleteMany();
  console.log(`Eliminados ${deleted.deletedCount} anuncios.`);

  // crear agentes iniciales
  const inserted = await Anuncio.insertMany([
    { nombre: 'Samsung', venta: true, precio:600 },
    { nombre: 'Bicicleta', venta: true, precio:300 }
  ]);
  console.log(`Creados ${inserted.length} anuncio`);
}