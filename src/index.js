import express from "express";
import handleGreeting from "./greeting.js";
import handleKanyeQuote from "./kanyeQuote.js";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("@index");
})

app.get('/hello/:user?', handleGreeting);

app.get('/kanye', handleKanyeQuote);

app.listen(port, () => {
  console.log("Sever listening on port ", port)
});