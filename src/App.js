import React, { Component } from 'react';
import {first} from './redux/actions/firstAction';
import {connect} from 'react-redux';
// import logo from './logo.svg';
import './App.css';
// import Account from './Account/Account';
// import Header from './Header/Header';
import MainPage from './MainPage/MainPage';


class App extends Component {
  render() {
    // let {add} = this.props;
    return (
      <div>
        <MainPage/>
        {/* <button onClick={add}>+</button> */}
      </div>
    );
  }
}



function mapStateToProps (state) {
  return {
    value: state.first,
    
  }
}


function mapDispatchToProps (dispatch) {
return {
  add: function() {
    dispatch(first(5))
  },
}
}



export default connect(mapStateToProps,mapDispatchToProps) (App);
