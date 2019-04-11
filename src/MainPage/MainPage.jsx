import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Header from '../Header/Header';
import Account from '../Account/Account';
import Categories from '../Categories/Categories';
import './MainPage.css';


const MainPage = () => {
  return (
    <div >
      <Header/>
      
     <Switch>
        <Route exact path='/' component={Account}/>
        <Route path='/accounts' component={Account}/>
        <Route path='/categories' component={Categories}/>
        {/* <Route path='/statistic' component={Account}/> */}

      </Switch> 
      <div className="main_page">
      </div>
    </div>
  );
};

export default MainPage;