var express = require("express"),
    app     = express();
    


app.get("/", function(req, res){
   res.send("Welcome!"); 
});


app.listen(process.env.PORT, process.env.IP, function(req, res){
    console.log("Server successfully running...");
});