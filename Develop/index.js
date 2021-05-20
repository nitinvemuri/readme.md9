// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js')
const fs = require ('fs');





// TODO: Create an array of questions for user input
const Questions = [
        {
            type: 'input',
            name: 'title',
            message: 'What is the Title?(required)',
            validate: titleInput => {
                if (titleInput) {
                    return true
                } else {
                    console.log("Please enter a title")
                    return false
                }
            },
        },
        {
            type: 'input',
            name: 'description',
            message: 'Enter a Description',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Describe any Installation Instructions?'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Describe projects usage'
        },
        {
            type: 'input',
            name: 'contributions',
            message: 'Contributors?'
        },
        {
            type: 'input',
            name: 'steps',
            message: 'What steps need to be take?'
        },
        {
            type: 'confirm',
            name: 'test',
            message: 'Is there a test included'
        },
        {
            type: 'input',
            name: 'questions',
            message: 'What to do if I have questions (type email)',
        },
        {
            type: 'checkbox',
            name: 'license',
            message: 'Select the appropriate license. (Enter all that apply)',
            choices: ['GNU General Public',  'MIT',  'Apache ', 'Unlicensed'
            ]

        },
        {
            type: 'input',
            name: 'email',
            message: 'Input your Email? (Required)',
            validate: emailInput => {
                if (emailInput) {
                    return true
                } else {
                    console.log('Enter an Email')
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'name',
            message: 'Input your Name? (required)',
            validate: nameInput => {
                if (nameInput) {
                    return true
                } else {
                    console.log ('Enter a Name')
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'username',
            message: 'Input your github username?(required)',
            validate: usernameInput => {
                if (usernameInput) {
                    if (usernameInput) {
                        return true
                    } else {
                        console.log('Enter a Username')
                        return false
                    }
                }
            }
        }
    ];


// Writes README file
function writeToFile(fileName, data) {

    fs.writeFile(fileName, data, err => {
      if (err) {
        return console.log(err);
      }
      console.log ("File successfully written");
    });
    
    };

// Initializes app
function init() {
    inquirer.prompt(Questions)
    .then(function(data) {
      writeToFile("README.md", generateMarkdown(data));
    })
  }


init();
