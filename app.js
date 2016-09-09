var express     = require("express"),
    app         = express(),
    bodyParser  = require("body-parser"),
    mongoose    = require("mongoose"); 
    

mongoose.connect("mongodb://localhost/project1"); //will try to find project1 db - Won't find it, thus will create it
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

var postSchema = new mongoose.Schema({
   title: String,
   content: String,
   date: {type: Date, default: Date.now }
});
var Post = mongoose.model("Post", postSchema);


app.get("/", function(req, res){
   Post.find({}, function(err, allPosts){
       if(err) {
           console.log(err);
       }
       else {
           res.render("index", {posts: allPosts}); 
       }
   })
});

app.get("/posts", function(req, res){
   res.render("posts"); 
});

app.post("/", function(req, res){
    var title = req.body.title;
    var content = req.body.content;
    var newPost = {title: title, content: content};
    Post.create(newPost, function(err, newlyCreated){
       if(err) {
           console.log("err");
       } 
       else {
           res.redirect("/");
       }
    });
    
});


app.get("*", function(req, res) {
    res.send("Page not found!");
})

app.listen(process.env.PORT, process.env.IP, function(req, res){
    console.log("Server is now running!");
});
    