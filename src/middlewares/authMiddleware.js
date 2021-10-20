import jwt from "jsonwebtoken";

import { key } from '../config/jwt.js';

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization
  if (authHeader) {
    {
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
  }
};

export default authMiddleware;