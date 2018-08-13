import React, { Component } from "react";
import { connect } from 'react-redux';
import { increment, decrement } from '../actions';
import { Button, Row, Col } from 'reactstrap';
import styled from 'styled-components';

const P = styled(Col) `
  font-weight: bold;
  text-align: center;
  font-size: 50px;
  color: white;
  background: #031424
  display: flex;
  align-items: center;
  justify-content: center;
  height: 300px;
`;

const TopBtnDiv = styled(Col) `
  display: flex;
  flex-direction: column;
`;

const S1Button = styled(Button) `
  background: #30415D;
  color: #D9B310;
  width: 190px;
  height: 100px;
  font-size: 40px
  margin-bottom: 10px;
`;

const S2Button = styled(Button) `
  background: #30415D;
  color: #D9B310;
  font-weight: bold;
  width: 300px;
  height: 100px;
  font-size: 20px
  margin-bottom: 10px;
`;

const MainDiv = styled.div `
  margin: 0 auto;
  max-width: 950px;
  width: 100%;
  flex-direction: column;
  background-image: url("https://i.pinimg.com/736x/d1/92/4c/d1924c9919488b6057646eabf0832b57--screen-wallpaper-backgrounds-free.jpg");
  background-size: cover;
  padding: 50px 30px;
`;

const TopDiv = styled(Row) `
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 200px;
  margin-bottom: 50px;
`;

const BottomDiv = styled(Row) `
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 200px;
`;

class Counter extends Component {
    incrementIfOdd = () => {
      if (this.props.count % 2 !== 0)
      {this.props.increment()}
    };

    incrementAsync = () => {
        // Stretch Problem: Implement an increment function that
        // increments after waiting for one second
    setTimeout(this.props.increment, 1000)
};

    render() {
        // Fill in the two button onClick methods
        // Upon clicking these buttons, the count
        // should decrement or increment accordingly
        return (
          <MainDiv>
            <TopDiv>
              <P xs='6'>
                Clicked: <br/>{this.props.count} times
              </P>
              <TopBtnDiv xs='3'>
                <S1Button onClick={() => this.props.increment() }>
                    +
                </S1Button>
                <S1Button onClick={() => this.props.decrement() }>
                    -
                </S1Button> <br/>
              </TopBtnDiv>
            </TopDiv>
            <BottomDiv>
              <S2Button onClick={this.incrementIfOdd}>
                  Increment if odd
              </S2Button>
              <S2Button onClick={this.incrementAsync}>
                  Increment async
              </S2Button>
            </BottomDiv>
          </MainDiv>
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
