
import { Router } from "express";
import bodyParser from "body-parser";

const appcampus = Router();

appcampus.get("/", (req, res)=>{
    res.send("Hola")
});

export default appcampus; 