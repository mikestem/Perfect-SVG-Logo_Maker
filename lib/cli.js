const inquirer = require('inquirer');
const { join } = require('path');
const { writeFile } = require('fs/promises');
// const { createDocument } = require('./document');

class CLI {
    constructor() {
      this.answers = [];
    }
    run() {
        return inquirer
        .prompt([
            {
              type: 'input',
              name: 'textChoice',
              message: 'What three letters or characters would you like for your logo?',
            }, 
            {
                type: "list",
                name: "shape",
                message: "What shape would you like for your logo?",
                choices: [
                    "circle",
                    "triangle",
                    "square"
                ]
            },
            {
                type: 'input',
                name: 'textColor',
                message: 'What text color would you like for your logo?',
              }, 
              {
                type: 'input',
                name: 'backgroundColor',
                message: 'What background color would you like for your logo?',
              }, 
          ])
        } 
    }

    module.exports = CLI;