/**
 * Created by cyma on 5/18/2017.
 */


var http = require('http');
var fs = require('fs');

//404 response
function send404Response(response) {
    response.writeHead(404, {"Content-Type": "text/plain"});
    response.write("error 404: page not found");
    response.end();
}

//handle user request with an html page
function onRequest(request, response) {
    if (request.method == 'GET' && request.url =='/') {
        response.writeHead(200, {"Content-Type": "text/html"});
        fs.createReadStream("./index.html").pipe(response);
    } else {
        send404Response(response);
    }
}


http.createServer(onRequest).listen(8080);
console.log("server is now starting");