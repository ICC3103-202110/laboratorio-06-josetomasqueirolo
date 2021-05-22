const {inputForm, listForm} = require('./view')
const {printTable} = require('console-table-printer')

// Impure
async function app(state, update, view){
    while (true){
        const {model, currentView} = state
        const {title, table} = currentView
        // I/O
        console.clear()
        console.log(title)
        printTable(table)
        // FORM (Ask user input)
        const {input1,input2} = await inputForm(model)
        const {input3,input4} = await listForm(model)
        console.log(input1)
        console.log(input2)
        console.log(input3)
        console.log(input4)
        const updatedModel = update(input1, input2, input3, input4, model)
    }
}

module.exports = {
    app
}