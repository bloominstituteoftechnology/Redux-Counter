import React, { Component } from "react";
import { connect } from 'react-redux';
import { increment, decrement, oddincrement } from '../actions';


var title = {
    width: '50%',
    margin: '10px auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
}


var style = {
    border: '1px solid black',
    width: '50%',
    margin: '20px auto',
    backgroundColor: 'tomato',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    padding: '10px'
}

var count = {
    color: 'antiquewhite',
    margin: '20px'
}

var blockButton = {
    display: 'block',
    width: '90%',
    margin: '5px'
}

class Counter extends Component {
    incrementIfOdd = (e) => {
        e.preventDefault();
       if (this.props.count % 2 !== 0) {
           this.props.increment()
       }
    };

    incrementAsync = (e) => {
        e.preventDefault();
        setTimeout(() => this.props.increment(), 1000);
        // Stretch Problem: Implement an increment function that
        // increments after waiting for one second
    };

    render() {
        // Fill in the two button onClick methods
        // Upon clicking these buttons, the count
        // should decrement or increment accordingly
        return (
            <div>
            <h1 style={title}>Knit Row Counter</h1>
            <div style={style}>
                <button onClick={() => this.props.decrement() }>
                    -
                </button>
                <h2 style={count}>{this.props.count}</h2>
                <button onClick={() => this.props.increment()}>
                    +
                </button>
                <button onClick={this.incrementIfOdd} style={blockButton}>
                    Increment if Odd
                </button>
                <button onClick={this.incrementAsync} style={blockButton}>
                    Increment async
                </button>
            </div>
            </div>
        );
    }
}

// The mapStateToProps function specifies which portion of the 
// state tree this component needs to receive. In this case, 
// since our redux store is only storing the value of the count,
// this component receives the whole state. In a more complex
// redux application, though, it would receive only the relevant
// parts it needs from the state object.
const mapStateToProps = (state) => {
    return {
        count: state.count
    };
};

// The connect function is called in order to make this component aware
// of the rest of the redux architecture. Without this, this component
// is only a dumb React component. We pass in all of the functions that
// are reliant on Redux, along with the component itself, so that Redux
// makes itself known to this component.
export default connect(mapStateToProps, { increment, decrement })(Counter);
