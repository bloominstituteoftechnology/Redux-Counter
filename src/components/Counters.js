import React from 'react';
import { connect } from 'react-redux';
import CounterContainer from './CounterContainer';

const Counters = ({ counters }) => (
  <div>
    {counters
      .slice()
      .sort((a, b) => a.id - b.id)
      .map(({ id }) => (
        <CounterContainer key={id} id={id} />
      ))}
  </div>
);

export default connect(
  counters => ({ counters }),
  null
)(Counters);
