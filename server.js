// Simple Express Application Programming Interface
var express = require("express");
var morgan = require("morgan");
var http = require("http");
var apiRouter = require("./routes/api_route");
var {Devs} = require("./model/models");
var path = require("path");



// App instance
var app = express();
app.use(morgan("short"));
app.use(express.json());
app.set("json spaces", 4);

// Setting up static file
var staticPath = path.join(__dirname, "static",);
app.use("/static", express.static(staticPath));

var publicPath = path.join(__dirname, "public");
app.use("/public", express.static(publicPath));

// set app to use the api routes
app.use("/api/v1", apiRouter);

// Error message for bad route to resources
app.use(function(request, response){
    response.status(404);
    response.json("File not found!");
});

// API server 
http.createServer(app).listen(3000, function(){
    console.log("API server listening at port { 3000 }");
});
