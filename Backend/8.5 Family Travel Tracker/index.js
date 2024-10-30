import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "world",
  password: "#JenzPostgreSQL2024",
  port: 5432,
});
db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let currentUserId = 0;

let users = [
  { id: 1, name: "Angela", color: "teal" },
  { id: 2, name: "Jack", color: "powderblue" },
];

async function checkVisited() {
  const result = await db.query(
    "SELECT u.name, u.color, c.country_code, c.country_name " +
    "FROM visited_countries AS vc " +
    "JOIN users as u ON u.id = vc.user_id " + 
    "JOIN countries AS c ON c.id = vc.country_id " + 
    "WHERE u.id = $1;", [currentUserId]
  );
  let countries = [];
  result.rows.forEach((data) => {
    countries.push(data.country_code);
  });
  return countries;
}

async function getCurrentUser(){
  try{
    const result = await db.query(
      "SELECT * FROM users;"
    );
    users = result.rows;
  } catch(err){
    console.log(err);
  }
  console.log(currentUserId);

  return users.find((user)=> user.id === currentUserId);
}
app.get("/", async (req, res) => {
  var currentUser = await getCurrentUser();

  if(currentUser !== null){
    console.log(currentUser);
    console.log(currentUserId);
  }
  const countries = await checkVisited();
  res.render("index.ejs", {
    countries: countries,
    total: countries.length,
    users: users,
    color: currentUser?.color ?? "teal"
  });
});
app.post("/add", async (req, res) => {
  const input = req.body["country"];

  try {
    const result = await db.query(
      "SELECT id FROM countries WHERE LOWER(country_name) LIKE '%' || $1 || '%';",
      [input.toLowerCase()]
    );

    const data = result.rows[0];
    console.log(data);
    const country_id = data.id;
    try {
      await db.query(
        "INSERT INTO visited_countries (country_id, user_id) VALUES ($1, $2)",
        [country_id, currentUserId]
      );
      res.redirect("/");
    } catch (err) {
      console.log(err);
    }
  } catch (err) {
    console.log(err);
  }
});
app.post("/user", async (req, res) => {
  currentUserId = parseInt(req.body.user);
  if(req.body["add"]){
    res.render("new.ejs");
  } else{
    res.redirect("/");
  }
});

app.post("/new", async (req, res) => {

  //Hint: The RETURNING keyword can return the data that was inserted.
  //https://www.postgresql.org/docs/current/dml-returning.html
  var name = req.body["name"];
  var color = req.body["color"];

  try{
    const result = await db.query("INSERT INTO users (name, color) VALUES ($1,$2) RETURNING id", [name,color]);
    currentUserId = result.rows[0].id;
  } catch (err){
    console.error(err);
  }
  
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
