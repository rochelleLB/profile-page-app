// Problem: We need a simple way to view a Team Treehouse users badge count and Javascript points from a web browser.
// Solution: Use node.js to perform the profile look up and serve our template via HTTP.

//1. Create a web server
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((request, response) => {
  homeRoute(request, response)
  //response.end('Hello World\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
//2. Handle HTTP route GET / and POST / ie Home
const homeRoute = (request, response) => {

  //if url  === "/" && GET
  if(request.url === "/"){
    //show search field
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/plain');
    response.write("Header\n");
    response.write("Search\n");
    response.end("Footer\n")
  };


  //if url === "/" && POST
    //redirect to /:username

};


//3. Handle HTTP route GET /:username
  //if url === "/..."
    //GET JSON from Treehouse
      //on the "end"
        //show the profile
      //on "error"
        //show error
//4. Function that handles the reading of filesa and merge in values.
  //read from file and get a string
    //merge values into string
