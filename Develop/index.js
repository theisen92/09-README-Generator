const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");

// array of questions for user
const questions = [
  {
    type: "input",
    message: "What your README title?",
    name: "title",
  },
  {
    type: "input",
    message: "What is the description you want to inclued in your README",
    name: "descript",
  },
  {
    type: "input",
    message: "What are the installation instructions?",
    name: "install",
  },
  {
    type: "input",
    message: "What are the steps for usage?",
    name: "use",
  },
  {
    type: "list",
    message: "Select a license for your application.",
    name: "license",
    choices: ["Apache", "ISC", "Mozilla", "Perl", "Unlicense"],
  },
  {
    type: "input",
    message: "Any contributers to credit?",
    name: "credit",
  },
  {
    type: "input",
    message: "What tests do you have for your application?",
    name: "test",
  },
  {
    type: "input",
    message: `In case someone what's to reach out for additional questions,
      What is your email address?`,
    name: "email",
  },
  {
    type: "input",
    message: "    What is your GitHub username?",
    name: "git",
  },
];

// function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, "utf8", (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(`Your README was made - it is in the "gen-readme" folder!`);
  });
}

// function to initialize program
function init() {
  inquirer.prompt(questions).then(function (answer) {
    var mD = generateMarkdown(answer);
    writeToFile("./gen-readme/genREADME.md", mD);
  });
}

// function call to initialize program
init();
