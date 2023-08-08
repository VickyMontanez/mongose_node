import { ObjectId } from "mongodb";
import {conx} from "../db/atlas.js"
import { limitGrt } from "../middleware/limit.js";
import { Router } from "express";
const appCampus = Router();

appCampus.get("/", limitGrt(), async(req,res)=>{
    if(!req.rateLimit) return;
    res.send("Hola :)")
});

export default appCampus;