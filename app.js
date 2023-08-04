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

//List all collections
const collections = await db.listCollections().toArray();
console.log(collections);
