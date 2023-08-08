import { rateLimit } from "express-rate-limit";

export let limitGrt = ()=>{
    return rateLimit({
        windowMs: 30 * 1000,
        max: 5,
        standardHeaders: true,
        legacyHeaders: false,
        skip: (req, res)=>{
            if(req.headers["content-length"]>91){
                res.status(413).send({
                    status: 413,
                    message: "El tamaño no es correcto :("
                });
                return true;
            }
        },
        message: (req, res)=>{
            res.status(429).send({
                status: 429,
                message: "Demasiados intentos :("
            })
        }
    })
}

export default limitGrt; 