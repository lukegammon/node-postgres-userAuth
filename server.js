const express = require("express");
const app = express();

const PORT = process.env.PORT || 4000;

// Middleware

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/'));

// Routes
app.get("/", (req, res) => {
  res.render('login');
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
