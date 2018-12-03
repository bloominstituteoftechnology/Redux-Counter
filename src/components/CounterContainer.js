import React, { Component } from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from '../actions';
import Counter from './Counter';

class CounterContainer extends Component {
  incrementIfOdd = () => {
    if (this.props.count % 2 !== 0) {
      this.props.increment();
    }
  };

  incrementAsync = () => {
    setTimeout(this.props.increment, 1000);
  };

  render() {
    return (
      <Counter
        {...this.props}
        incrementIfOdd={this.incrementIfOdd}
        incrementAsync={this.incrementAsync}
      />
    );
  }
}

const mapStateToProps = (state, { id }) => ({
  count: state.find(c => c.id === id).count
});

const mapDispatchToProps = (dispatch, { id }) => ({
  increment: () => dispatch(increment(id)),
  decrement: () => dispatch(decrement(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterContainer);
