var express = require("express"),
    app     = express(),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose"),
    mongo = require("mongodb");
    

app.use(bodyParser.urlencoded({extended: true}));

    
var userSchema = new mongoose.Schema({
    username: String,
    password: String
});

var User = mongoose.model("User", userSchema);
    

var commentSchema = new mongoose.Schema({
   text: String,
   author: {
       id: {
           type: mongoose.Schema.Types.ObjectId,
           ref: "User"
       },
       username: String
   }
});

var Comment = mongoose.model("Comment", commentSchema);



var postSchema = new mongoose.Schema({
    title: String,
    image: String,
    body: String,
    author: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        username: String
    },
    comments: [
        {
            types: mongoose.Schema.Types.ObjectId,
            ref: "Comment"
        }
    
    ]
});
        
var Post = mongoose.model("Post", postSchema);


app.set("view engine", "ejs");


app.get("/", function(req, res){
   res.render("index");
});


app.listen(process.env.PORT, process.env.IP, function(req, res){
    console.log("Server successfully running...");
});