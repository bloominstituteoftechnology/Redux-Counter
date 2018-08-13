import React, { Component } from "react";
import { connect } from 'react-redux';
import { increment, decrement } from '../actions';
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';

class Counter extends Component {
    incrementIfOdd = () => {
        if( this.props.count % 2 === 1){
          this.props.increment()
        }
    };

    incrementAsync = () => {
      setTimeout( () => this.props.increment(), 1000)
    };

    render() {
        // Fill in the two button onClick methods
        // Upon clicking these buttons, the count
        // should decrement or increment accordingly
        return (
          <div className = "container">

            <Row>
            <Col sm="6">
              <Card body>
                <CardTitle>Increment/Decrement</CardTitle>
                <CardText>Clicked: {this.props.count} times</CardText>
                <Row>
                  <div className= "col-2" >
                  <Button onClick={() => this.props.increment() }>
                      +
                  </Button>
                </div>
                  <div className= "col-2" >
                  <Button onClick={() => this.props.decrement()}>
                      -
                  </Button>
                </div>
                </Row>
              </Card>
            </Col>
            <Col sm="6">
              <Card body>
                <CardTitle>Odd/Async</CardTitle>
                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                <Row>
                  <div className = "col">
                  <Button onClick={this.incrementIfOdd}>
                     Increment if odd
                 </Button>
               </div>
               <div className = "col">
                 <Button onClick={this.incrementAsync}>
                     Increment async
                 </Button>
                 </div>
                 </Row>
              </Card>
            </Col>
          </Row>
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
        count: state
    };
};

// The connect function is called in order to make this component aware
// of the rest of the redux architecture. Without this, this component
// is only a dumb React component. We pass in all of the functions that
// are reliant on Redux, along with the component itself, so that Redux
// makes itself known to this component.
export default connect(mapStateToProps, { increment, decrement })(Counter);
