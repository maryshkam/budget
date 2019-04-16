import React, { Component } from 'react';
// import {first} from './redux/actions/firstAction';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {storage} from './redux/actions/historyAction';
import {storageCategory} from './redux/actions/categoriesAction';
// import logo from './logo.svg';
import './App.css';
// import Account from './Account/Account';
// import Header from './Header/Header';
import MainPage from './MainPage/MainPage';


class App extends Component {
  componentDidMount () {
    this.props.storage();
    this.props.storageCategory()
  }
  render() {
    
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
    historyArr: state.historyArr,
    
  }
}


function mapDispatchToProps (dispatch) {
return {
  storage: function() {
    dispatch(storage())
  },
  storageCategory: function(){
    dispatch(storageCategory())
  }
}
}

App.propTypes = {
  historyArr: PropTypes.arrayOf(
    PropTypes.shape({
      summ: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      categories: PropTypes.string.isRequired,
      select: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      statusMoney: PropTypes.bool.isRequired
    })
  ),
  storage: PropTypes.func,
  storageCategory: PropTypes.func,
};



export default connect(mapStateToProps,mapDispatchToProps) (App);
