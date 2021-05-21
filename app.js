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
        const {input1,input2} = await listForm(model)
        console.log(input1, input2)
        //const updatedModel = update(input1, input2, model)
    }
}

module.exports = {
    app
}