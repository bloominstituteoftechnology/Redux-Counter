import React, { Component } from "react";

class Counter extends Component {
    incrementIfOdd = () => {
        if (this.props.value % 2 !== 0) {
            this.props.onIncrement();
        }
    };

    incrementAsync = () => {
        setTimeout(this.props.onIncrement, 1000);
    };

    render() {
        return (
            <p>
                Clicked: {this.props.value} times
                {" "}
                <button onClick={this.props.onIncrement}>
                    +
                </button>
                {" "}
                <button onClick={this.props.onDecrement}>
                    -
                </button>
                {" "}
                <button onClick={this.incrementIfOdd}>
                    Increment if odd
                </button>
                {" "}
                <button onClick={this.incrementAsync}>
                    Increment async
                </button>
            </p>
        );
    }
}

export default Counter;