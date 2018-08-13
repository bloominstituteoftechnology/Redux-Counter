import React, { Component } from "react";
import { connect } from 'react-redux';
import { increment, decrement} from '../actions';
import styled from 'styled-components';

const Contained = styled.div`
margin: 0 auto;
display: flex;
flex-wrap: wrap;
justify-center: center;
align-items: center;
width: 100%;
button {
    width: 10%;
}
button:hover{
    background-color: #3e8e41
}
button:active {
  background-color: #3e8e41;
  box-shadow: 0 5px #666;
  transform: translateY(4px);
}
button:after {
    content: "";
    background: #90EE90;
    display: block;
    position: absolute;
    padding-top: 300%;
    padding-left: 350%;
    margin-left: -20px!important;
    margin-top: -120%;
    opacity: 0;
    transition: all 0.8s
}
button:active:after {
    padding: 0;
    margin: 0;
    opacity: 1;
    transition: 0s
}
p {
    width: 100%;
    font-size: 36px;
    background: #3e8e41;
    color: white;
    margin-top: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
}

`;
const Button = styled.button`
  padding: 15px 25px;
  font-size: 24px;
  text-align: center;
  cursor: pointer;
  outline: none;
  color: #fff;
  background-color: #4CAF50;
  border: none;
  border-radius: 15px;
  box-shadow: 0 9px #999;
  margin-right: 30px;
  
`;
class Counter extends Component {
    incrementIfOdd = () => {
        // Stretch Problem: Implement an increment function that
        // only increments if the counter value is odd
        if(this.props.count % 2 === 1) increment()
      };
    incrementAsync = () => {
        // Stretch Problem: Implement an increment function that
        // increments after waiting for one second
        setTimeout(increment, 1000)
      };
    decrementIfOdd = () => {
        if (this.props.count % 2 === 1) decrement()
    }
    decrementAsync = () => {
        setTimeout(decrement, 1000)
    };
    render() {
        // Fill in the two button onClick methods
        // Upon clicking these buttons, the count
        // should decrement or increment accordingly
        
        return (
            <Contained>
                <Button onClick={() => increment() }>
                    +
                </Button>
                <Button onClick={() => decrement() }>
                    -
                </Button>
                 {/* Uncomment these button tags if you got
                around to implementing the extra credit functions */}
                <Button onClick={this.incrementIfOdd}>
                    Increment if odd
                </Button>
                <Button  onClick={this.incrementAsync}>
                    Increment async
                </Button> 
                <Button onClick={this.decrementIfOdd}>
                    Decrement if odd
                </Button>
                <Button onClick = {this.decrementAsync}>
                    Decrement async
                </Button>
                <br/>
                <p>{`Clicked: ${this.props.count} times`}</p>
            </Contained>
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
export default connect(mapStateToProps, { increment, decrement})(Counter);