import React from 'react';
import PropTypes from 'prop-types';
import HistoryList from '../HistoryList/HistoryList';
import './History.css';

const History = props => {
  return (
    <div>
      <p className='newOperation'>+</p>
   
    <div className='history_wrapper'>
    
      {/* <p className='history_name'>Історія операцій </p> */}
     <div className="history_list">
     
     <HistoryList/>
     </div>
    </div>
    </div>
  );
};





History.propTypes = {
  
};

export default History;