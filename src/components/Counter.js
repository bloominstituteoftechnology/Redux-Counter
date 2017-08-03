import React, { Component } from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { increment, decrement } from '../actions';

class Counter extends Component {
    incrementIfOdd = () => {
        if (this.props.count % 2 !== 0) {
            this.props.increment();
        }
    };

    incrementAsync = () => {
        setTimeout(this.props.increment(), 1000);
    };

    render() {
        return (
            <p>
                Clicked: {this.props.count} times
                {" "}
                <button onClick={() => this.props.increment()}>
                    +
                </button>
                {" "}
                <button onClick={() => this.props.decrement()}>
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

const mapStateToProps = (state) => {
    return {
        count: state
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ increment, decrement }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);