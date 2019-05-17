const Profile = require("./profile.js");

//Handle HTTP route GET / and POST / ie Home
const homeRoute = (request, response) => {

  //if url  === "/" && GET
  if(request.url === "/"){
    //show search field
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/plain');
    response.write("Header\n");
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
    response.write("Header\n");

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
      response.write(values.username + " has " + values.badges + " badges \n");
      response.end("Footer\n");
    });
    //on "error"
    studentProfile.on("error", (error) => {
      //show console.error();
      response.write(error.message + "\n");
      response.end("Footer\n");
    });
  };
};

module.exports.home = homeRoute;
module.exports.user = userRoute;
