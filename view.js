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
    const message1 = 'Left temperature is source (y/n)?'
    const message2 = 'Temperature value to convert?'
    return inquirer.prompt([
        {
            name: 'input1',
            type: 'input',
            message: message1,
            default: input,
            validate: function(value){
                if(value === 'y' || value === 'n'){
                    return true
                } else {
                    return "Enter 'y' or 'n'."
                }
            }
        },
        {
            name: 'input2',
            type: 'input',
            message: message2,
            default: input  
        }
    ])
}
