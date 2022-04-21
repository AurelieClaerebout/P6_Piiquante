const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
    windowMs: 10 * 30 * 1000, 
    max: 10, 
    message: `Attention ! Trop de tentatives de connexion `  
});

module.exports = limiter;