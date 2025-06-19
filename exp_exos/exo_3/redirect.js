const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.status(200).send(`<h3>Welcome to the root route ('/') !</h3>`);
});

// Redirect to /home
app.get("/go-home", (req, res) => {
  res.status(302).redirect("/home");
});

app.get("/home", (req, res) => {
  res.status(200).send(`
    <h1>Welcome to the home Page!</h1>
    <p>This page is served after a redirect.</p>
  `);
});

// 404 route
app.use((req, res) => {
  res.status(404).send(`
    <h3>404 Not Found</h3>
    <p>The page you are looking for does not exist.</p>
  `);
});

app.listen(PORT);
