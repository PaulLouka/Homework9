const fs = require("fs");
const path = require("path");
const axios = require("axios");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

const questions =[
{
      type: "input",
      message: "Enter your GitHub username:",
      name: "username",
},
      {
      type: "input",
      message: "What is your project name:",
      name: "project",
},
      {
      type: "input",
      message: "Write a short descraption about your project:",
      name: "descraption",
},
    {
      type: "input",
      name: "usage",
      message: "What does the user need to know about using the repo?",
},
      {
      type: "input",
      name: "installation",
      message: "What command should be run to install dependencies?",
},
];

function writeToFile(file, data) {
      return fs.writeFileSync(path.join (process.cwd(),file), data)
      console.log(data)
};

function init() {
      inquirer.prompt(questions).then((answers) => {

            axios.get(`https://api.github.com/users/${username}/repos?per_page=100`).then(function (res) {
            console.log(res);
            }).then(({ data }) => { 
            writeToFile("README.md", generateMarkdown({data}));
      
      })

})    
}
init();

