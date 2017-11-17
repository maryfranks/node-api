const http = require("http");
const data = require("./data/inventory");

http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end("Hello World");
}).listen(3000);

console.log("listening on port 3000");
