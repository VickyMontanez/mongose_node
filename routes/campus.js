
import { Router } from "express";
import bodyParser from "body-parser";
import configGET from "../middleware/limit.js";

const appcampus = Router();

appcampus.get("/", configGET, (req, res)=>{
    res.send("Hola")
});

export default appcampus; 