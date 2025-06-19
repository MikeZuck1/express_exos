const express = require("express");
const app = express();

app.get("/", (req, res) => {
  const url = "http://localhost:3000/home";
  res.send(`<h3>Hello Dear, tap URL: ${url} in url search bar.</h3>`);
});

app.get("/home", (req, res) => {
  res.send(
    `<h1>Welcome to Express!</h1>
    <p>This is the home page served with static HTML.</p>`
  );
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
