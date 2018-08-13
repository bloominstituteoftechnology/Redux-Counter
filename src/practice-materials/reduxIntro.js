//redux is a state management system
//a library separate from react

import { createStore } from 'redux';


//Reducers are representations of our sate/store within our redux applicataion
//they take two arguments, state and action

const initialState= {
    name: 'Fred',
    age: 30,
    location: bedrock
}

const userReducer = (state = initialState, action) => {
    switch(action.type){
        case 'CHANGE_USER_NAME':
            return Object.assign({}, state, {name = action.payload} );
        case 'USER_BIRTHDAY':
            return Object.assign({}, state, {age = state.age + action.payload});
        case 'USER_MOVE':
            return Object.assign({}, state, {location = action.payload});

        default:
    return state;
    }
}



//your application data is represented by a single JS object.

const store = createStore(userReducer);

console.log('initial state', store.getState()) //retrieves the current condition of our state

//useing the subscribe method
store.subscribe(() => {
    console.log('state changes', store.getState())
});

//dispatch is used when something has changed within an application
//dispatch method takes an object with two properties; type and payload.  
//type is a description of the change that took places.
//payload is the data that is changing in our state.
//dispatch will trigger a call to the reducer.

store.dispatch({type: 'CHANGE-USER-NAME', payload: 'Ryan'})
store.dispatch({type: 'CHANGE-USER-NAME', payload: 'George'})
store.dispatch({type: 'CHANGE-USER-NAME', payload: 'Holly'})

//dispatch an object with a type of userbirthday and a payload of 1 year



store.dispatch({type: 'USER_BIRTHDAY', payload: 1});
store.dispatch({type: 'USER_MOVE', payload: 'somewhere else' })




//How to integrate redux into a react app.
//-------------------------------------------
import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import App from "./App";


const store = createStore( (state, action) => {} );


//how do I tell my react app to listen to redux?? -- Provider

//import provider and wrap app in provider


const rootElement = document.getElementById("root");
ReactDOM.render(
<Provider store = {store}>
{/* wrap within Router after wraping within Provider */}
    <App />
</Provider>,
roodElement
);

//-------------------------------------------

//new file - Reducer
//-------------------------------------------
const initialState = ['Fred', 'Barney', 'Wilma', 'Betty', 'Bam-bam', 'Dino']


//mapStateToProps takes whats in our redux store and passes it to our component as props


const mapStateToProps = (state) => {
    console.log(state);
    return{
        
    }
}

//--------------------------------------------
//we need an additional tool to connect the app to redux
import {connect}  from "react-redux"


const App = Props => {
    return (
        <div className = "App">
            {props.friends.map(friend => <div key = {friend}>{friend}</div>)}    
        </div>
    )
}



export default connect(mapStateToProps)(App);
//connects job is to connect to the redux store

//--------------------------------------------


//-------------------------------------------

