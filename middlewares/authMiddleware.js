const jwt = require("jsonwebtoken");

const { key } = require('../config/jwt.js');

module.exports.authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization
  if (authHeader) {
    const jwtToken = authHeader.replace("Bearer ", "");
    try {
      console.log(key)
      const isValid = jwt.verify(jwtToken, key);
      next();
    }
    catch (err) {
      console.log(err)
      res.status(403).send("Invalid token");
    }
  }
  res.send(403).send("No auth header.")
};