import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import HomePage from './components/HomePage';
import { decrementCount, incrementCount } from './store/counter/CounterAction';
import { AppState } from './store/rootStore';


interface AppProps {
  increment: () => void;
  decrement: () => void;
}

const mapStateToProps = (state:AppState) => ({
  count: state.counterReducer.count
})

const mapDispatchToPros = (dispatch: Dispatch) : AppProps => ({
  increment: () => dispatch(incrementCount()),
  decrement: () => dispatch(decrementCount())
})
class App extends Component<AppProps, AppState> {
  render(): JSX.Element{
    return (
      <HomePage {...this.props}/>
      );
  }
 
}

export default connect(mapStateToProps, mapDispatchToPros)(App);
