import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import HistoryListItem from '../HistoryListItem/HistoryListItem';
import './HistoryList.css';



const HistoryList = ({historyArr}) => {
  return (
    <div className='History_list'>
      <h3 className='History_title'>History operations:</h3>
      <div className="history_label">
      <p className='history_list_item_name'>Date</p>
      <p className='history_list_item_name'>Sum</p>
      <p className='history_list_item_name'>Category</p>
      <p className='history_list_item_name'>Description</p> 
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
    change: state.change,
    categoriesArr: state.categoriesArr,
    historyArr: state.historyArr,
  }
}


function mapDispatchToProps (dispatch) {
return {
}
}

HistoryList.propTypes = {
  change: PropTypes.shape({
    summ: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      categories: PropTypes.string.isRequired,
  }),
  categoriesArr: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      id: PropTypes.string,
      statusInput: PropTypes.bool
    })
  ),
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
  )
};


export default connect(mapStateToProps, mapDispatchToProps) (HistoryList);