const db = require("../models");

module.exports.getAllUsers = async (req, res) => {
  try {
    const allUsers = await db.User.findAll();
    res.send(allUsers);
  }
  catch (err) {
    console.error(err);
    res.status(500).send("Something went wrong");
  }
};

module.exports.getUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await db.User.findByPk(id);
    res.send(user);
  }
  catch (err) {
    console.error(err);
    res.status(500).send("Something went wrong");
  }
};

module.exports.createUser = async (req, res) => {
  const { email, firstName, lastName } = req.body;
  try {
    const newUser = await db.User.create({
      email,
      firstName,
      lastName
    });

    res.status(201).send(newUser);
  }
  catch (err) {
    console.error(err);
    res.status(500).send("Something went wrong");
  };
};

module.exports.updateUser = async (req, res) => {
  const { id } = req.params;
  const newData = req.body;
  try {
    const updatedSuccesfully = await db.User.update(newData, {
      where: {
        id
      }
    });
    res.send({ updatedSuccesfully });
  }
  catch (err) {
    console.error(err);
    res.status(500).send("Something went wrong");
  }
};

module.exports.deleteUser = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedSuccesfully = await db.User.destroy({
      where: {
        id
      }
    });
    res.send({ deletedSuccesfully });
  }
  catch (err) {
    console.error(err);
    res.status(500).send("Something went wrong");
  }
};