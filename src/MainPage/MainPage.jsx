import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Header from '../Header/Header';
import Account from '../Account/Account';
import Categories from '../Categories/Categories';
import History from '../History/History';
import Report from '../Report/Report';
import './MainPage.css';


const MainPage = () => {
  return (
    <div >
      <Header/>
      
     <Switch>
        <Route exact path='/' component={Account}/>
        <Route path='/accounts' component={Account}/>
        <Route path='/categories' component={Categories}/>
        <Route path='/history' component={History}/>
        <Route path='/report' component={Report}/>

      </Switch> 
      
    </div>
  );
};

// function mapStateToProps (state) {
//   return {
//     flag: state.showModal,
    
//   }
// }

export default MainPage;