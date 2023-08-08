import express from "express";
import { conx } from "../db/atlas.js";
import { ObjectId } from "mongodb";
import { limitGrt } from "../middleware/limit.js";

const appcampus = express();
appcampus.use(express.json());

//Get ALL the Documents in the Collection
appcampus.get("/", limitGrt(), async (req, res) => {
    let db = await conx();
    let colleccion = db.collection("test");
    let result = await colleccion.find({}).toArray();
    res.send(result);
});

export default appcampus; 