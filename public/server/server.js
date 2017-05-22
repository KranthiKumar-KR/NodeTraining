/**
 * Created by cyma on 5/18/2017.
 */



var http = require('http');
var movieDetails = require("../objectfactory/movieDetails");

function onRequest(request, response) {
    console.log("a user request is made" + request.url);
    response.writeHead(200, {"Context-Type": "text/plain"});
    //response.write(movieDetails.toString());
    response.write("<html> <head> <title>Hi folks</title> <h1>Hi this is a server response running on node server</h1></head> <body><p>hi I am trying to send a html response on node js server</p></body></html>");
    response.write("hello from shanker");
    response.end();

}

http.createServer(onRequest).listen(8080);
console.log("server is now running....");