import dotenv from "dotenv";
import express from "express";
import { conx } from "./db/atlas.js";
import appcampus from "./routes/campus.js";

dotenv.config();
const app = express();

const config = JSON.parse(process.env.MY_SERVER);

app.use("/campus", appcampus)

app.listen(config,()=>{
    console.log(`http://${config.hostname}:${config.port}`)
});


/*
let db = await conx();

//List all collections
const collections = await db.listCollections().toArray();
console.log(collections);

//How to know if a collection exists
const bandera = collections.some((collection => collection.name == "users"));
console.log(bandera);

//Create Collections
let res = await db.createCollection("siMor");
console.log(res);

//Insert ONE Data to the Collection
let colleccion = db.collection("siMor");
const res = await colleccion.insertOne({
    name: "Vicky",
    surname: "Montañez",
    point: "jijijiji"
})
console.log(res); 

 //Insert Many Data to the Collection
 let colleccion = db.collection("siMor");
 const insertResult = await colleccion.insertMany([{ a: 1 }, { a: 2 }, { a: 3 }]);
 console.log('Inserted documents =>', insertResult);

// Find all data submitted to a collection 
let colleccion = db.collection("siMor");
const findResult = await colleccion.find({}).toArray();
console.log('Found documents =>', findResult); */