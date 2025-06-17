const express = require("express");
const app = express();
const path = require("path");

app.use(express.urlencoded({ extended: true }));

// View engine setup
app.set("view engine", "ejs");

// Set the views directory
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  return res.status(200).send("<h3>Send message test</h3>");
});

app.get("/form", (req, res) => {
  return res.status(200).render("form");
});

app.post("/submit", (req, res) => {
  return res.status(200).render("submit", { name: req.body.name });
});

app.use((req, res) => {
  res.status(404).send("<h3>Page not found</h3>");
});

app.listen(3000);
