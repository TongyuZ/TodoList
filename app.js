const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static('./public'));
let day = "";
let items = [];

app.get("/", function(req, res){
    let currentDay = new Date();
    var options = { weekday: 'long', month: 'short', day: 'numeric' };
    var day = currentDay.toLocaleDateString("en-US", options)
    res.render("list", {KindDay: day, newitem: items});
    
});

app.post("/", function(req, res){
    var b = req.body.newLine;
    items.push(b);
    res.redirect("/");
})


app.listen(3000,function(){
    console.log("Log into 3000")
})