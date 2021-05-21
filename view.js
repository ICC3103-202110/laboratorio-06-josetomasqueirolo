const figlet = require('figlet')
const chalk = require('chalk')
const inquirer = require('inquirer')

function getTitle(){
    return chalk.yellow(
        figlet.textSync(
            'Unit Converter App',
            {
                horizontalLayout: 'full',
                font: 'Nancyj-Underlined'
            }
        )
    )
}
// para imprimir titulo hacer con console.log()

function getTable(model){
    const {leftValue} = model
    const {leftUnit} = model
    const {rightValue} = model
    const {rightUnit} = model
    return [
        {"leftValue": leftValue, "leftUnit": leftUnit, "rightValue": rightValue, "rightUnit": rightUnit},
    ]
}

function inputForm(model){
    const {input} = model
    const message = 'Left temperature is source (y/n)?'
    return inquirer.prompt([
        {
            name: 'input',
            type: 'input',
            message: message,
            default: input,
            validate: function(value){
                if(value === 'y' || value === 'n'){
                    return true
                } else {
                    return "Enter 'y' or 'n'."
                }
            }
        }
    ])
}
