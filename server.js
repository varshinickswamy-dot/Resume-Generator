const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("form");
});

app.post("/generate", (req, res) => {
  res.render("resume", { data: req.body });
});

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});