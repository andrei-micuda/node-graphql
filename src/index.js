import express from "express";
import jwt from "jsonwebtoken";
import bodyParser from "body-parser";

import { port } from './config/express.js';
import handleGreeting from "./greeting.js";
import authMiddleware from "./middlewares/authMiddleware.js";
import { key } from './config/jwt.js';

const app = express();

const findUser = (username, password) => {
  if (username === 'admin' && password === "Pass123!") {
    return username;
  } else {
    return null;
  }
}

app.use(bodyParser.json());

app.post("/login", ({ body }, res) => {
  const username = body.username;
  const password = body.password;
  if (findUser(username, password)) {
    console.log(key)
    const jwtToken = jwt.sign({}, key);
    res.send(jwtToken);
  } else {
    res.status(401);
  }
});

app.get("/", authMiddleware, (req, res) => {
  res.send("@index");
})

app.get('/hello/:user?', authMiddleware, handleGreeting);

app.listen(port, () => {
  console.log("Sever listening on port ", port)
});