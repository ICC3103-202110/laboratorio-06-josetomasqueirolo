const {initModel} = require('./model')
const {update1, update2} = require('./update')
const {view} = require('./view')
const {app} = require('./app')

const state = {
    model: initModel,
    currentView: view(initModel)
}

app(state, update1, update2, view)