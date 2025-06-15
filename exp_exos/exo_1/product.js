const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("<h3>Welcome to the Product Page!</h3>");
});

app.get("/product", (req, res) => {
  res.send("<h3>Use a good url !</h3><p>Example: /product/123</p>");
});

app.get("/product/:id", (req, res) => {
  const productId = req.params.id;
  
  if (productId === "123") {
    return res.status(200).json({
      productId: "123",
      name: "Product 123",
      price: 19.99,
      inStock: true,
      message: "Product found successfully!",
    });
  } else {
    return res.status(404).json({
      error: "Product not found",
      productId: productId,
      price: null,
      inStock: false,
      message: "Please check the product ID and try again.",
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
