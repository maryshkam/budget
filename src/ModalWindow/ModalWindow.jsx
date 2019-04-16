import React from 'react';
import Select from 'react-select';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {cancel} from '../redux/actions/showModal';
import {summ} from '../redux/actions/changeInputAction';
import {date} from '../redux/actions/changeInputAction';
import {description} from '../redux/actions/changeInputAction';
import {categories} from '../redux/actions/changeInputAction';
import {clear} from '../redux/actions/changeInputAction';
import {statusDebet} from '../redux/actions/statusMoneyAction';
import {statusCredit} from '../redux/actions/statusMoneyAction';
import {statusCancel} from '../redux/actions/statusMoneyAction';
import {saveToHistory} from '../redux/actions/historyAction';
import {selectedCategory} from '../redux/actions/selectAction';
import {clearSelect} from '../redux/actions/selectAction';
// import {plus} from '../redux/actions/totalSummAction';
// import {minus} from '../redux/actions/totalSummAction';

import './ModalWindow.css';

const ModalWindow = ({cancel, clear, summ, date, desc, categories,change, statusDebet, statusCredit, statusCancel, saveToHistory, statusMoney, statusButton, historyArr, selectedOption, selectedCategory, categoriesArr, clearSelect}) => {
  return (
    <div className='modal'>
    <div className="modal_header">
    <label ><input className='label_radiobutton' type="radio"  name="budget" id="" value='Доходи'onClick={statusDebet}/>DEBET</label>
    <label ><input className='label_radiobutton' type="radio"  name="budget" id="" value='Видатки' onClick={statusCredit}/>CREDIT</label>
    
      </div>
      <form className='form_wrapper'>
      <label className='label_wrapper'>Sum <input type="number" onChange={summ} name='summ' value={change.summ} className='label_input'/></label>
      <label className='label_wrapper' >Date <input type="date" onChange={date} name='date' value={change.date}className='label_input'/></label>
      <label className='label_wrapper' >Description <textarea  type="text" onChange={desc} name='description' value={change.description} className='label_input'/></label>
      <label className='label_wrapper' >Category</label>
     <Select
     value={selectedOption}
     onChange={selectedCategory}
     options={categoriesArr}
     />
     
     
      {/* <label className='label_wrapper' >Category<input type="text" onChange={categories} name='category' value={change.categories} className='label_input'/></label> */}
      <div className="button_nav">

{statusMoney ? <button className='btn_form' onClick={(e)=> {saveToHistory(change,statusMoney,statusButton, historyArr, selectedOption);  cancel(); clear(change); clearSelect(); statusCancel()}} type="button">SAVE</button>
: <button className='btn_form' onClick={(e)=> {saveToHistory(change,statusMoney,statusButton, historyArr,selectedOption);  cancel(); clear(change); clearSelect(); statusCancel()}} type="button" >SAVE</button>
}

<button className='btn_form' onClick={(e)=> {cancel(); clear(change); statusCancel()}}type="button" >CANCEL</button>
</div>
      </form>
    </div>
  );
};

function mapStateToProps (state) {
  return {
    flag: state.showModal,
    change: state.change,
    statusMoney: state.statusMoney,
    statusButton: state.statusButton,
    historyArr: state.historyArr,
    categoriesArr: state.categoriesArr,
    selectedOption: state.selectedOption,
    
    
  }
}


function mapDispatchToProps (dispatch) {
return {
  summ: function(e) {
    dispatch(summ(e))
  },
  date: function(e) {
    dispatch(date(e))
  },
  desc: function(e) {
    dispatch(description(e))
  },
  categories: function(e) {
    dispatch(categories(e))
  },
  cancel: function() {
    dispatch(cancel())
  },
  clear: function(change) {
    dispatch(clear(change))
  },
  statusDebet: function() {
    dispatch(statusDebet())
  },
  statusCredit: function() {
    dispatch(statusCredit())
  },
  statusCancel: function() {
    dispatch(statusCancel())
  },
  saveToHistory: function(change,statusMoney, statusButton, historyArr,selectedOption){
    dispatch(saveToHistory(change,statusMoney, statusButton, historyArr,selectedOption))
  },
  selectedCategory: function(selectedOption){
    dispatch(selectedCategory(selectedOption))
  },
  clearSelect: function() {
    dispatch(clearSelect())
  }
}
}

ModalWindow.propTypes = {
  flag: PropTypes.bool,
  change: PropTypes.shape({
    summ: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      categories: PropTypes.string.isRequired,
  }),
  statusMoney: PropTypes.bool.isRequired,
  statusButton: PropTypes.bool.isRequired,
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
  categoriesArr: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      id: PropTypes.string,
      statusInput: PropTypes.bool
    }),
  ),
  selectedOption: PropTypes.shape({
    value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      id: PropTypes.string,
      statusInput: PropTypes.bool
  })
};


export default connect(mapStateToProps, mapDispatchToProps) (ModalWindow);