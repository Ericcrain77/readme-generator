// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Title of your project?',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Enter your title');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'githubUsername',
        message: 'GitHub Username',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('Please enter your GitHub username');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Email address',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('Please enter your email address');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'details',
        message: 'Detail your project',
        validate: detailsInput => {
            if (detailsInput) {
                return true;
            } else {
                console.log('Please enter your project details');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'why',
        message: 'What is the purpose of this project?',
        validate: whyInput => {
            if (whyInput) {
                return true;
            } else {
                console.log('Please enter why you created this project');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'how',
        message: 'How will this project be used?',
        validate: howInput => {
            if (howInput) {
                return true;
            } else {
                console.log('Please describe how someone will use your project');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Step-by-step installation instructions',
        validate: installInput => {
            if (installInput) {
                return true;
            } else {
                console.log('Please enter your installation instructions');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Examples',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('Please enter your use examples');
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'license',
        message: 'Which license will you use for your project?',
        choices: ['apache', 'agpl', 'mit', 'no license']
    },
    {
        type: 'confirm',
        name: 'confirmContributers',
        message: 'Allow other contributors?',
        default: true
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'Guidelines for others to contribute',
        when: ({ confirmContributers }) => {
            if (confirmContributers) {
                return true;
            } else {
                return false;
            }
        },
        validate: contributerInput => {
            if (contributerInput) {
                return true;
            } else {
                console.log('Please enter contributer guidelines');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'test',
        message: 'Instructions on how to test the application',
        validate: testInput => {
            if (testInput) {
                return true;
            } else {
                console.log('Please enter your use test instructions');
                return false;
            }
        }
    }
];

// TODO: Create a function to write README file
const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile(`./generated-files/generated-readme.md`, fileContent, err => {
            if (err) {
             return console.log(err);
            }
            console.log('The markdown file has been created')
        });
    });
};

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions)
    .then(readmeData => {
        return readmeData;
    });
};

// Function call to initialize app
init()
    .then(readmeData => {
        console.log(readmeData);
        return generateMarkdown(readmeData);
    })
    .then(pageMarkdown => {
        return writeFile(pageMarkdown);
    })
    .then(writeFileResponse => {
        console.log(writeFileResponse.message);
    })
    .catch(err => {
        console.log(err);
    });