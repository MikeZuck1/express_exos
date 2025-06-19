const express = require("express");
const app = express();
const path = require("path");

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.send("<h3>Static File Serving !</h3>");
});

app.use((req, res) => {
  res
    .status(404)
    .send("<h3>Static File Serving failed : 404 error -- Page not found</h3>");
});

app.listen(3000);
