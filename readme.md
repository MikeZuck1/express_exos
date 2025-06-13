# 🚀 Express.js – Exercise Series

---

## 🧩 Exercises

### 1. Hello, User!
**Goal**: Use dynamic route parameters.  
- Route: `/hello/:name`  
- Response: `Hello, <name>!`  
- Example: `/hello/Mike` → `Hello, Mike!`

---

### 2. Product Details
**Goal**: Handle dynamic routes and return JSON.  
- Route: `/product/:id`  
- If `id === 123`, respond with a JSON product object.  
- Else, respond with a 404 message.

---

### 3. Send Simple HTML
**Goal**: Respond with static HTML using `res.send()`.  
- Route: `/home`  
- Response: `<h1>Welcome to Express!</h1>` with a short message below.

---

### 4. Temporary Redirect (302)
**Goal**: Perform a route redirection.  
- Route: `/go-home`  
- Redirect to `/home` using `res.redirect()`.

---

### 5. Serve an HTML Form
**Goal**: Serve a basic HTML form.  
- Route: `/form`  
- Render a form with one text input (e.g., name) and a submit button.  
- Submit to `/submit`.

---

### 6. Handle POST Form Submission
**Goal**: Receive data from a form using `express.urlencoded`.  
- Route: `POST /submit`  
- Respond with: `Thanks, <name>!`

---

### 7. Query String Greeting
**Goal**: Read query parameters from the URL.  
- Route: `/greet?name=Sarah`  
- If `name` is present, say `Hello, Sarah!`  
- If not, say `Hello, Stranger!`

---

### 8. Return JSON Data
**Goal**: Respond with a list of users.  
- Route: `/users`  
- Return an array of at least 3 user objects in JSON.

---

### 9. Static File Serving
**Goal**: Serve a file from the public folder.  
- Route: `/public/file.txt`  
- Create a `public` folder and serve a sample `.txt` file.  
- Use `express.static()` middleware.

---

### 10. Basic 404 Middleware
**Goal**: Handle unknown routes.  
- Any unknown route should return: `404 – Page not found`  
- Use `app.use()` with a custom 404 handler.

---

## ✅ Bonus Ideas (optional)
- Add a logger that logs the request method + URL.
- Customize the 404 page with HTML.
- Add an `app.set()` example to define view folders or app name.
- Try using a simple template engine like EJS or Pug.

---