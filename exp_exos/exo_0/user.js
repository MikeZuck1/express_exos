const express = require("express");
const app = express();

app.get("/user/:id", (req, res) => {
  const userName = req.params.id || "Dear guest"; // Default to "Guest" if no name is provided
  res.send(`<h3>Hello Dear ${userName} !</h3>`);
});

app.listen(3000, () => {
  console.log("http://localhost:3000");
});
