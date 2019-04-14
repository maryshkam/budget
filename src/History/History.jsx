import React from 'react';
import PropTypes from 'prop-types';
import HistoryList from '../HistoryList/HistoryList';
import {connect} from 'react-redux';
import {showModal} from '../redux/actions/showModal';
import ModalWindow from '../ModalWindow/ModalWindow';
import './History.css';

const History = ({flag,show}) => {
  return (
    <div>
      <p onClick={show} className='newOperation'>+</p>
   
    <div className='history_wrapper'>
    
      {/* <p className='history_name'>Історія операцій </p> */}
     <div className="history_list">
     
     <HistoryList/>
     </div>
    </div>
    {flag ? <ModalWindow/> : null}
    </div>
  );
};

function mapStateToProps (state) {
  return {
    flag: state.showModal,
    // totalSumm: state.totalSumm,
    // historyArr: state.historyArr,
  }
}


function mapDispatchToProps (dispatch) {
return {
  show: function() {
    dispatch(showModal())
  },
}
}



History.propTypes = {
  
};

export default connect(mapStateToProps,mapDispatchToProps) (History);