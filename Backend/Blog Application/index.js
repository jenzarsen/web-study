import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

const d = new Date();
var currentYear = d.getFullYear();

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/submit", (req, res) => {
  

});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});