LECTURE NOTES:

Getting Started with Redux:

import{createStore} from 'redux'; 

createStore(reducer) function produces a store where all state in Redux application will live. Takes a reducer function as a parameter.
When the createStore function is invoked, it gives 3 important methods: dispatch, subscribe, getState

A reducer is a function that returns an object. It is a representation of State/Store  within our Redux application. Take in two arguements: state data, action.

getState() retrieves the current condition of our state
subscribe() listens for changes that happen to the store. 

dispatch() something has changed within the application. Takes an object as a parameter. That object has two properties on it: type and payload. Dispatch will trigger a call to the reducer. 
Type is a description of the change that took place. Convention to write uppercase and macro case(_)
Payload is the data that is changing in our state

```Javascript
    const initialState = {name: 'Fred', age: 30, location: 'BedRock'}

    const userReducer = (state = initialState, action) => {
       switch(action.type){
           case "CHANGE_USER_NAME":
                return Object.assign({}, state, {name: action.payload}); 
           case "USER_BIRTHDAY":
                return Object.assign({}, state, {age: state.age + action.payload}); 
           case "USER_MOVED":
                return Object.assign({}, state, {location: action.payload}); 
           default:
            return state; 
       }
    }

    const store = createStore(userReducer); 

    store.subscribe(() => {
        console.log(store.getState())
    })

    store.dispatch({type: 'CHANGE_USER_NAME', payload: 'Ryan'}); 
    store.dispatch({type:"USER_BIRTHDAY", payload: 1}); 
    store.dispatch({type: "USER_MOVED", payload: 'Las Vegas'}); 
```

USING REDUX WITH REACT: 

Need redux dependency and react-redux dependency from npm/yarn.

```Javascript
import {createStore} from 'redux'
   import {Provider} from 'react-redux'

const store = createStore((state,action) => {})

const rootElement = document.get.ElementById('root'); 
ReactDOM.render(
    <Provider store = {store}>
    <App />
    </Provider>, 
    rootElement
    );```

import {connect} from react-redux to connect the props to the state in the redux store
mapStatetoProps takes what is in our store and passes it to our component as props.

```const mapStateToProps = (state) => {
    return {
        friends: state.friends,
        userLoggedIn: state.userLoggedIn
    }
}

export default connect(mapStateToProps)(App); ```


