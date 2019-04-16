import React from 'react';
import PropTypes from 'prop-types';
import HistoryList from '../HistoryList/HistoryList';
import {connect} from 'react-redux';
import {showModal} from '../redux/actions/showModal';
import ModalWindow from '../ModalWindow/ModalWindow';
import './History.css';

const History = ({flag,show, total}) => {
  return (
    <div>
      <div className="history_operation">
      <div className="balance">
      <p>Balance:</p>
      <p>{total}</p>
      <p>&#8372;</p>
      </div>
      <p onClick={show} className='newOperation'>+</p>
      </div>
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
    total: state.historyArr.reduce((acc,obj) => {return obj.statusMoney ? acc+Number(obj.summ) : acc-Number(obj.summ)}, 0),

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
  show: PropTypes.func,
  flag: PropTypes.bool,
  total: PropTypes.number,
};

export default connect(mapStateToProps,mapDispatchToProps) (History);