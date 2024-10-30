const fs = require("fs");

replaceText("Hello from Node JS!");

fs.readFile("message.txt", 'utf8', (err, data) => {
    if(err) throw err;
    replaceText("Hello from Jenz!");
});


function replaceText(text){
    fs.writeFile("message.txt", text, (err) =>{
        if(err) throw err;
        console.log(text);
    })
}