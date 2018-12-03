import React from 'react';
import { connect } from 'react-redux';
import { create } from './actions';
import Counters from './components/Counters';

const App = ({ create }) => (
  <div>
    <Counters />
    <br />
    <button onClick={create} className="center">
      Add new counter
    </button>
  </div>
);

export default connect(null, { create })(App);
