const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send(
    ` <html>
        <head>
          <title>User Page 1</title>
        </head>
        <body>
          <h3>Welcome to the User Page 2!</h3>
        </body>
      </html>
    `
  );
});

app.get("/user/:id", (req, res) => {
  const userName = req.params.id || "Dear guest"; // Default to "Guest" if no name is provided.
  res.send(
    `<html>
        <head>
          <title>custom profil</title>
        </head>
        <body>
          <h3>Hello Dear ${userName} !</h3>
        </body>
      </html>
    `
  );
});

app.listen(3000, () => {
  console.log("http://localhost:3000");
});
