const fs = require("fs");

const view = (templateName, values, response) => {
  //Read from the template filesa
  const fileContents = fs.readFileSync("./views/" + templateName + ".html");
  // Insert values into the Content
  
  //Write out the response
  response.write(fileContents);
};

module.exports.view = view;
