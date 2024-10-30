import express, { query } from "express";
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

let visitedCountries = [];

async function checkVisitedCountries(){
  visitedCountries = [];
  const result = await db.query("SELECT country_code FROM visited_countries");
  result.rows.forEach((country) => {
    visitedCountries.push(country.country_code);
  });

  //console.log(result.rows);
}


app.get("/", async (req, res) => {
   await checkVisitedCountries();
   res.render("index.ejs", { countries: visitedCountries, total : visitedCountries.length});
});

app.post("/add", async(req,res) => {
  const input = req.body["country"];
  try{
    const result = await db.query("SELECT country_code FROM countries WHERE LOWER(country_name) LIKE '%' || $1 || '%'", [input.toLowerCase()]);

    const data = result.rows[0];
    const countryCode = data.country_code;

    try{
      await db.query("INSERT INTO visited_countries (country_code) VALUES ($1)", [countryCode]);
      res.redirect("/");
    } catch(err){
      console.error(err);
      await checkVisitedCountries();
      res.render("index.ejs", { countries: visitedCountries, total : visitedCountries.length, error : "Country already exists in database."});
    }
   


  } catch(err){
    console.error(err);
    await checkVisitedCountries();
    res.render("index.ejs", { countries: visitedCountries, total : visitedCountries.length, error : "Country Name does not exists."});
  }


 
});


app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
