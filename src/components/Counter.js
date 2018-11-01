import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Card,
  CardTitle,
  ButtonGroup,
  Button,
  Row,
  Col,
  CardHeader,
  CardBody
} from "reactstrap";
import {
  increment,
  decrement,
  incrementIfOdd,
  incrementAsync
} from "../actions";

class Counter extends Component {
  render() {
    // Fill in the two button onClick methods
    // Upon clicking these buttons, the count
    // should decrement or increment accordingly
    return (
      // <p>
      //     Clicked: {this.props.count} times
      //     <button onClick={() => this.props.increment() }>
      //         +
      //     </button>
      //     <button onClick={() => this.props.decrement() }>
      //         -
      //     </button>
      //      {/* Uncomment these button tags if you got
      //     around to implementing the extra credit functions */}
      //     <button onClick={() => this.props.incrementIfOdd()}>
      //         Increment if odd
      //     </button>
      //     <button onClick={() => setTimeout(() => this.props.incrementAsync(), 3000)}>
      //         Increment async
      //     </button>
      // </p>
      <Row>
        <Col sm="12" md={{ size: 6, offset: 3 }}>
          <Card inverse color="info" className="text-center">
            <CardHeader>Redux Counter</CardHeader>
            <CardBody>
              <CardTitle>{this.props.count} clicks</CardTitle>
              <Col sm="12" md={{ size: 12 }}>
                <ButtonGroup>
                  <Button
                    outline
                    color="warning"
                    onClick={() => this.props.increment()}
                  >
                    +
                  </Button>
                  <Button
                    outline
                    color="warning"
                    onClick={() => this.props.incrementIfOdd()}
                  >
                    Increment if Odd
                  </Button>
                  <Button
                    outline
                    color="warning"
                    onClick={() =>
                      setTimeout(() => this.props.incrementAsync(), 2000)
                    }
                  >
                    Async Increment
                  </Button>
                  <Button
                    outline
                    color="warning"
                    onClick={() => this.props.decrement()}
                  >
                    -
                  </Button>
                </ButtonGroup>
              </Col>
            </CardBody>
          </Card>
        </Col>
      </Row>
    );
  }
}

// The mapStateToProps function specifies which portion of the
// state tree this component needs to receive. In this case,
// since our redux store is only storing the value of the count,
// this component receives the whole state. In a more complex
// redux application, though, it would receive only the relevant
// parts it needs from the state object.
const mapStateToProps = state => {
  return {
    count: state.count
  };
};

// The connect function is called in order to make this component aware
// of the rest of the redux architecture. Without this, this component
// is only a dumb React component. We pass in all of the functions that
// are reliant on Redux, along with the component itself, so that Redux
// makes itself known to this component.
export default connect(
  mapStateToProps,
  { increment, decrement, incrementIfOdd, incrementAsync }
)(Counter);
