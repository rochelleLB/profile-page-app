const fs = require("fs");

const mergeValues = (values, content) => {
  // Cycle over the keys
  for(let key in values){
        //Replace all {{key}} with the values from the values object
        content = content.replace("{{" + key + "}}", values[key]);
  }
  //return merged content
  return content;
};

const view = (templateName, values, response) => {
  //Read from the template filesa
  let fileContents = fs.readFileSync("./views/" + templateName + ".html", {encoding: "utf8"});
  // Insert values into the Content
  fileContents = mergeValues(values, fileContents);
  //Write out the response
  response.write(fileContents);
};

module.exports.view = view;
