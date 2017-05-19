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
    if (request.method === 'GET' && request.url ==='/') {
        console.log('successful request made by an user');

        fs.readFile('./index.html', function (err, data) {
            response.writeHead(200, {"Content-Type": "text/html"});
            response.write(data);
            response.end();
        });
        // response.writeHead(200, {"Content-Type": "text/html"});
        // fs.createReadStream("./index.html").pipe(response);
        // response.end();
    } else {
        console.log('unsuccessful request made by an user');
        send404Response(response);
    }
}


http.createServer(onRequest).listen(8080);
console.log("server is now starting");