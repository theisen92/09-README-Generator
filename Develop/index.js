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
function writeToFile(fileName, data) {}

// function to initialize program
function init() {
  inquirer.prompt(questions).then(function (answer) {
    var mD = generateMarkdown(answer);
    console.log(mD);
  });
}

// function call to initialize program
init();
