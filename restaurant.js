var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var reservations = [];
var waitlist = [];

app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/reservations", function(req, res){
    res.sendFile(path.join(__dirname, "reservations.html"));
});

app.get("/tables", function(req, res){
    res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/api/reservations", function(req, res){
    return res.json(reservations);
});

app.get("/api/waitlist", function(req, res){
    return res.json(waitlist);
});

app.post("/api/reservations", function(req,res){

    var newUser = req.body;
    console.log("Adding to reservations: \n" + newUser);
    reservations.push(newUser);
    console.log(reservations);

});

app.post("/api/waitlist", function(req,res){

    var newUser = req.body;
    console.log("Adding to waitlist: \n" + newUser);
    waitlist.push(newUser);

});


app.listen(PORT, function(){
    console.log("App listening on PORT" + PORT);
});
