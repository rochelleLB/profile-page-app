// Problem: We need a simple way to view a Team Treehouse users badge count and Javascript points from a web browser.
// Solution: Use node.js to perform the profile look up and serve our template via HTTP.

const router = require("./router");

//Create a web server
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((request, response) => {
  router.home(request, response);
  router.user(request, response);
  //response.end('Hello World\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
