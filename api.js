const http = require("http");
const data = require("./data/inventory");

http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/json"});
  response.end(JSON.stringify(data));

}).listen(3000);

console.log("listening on port 3000");
