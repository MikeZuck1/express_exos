const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.status(200).send("Welcome to the root path!");
});

app.get("/greet", (req, res) => {
  if (req.query.name === "Sarah") {
    res.status(200).send(`Hello, ${req.query.name}!`);
  } else {
    res.status(400).send(`Hello, Stranger}!`);
  }
});

app.use((req, res) => {
  res.status(404).send("This path doesn't exist!");
});

app.listen(8000);
