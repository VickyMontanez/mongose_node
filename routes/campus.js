import express from "express";
import { conx } from "../db/atlas.js";
import { ObjectId } from "mongodb";
import { limitGrt } from "../middleware/limit.js";

const appcampus = express();
appcampus.use(express.json());

//Get ALL the Documents in the Collection
appcampus.get("/", limitGrt(), async (req, res) => {
    if(!req.rateLimit) return;
    let db = await conx();
    let colleccion = db.collection("test");
    let result = await colleccion.find({}).toArray();
    res.send(result);
});

//Post a Document into a Collection
appcampus.post("/", async (req, res) => {
    try {
        const { id, name, surname, age } = req.body;
        if (!id || !name || !surname || !age) {
            return res.status(400).json({ error: 'Missing required fields' });
        };
        const db = await conx();
        const collection = db.collection('test');
        const result = await collection.insertOne({
            _id: new ObjectId(),
            id: id,
            name: name,
            surname: surname,
            age: age,
        });
        res.status(201).json(result);
    } catch (error) {
        console.error('Error inserting data:', error);
        res.status(500).json({ error: 'An error occurred' });
    }
});

export default appcampus; 