LECTURE NOTES:
Getting Started with Redux:

import{createStore} from 'redux'; 

createStore(reducer) function produces a store where all state in Redux application will live. Takes a reducer function as a parameter.
When the createStore function is invoked, it gives 3 important methods: dispatch, subscribe, getState

A reducer is a function that returns an object. It is a representation of State/Store  within our Redux application. Take in two arguements: state data, action.

const userReducer = () => {
    return {

    }
}