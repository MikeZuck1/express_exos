const express = require("express");
const app = express();
const data = require("./data/users.json");

app.get("/", (req, res) => {
  return res.status(200).send(
    `<h3>Users DATA API</h3>
      <p>Use the endpoint <code>/users</code> to get the users data in <code>JSON</code> format.</p>`
  );
});

app.get("/users", (req, res) => {
  res.status(200).json(data);
});

app.use((req, res) => {
  res
    .status(404)
    .send("<h3>Users DATA failed : 404 error -- Page not found</h3>");
});

app.listen(3000);
