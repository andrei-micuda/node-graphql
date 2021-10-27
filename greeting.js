module.exports.handleGreeting = ({ params, country }, res) => {
  if (!params.user) {
    res.send("Hello World!");
  }
  else {
    if (country === "Romania") {
      res.send(`Salut ${params.user}!`);
    }
    else {
      res.send(`Hello ${params.user}!`);
    }
  }
}