const http = require("http");
const data = require("./data/inventory");

http.createServer(function(request, response) {

  if (request.url === "/") {
    response.writeHead(200, {"Content-Type": "text/json"});
    response.end(JSON.stringify(data));
  } else if (request.url === "/instock") {
    listInStock(response);
  }



}).listen(3000);

console.log("listening on port 3000");

function listInStock(response) {

  var inStock = data.filter(function(item) {
    return item.avail === "In stock";
  });

  response.end(JSON.stringify(inStock));

}
