import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {showModal} from '../redux/actions/showModal';
import {editModal} from '../redux/actions/changeInputAction';
import ModalWindow from '../ModalWindow/ModalWindow';
import {deleteFromHistory} from '../redux/actions/historyAction';
import {editButton} from '../redux/actions/statusButtonAction';
// export {changeSelect} from '../redux/actions/selectAction';
import {changeSelect} from '../redux/actions/selectAction';


import './HistoryListItem.css';

const HistoryListItem = ({el,flag, showModal, editModal,historyArr, deleteFromHistory, editButton, changeSelect }) => {
  return (
    <div className={el.statusMoney ? 'History_item_green' : 'History_item_red'}>
      <p className='history_item_name'>{el.date}</p>
      <p className='history_item_name'>{el.summ}</p>
      <p className='history_item_name'>{el.select}</p>
      <p className='history_item_name'>{el.description}</p>
      <button className='btn_style_mod' onClick={(e)=> { editModal(e,historyArr); changeSelect(e, historyArr); editButton(); showModal()}} id={el.id}>edit</button>
      <button className='btn_style_mod' onClick={(e)=> {deleteFromHistory(e,historyArr)}} id={el.id}>delete</button>
      {/* <div className="nav_img">
      
      </div> */}
      {flag ? <ModalWindow/> : null}
    </div>
  );
};

function mapStateToProps (state) {
  return {
    flag: state.showModal,
    historyArr: state.historyArr,
    statusButton: state.statusButton,
  }
}

function mapDispatchToProps (dispatch) {
  return {
    
    
    showModal: function() {
      dispatch(showModal())
    },
    editModal: function(e,historyArr ){
      dispatch(editModal(e,historyArr))
    },
    deleteFromHistory: function(e,historyArr){
      dispatch(deleteFromHistory(e,historyArr))
    },
    editButton: function() {
      dispatch(editButton())
    },
    changeSelect: function(e, historyArr) {
      dispatch(changeSelect(e, historyArr))
    }
    
  }
  }

HistoryListItem.propTypes = {
  
  flag: PropTypes.bool,
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
  statusButton: PropTypes.bool,
  showModal: PropTypes.func,
  editModal: PropTypes.func,
  deleteFromHistory: PropTypes.func,
  editButton: PropTypes.func,
  changeSelect: PropTypes.func,
};

export default connect (mapStateToProps, mapDispatchToProps) (HistoryListItem);