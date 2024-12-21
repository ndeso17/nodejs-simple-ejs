const express = require("express");
const app = express();
const port = 3000;

// Set EJS sebagai view engine
app.set("view engine", "ejs");

// Middleware untuk file statis
app.use(express.static("public"));

// Route ke halaman utama
app.get("/", (req, res) => {
  res.render("index", {
    title: "Halaman Utama",
    message: "Selamat datang di EJS!",
  });
});

// Route ke halaman About
app.get("/about", (req, res) => {
  res.render("about", {
    title: "Tentang Kami",
    description: "Ini adalah halaman tentang kami.",
  });
});

// Jalankan server
app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
