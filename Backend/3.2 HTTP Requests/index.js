import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res)=>{
    //console.log(req.rawHeaders);
    res.send("<h1>Hello</h1>");
})

app.get("/about", (req, res)=>{
    //console.log(req.rawHeaders);
    res.send("<h2>About Me</h2><p>My Name is Jenz</p>");
})

app.get("/contact", (req, res)=>{
    //console.log(req.rawHeaders);
    res.send("<h1>Number</h1><p>Yay</p>");
})

app.listen(port, ()=>{
    console.log(`Server running on port ${port}.`);
})