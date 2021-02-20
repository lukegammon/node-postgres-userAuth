const express = require("express");
const app = express();

const PORT = process.env.PORT || 4000;

// Middleware

app.set('view engine', 'ejs');

// Routes
app.get("/", (req, res) => {
  res.render('index');
});

app.get("/users/register", (req, res) => {
  res.render('register');
});

app.get("/users/login", (req, res) => {
  res.render('login');
});

app.get("/users/dashboard", (req, res) => {
  res.render('dashboard', {user: "luke"});
});

app.listen(PORT, () => {
  console.log(`connected on port ${PORT}`);
});
