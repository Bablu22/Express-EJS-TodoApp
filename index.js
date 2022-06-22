const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set("view engine", "ejs");
app.use(express.static("public"));
const todoArr = [];

app.get("/", (req, res) => {
  res.render("index", { todo: todoArr });
});
app.get("/contact", (req, res) => {
  res.render("contact", { todo: todoArr });
});

app.post("/", (req, res) => {
  const data = req.body.name;
  todoArr.push(data);
  res.redirect("/");
});

app.listen(3000, () => {
  console.log("Server is running");
});
