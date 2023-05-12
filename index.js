require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");
const routes = require("./routes/routes");
const connectToDb = require("./database/db.js");

const port = process.env.PORT;

connectToDb();
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded());
app.use(routes);

app.get("/home", function (req, res) {
  res.render("index");
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
