import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "secrets",
  password: "#JenzPostgreSQL2024",
  port: 5432,
});

db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/login", (req, res) => {
  res.render("login.ejs");
});

app.get("/register", (req, res) => {
  res.render("register.ejs");
});

app.post("/register", async (req, res) => {
  const email = req.body.username;
  const password = req.body.password;

  try{
    const checkEmail = await db.query("SELECT * FROM users WHERE email = $1", [email]);

    if(checkEmail.rows.length > 0){
      res.send("Email already exists. Try logging in");
    } else{
      const result = await db.query("INSERT INTO users (email, password) VALUES ($1, $2)", [email, password]);
      res.render("secrets.ejs");
    }
  }catch(err){
    console.error(err);
  }
});

app.post("/login", async (req, res) => {
  const email = req.body.username;
  const password = req.body.password;

  try{
    const result = await db.query("SELECT * FROM users WHERE email = $1", [email]);

    if(result.rows.length === 0){
      res.send("Email does not exist. Please Register first.");
    } else{
      var user = result.rows[0];
      var storedPassword = user.password;
      
      if(storedPassword != password){
        res.send("Incorrect email or password.");
      } else{
        res.render("secrets.ejs");
      }
    }
  }catch(err){
    console.error(err);
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
