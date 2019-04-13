import React from 'react';
import {connect} from 'react-redux';
import HistoryListItem from '../HistoryListItem/HistoryListItem';
import './HistoryList.css';



const HistoryList = ({historyArr}) => {
  return (
    <div className='History_list'>
      <h3 className='History_title'>Історія операцій:</h3>
      <div className="history_label">
      <p className='history_list_item_name'>Дата</p>
      <p className='history_list_item_name'>сума</p>
      <p className='history_list_item_name'>категорія</p>
      <p className='history_list_item_name'>опис</p> 
      {/* <p className='history_list_item_name'></p> */}
      </div>
      <ul className='history_list'>
      
{historyArr.length !== 0 ? historyArr.map((el)=>  <HistoryListItem el={el} key={el.id}/>) : null }

      </ul>
    </div>
  );
};

function mapStateToProps (state) {
  return {
    // flag: state.showModal,
    change: state.change,
    categoriesArr: state.categoriesArr,
    historyArr: state.historyArr,
  }
}


function mapDispatchToProps (dispatch) {
return {
  
  
  // categories: function(e) {
  //   dispatch(categories(e))
  // },

  // add: function(e, change) {
  //   e.preventDefault();
  //   dispatch(categoriesAdd(change))
  // },
  
}
}

export default connect(mapStateToProps, mapDispatchToProps) (HistoryList);