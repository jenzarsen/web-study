
import express from "express"
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

var weekdayText = "It's a weekday, it's time to work hard!";
var weekendText = "It's the weekend, it's time to have fun!";



function getDayText(){
    const d = new Date();
    let day = d.getDay();

    var text = "";
    text = day !==0 && day !== 6? weekdayText : weekendText;
    console.log(text);
    return text;
}


app.get("/", (req, res) => {
  res.render(__dirname+"/views/index.ejs",
    {dayText: getDayText()}
  );
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
