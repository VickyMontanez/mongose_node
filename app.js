import dotenv from "dotenv";
import express from "express";
import { conx } from "./db/atlas.js";

dotenv.config();
const app = express();

const config = JSON.parse(process.env.MY_SERVER);


app.listen(config,()=>{
    console.log(`http://${config.hostname}:${config.port}`)
});


let db = await conx();

/* //List all collections
const collections = await db.listCollections().toArray();
console.log(collections);

//How to know if a collection exists
const bandera = collections.some((collection => collection.name == "users"));
console.log(bandera);

//Create Collections
let res = await db.createCollection("siMor");
console.log(res); */

//Insert ONE Data to the Collection
let colleccion = db.collection("siMor");
const res = await colleccion.insertOne({
    name: "Vicky",
    surname: "Montañez",
    point: "jijijiji"
})
console.log(res); 