const Profile = require("./profile.js");
const renderer = require("./renderer.js")

//Handle HTTP route GET / and POST / ie Home
const homeRoute = (request, response) => {

  //if url  === "/" && GET
  if(request.url === "/"){
    //show search field
    response.writeHead(200, {'Content-Type': 'text/plain'});
    renderer.view("header", {}, response);
    renderer.view("search", {}, response);
    renderer.view("footer", {}, response);
    response.end();
  //if url === "/" && POST
    //redirect to /:username
  };
};

//Handle HTTP route GET /:username
const userRoute = (request, response) => {
  //if url === "/..."
  let username = request.url.replace("/","");
  if(username.length > 0){
    response.setHeader('Content-Type', 'text/plain');
    renderer.view("header", {}, response);

    //get JSON from teamtreehouse
    const studentProfile = new Profile(username);
    //on "end"
    studentProfile.on("end", (profileJSON) => {
      //show profile

      //Store the values we need
      const values = {
        avatarURL: profileJSON.gravatar_url,
        username: profileJSON.profile_name,
        badges: profileJSON.badges.length,
        javascriptPoints: profileJSON.points.JavaScript
      }
      //simple response
      renderer.view("profile", values, response);
      renderer.view("footer", {}, response);
      response.end();
    });
    //on "error"
    studentProfile.on("error", (error) => {
      //show console.error();
      renderer.view("error", {errorMessage: error.message}, response);
      renderer.view("search", {}, response);
      renderer.view("footer", {}, response);
      response.end();
    });
  };
};

module.exports.home = homeRoute;
module.exports.user = userRoute;
