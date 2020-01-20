import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { createStore, } from 'redux'
import { Provider } from "react-redux"

//import todoApp from './reducers'
const init = [{ task: "ITEM1", isDone: false, id: 1 }, { task: "ITEM1", isDone: false, id: 2 }]
function tasks(state = init, action) {
    switch (action.type) {
        case "ADD":
            const newStateAdd = state
            let maxId = Math.max.apply(Math, newStateAdd.map(function(o) { return o.id; }))
            return [...newStateAdd, { task: action.text, isDone: false, id: ++maxId}]
        case "EDIT":
            console.log(action.ptask);
            const idEdit = action.payload
            const newStateEdit = state
            if (state.task="")
            newStateEdit[idEdit].task = action.ptask
            return [...newStateEdit]
        case "DELETE":
            const idDelete = action.payload
            const newState = state
            newState.splice(idDelete, 1)
            return [...newState]
        case "COMPLITE":
            const idComplite = action.payload
            const newStateComp = state
            newStateComp[idComplite].isDone = !newStateComp[idComplite].isDone
            return [...newStateComp]
        default:
            return state
    }
}
const store = createStore(tasks)

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()