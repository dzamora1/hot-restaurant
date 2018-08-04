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

app.post("/api/reservations", function(req,res){

    var newUser = req.body;
    console.log(newUser);

    if(reservations.length < 5){

        reservations.push(newUser)

    }else{

        waitlist.push(newUser);

    }

})

app.listen(PORT, function(){
    console.log("App listening on PORT" + PORT);
});
