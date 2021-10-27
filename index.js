const express = require("express");
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");

const port = require('./config/express.js');
const handleGreeting = require("./greeting.js");
const authMiddleware = require("./middlewares/authMiddleware.js");
const key = require('./config/jwt.js');
const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
} = require('./controllers/users.js');

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

// app.get("/", authMiddleware, (req, res) => {
//   res.send("@index");
// })

// app.get('/hello/:user?', authMiddleware, handleGreeting);
console.log(handleGreeting)
app.get("/users", getAllUsers);
app.get("/user/:id", getUserById);
app.post("/users", createUser);
app.put("/user/:id", updateUser);
app.delete("/user/:id", deleteUser);

app.listen(port, () => {
  console.log("Sever listening on port ", port)
});