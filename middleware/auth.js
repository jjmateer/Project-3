const jwt = require("jsonwebtoken");

function auth(req, res, next) {
    const token = req.header('x-auth-token');
    //Check for token
    if (!token) res.json({ msg: "auth denied" });

    try {
        //Verify token
        const decoded = jwt.verify(token, config.get("jwtSecret"));
        //Add user from payload
        req.user = decoded;
        next();
    } catch (e) {
        res.json({msg: "Token invalid"})
    }
}

module.exports = auth; 