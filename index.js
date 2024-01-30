// This adds all needed packages for my application!
const inquirer = require('inquirer');
const fs = require('fs');
const generateLogo = require('./lib/generateLogo'); 

// This asks the user questions needed for this application to generate the logo!
const questions = [
    // This prompts the user for a shape, where the user 
    // is presented with a list of shapes to choose from!
    {
        type: "list",
        message: "What shape will your SVG logo have?",
        name: "shape",
        choices: [
            "Triangle",
            "Square",
            "Circle"
        ]
    },
    // This prompts the user for a color of the logo shape, 
    // where the user can enter a color keyword OR a hexadecimal number! 
    {
        type: "input",
        message: "What color will your SVG logo have?",
        name: "shape_color"
    },
    // This prompts the user for text up to three characters 
    // where the SVG logo will display! 
    {
        type: "input",
        message: "Type in a character set of up to 3 letters that your SVG logo will display.",
        name: "text"
    },
    // This prompts the user for the text color,
    // where the user can enter a color keyword OR a hexadecimal number
    {
        type: "input",
        message: "What color will the text in your SVG logo have?",
        name: "text_color"
    },
];

// When the user answers all the prompts, this function creates a SVG file 
// containing the SVG logo in a file named "logo.svg"
function writeToFile(fileName, content) {
    fs.writeFile(fileName, content, function (error) {
      if (error) {
        return console.log(error);
      }
      console.log('Generated logo.svg');
    });
  }
  

// This function initialize app
function init() {
    inquirer.prompt(questions).then(function (data) {
      const fileName = 'logo.svg';
      const logoContent = generateLogo(data);
      writeToFile(fileName, logoContent);
    });
  }

// This function call calls the init function to initialize app
init();