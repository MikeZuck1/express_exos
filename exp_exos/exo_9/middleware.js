const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("<h3>Welcome to basic 404 Middleware exo!</h3>");
});

app.use((req, res) => {
  res.status(404).send("<h3>Middleware: 404 error -- Page not found</h3>");
});

app.listen(3000);