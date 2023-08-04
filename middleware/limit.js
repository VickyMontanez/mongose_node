import rateLimit from 'express-rate-limit';

let configGET = rateLimit({
        windowMs: 30 *1000,
        max: 5,
        message: {status: 429 , message: "Superó la cantidad de peticiones"}
        /* standardHeaders: true,
        legacyHeaders: false */
})

export default configGET; 