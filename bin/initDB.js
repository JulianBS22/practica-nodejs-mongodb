'use strict';
const Tags = require ('../models/Tags')
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
  const deletedTags = await Tags.deleteMany();
  console.log(`Eliminados ${deletedTags.deletedCount} anuncios.`);

  // crear agentes iniciales
  const inserted = await Anuncio.insertMany([
    {
      "nombre": "Bicicleta",
      "descripcion": "Una magnífica bicicleta de montaña apenas sin uso.",
      "venta": true,
      "precio": 230,
      "foto": "bici.jpg",
      "tags": [ "lifestyle", "motor"]
      },
      {
      "nombre": "IPhone",
      "descripcion": "Busco un Iphone a buen precio que no tenga la pantalla demasiado arañada.",    
      "venta": false,
      "precio": 50.00,
      "foto": "iphone.jpg",
      "tags": [ "lifestyle", "mobile"]
      },
      {
      "nombre": "Princesa Peach",
      "descripcion": "Una réplica de este famoso personaje de Super Mario. Ideal para coleccionistas.",
      "venta": true,
      "precio": 25,
      "foto": "ppeach.jpg",
      "tags": [ "lifestyle"]
      },
      {
      "nombre": "Juego de herramientas",
      "descripcion": "Por cese de empresa, vendo este pack de herramientas. Urge.",    
      "venta": true,
      "precio": 45,
      "foto": "herramientas.jpg",
      "tags": [ "work"]
      },
      {
      "nombre": "Maquinilla de afeitar",
      "descripcion": "Busco una maquinilla eléctrica para peluquería de caballero.",
      "venta": false,
      "precio": 65,
      "foto": "maquinilla.jpg",
      "tags": [ "lifestyle", "work"]
      },
      {
      "nombre": "Cargadores Samsung",
      "descripcion": "Se venden cargadores de teléfono Samsung para todas sus versiones. ¡Pregúntame por la tuya!",    
      "venta": true,
      "precio": 15,
      "foto": "samsung.jpg",
      "tags": [ "lifestyle", "mobile"]
      }
  ]);


  const insertedTags = await Tags.insertMany ([
    {
      "nombre": "work",
      "descripcion": "Productos relacionados con el trabajo."
      },
      {
      "nombre": "lifestyle",
      "descripcion": "Productos cotidianos del día a día."
      },
      {
      "nombre": "motor",
      "descripcion": "Todo sobre el mundo del motor."
      },
      {
      "nombre": "mobile",
      "descripcion": "Móviles y accesorios de telefonía"
      }
  ])

  console.log(`Creados ${inserted.length} Anuncio`);
  console.log(`Creados ${insertedTags.length} Anuncio`);
  console.log(inserted)
}