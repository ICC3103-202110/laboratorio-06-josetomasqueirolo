const {inputForm, listForm} = require('./view')
const {printTable} = require('console-table-printer')

// Impure
async function app(state, update1, update2, view, check){
    while (true){
        const {model, currentView} = state
        const {title, table} = currentView
        // I/O
        //console.clear()
        console.log(title)
        printTable(table)
        // FORM (Ask user input)
        const {input1,input2} = await inputForm(model)
        const {input3,input4} = await listForm(model)
        if(input1 == "y"){
            updatedModel = await update1(input2, input3, input4, model)
        }
        else if(input1=="n"){
            updatedModel = await update2(input2, input3, input4, model)
        }
        state = {
            ...state,
            model: updatedModel,
            currentView: view(updatedModel)
        }
    }
}

module.exports = {
    app
}