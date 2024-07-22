const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {

    const token = req.header('Authorization').replace('Bearer ', '');

    if(!token){
        return res.status(401).send("no token provided");
    }

    try{
        const decoded = jwt.verify(token, "jwt_secret");
        req.user = decoded;
        next();
    }catch(error){
        res.status(400).send("invalid token");
    }
}

module.exports = auth;