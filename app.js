var express     = require("express"),
    app         = express(),
    bodyParser  = require("body-parser"),
    mongoose    = require("mongoose"); 
    

mongoose.connect("mongodb://localhost/project1"); //will try to find project1 db - Won't find it, thus will create it
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended: true}));


app.get("/", function(req, res){
   res.render("index"); 
});

app.get("/posts", function(req, res){
   res.render("posts"); 
});

app.post("/posts", function(req, res){
    
});


app.get("*", function(req, res) {
    res.send("Page not found!");
})

app.listen(process.env.PORT, process.env.IP, function(req, res){
    console.log("Server is now running!");
});
    