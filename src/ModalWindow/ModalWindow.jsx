import React from 'react';
import {connect} from 'react-redux';
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
import {plus} from '../redux/actions/totalSummAction';
import {minus} from '../redux/actions/totalSummAction';

import './ModalWindow.css';

const ModalWindow = ({cancel, clear, summ, date, desc, categories,change, statusDebet, statusCredit, statusCancel, saveToHistory, statusMoney, plus, minus}) => {
  return (
    <div className='modal'>
    <div className="modal_header">
    <label ><input className='label_radiobutton' type="radio"  name="budget" id="" value='Доходи'onClick={statusDebet}/>ДОХОДИ</label>
    <label ><input className='label_radiobutton' type="radio"  name="budget" id="" value='Видатки' onClick={statusCredit}/>ВИДАТКИ</label>
    
    
      
      </div>
      <form className='form_wrapper'>
      <label >Сума <input type="text" onChange={summ}/></label>
      <label >Дата <input type="date" onChange={date}/></label>
      <label >Опис <textarea  type="text" onChange={desc}/></label>
      <label >Категорія <input type="text" onChange={categories}/></label>
      <div className="button_nav">

{statusMoney ? <input onClick={(e)=> {saveToHistory(change,statusMoney); plus(change); cancel(); clear(change); statusCancel()}} type="button" value="save"/>
: <input onClick={(e)=> {saveToHistory(change,statusMoney); minus(change); cancel(); clear(change); statusCancel()}} type="button" value="save"/>
}

{/* <input onClick={(e)=> {saveToHistory(change,statusMoney); plus(change); cancel(); clear(change); statusCancel()}} type="button" value="save"/> */}
<input onClick={(e)=> {cancel(); clear(change); statusCancel()}}type="button" value="cancel" />
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
    // historyArr: state.historyArr,
    
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
  saveToHistory: function(change,statusMoney){
    dispatch(saveToHistory(change,statusMoney))
  },
  plus: function(change) {
    dispatch(plus(change))
  },
  minus: function(change) {
    dispatch(minus(change))
  }
}
}

export default connect(mapStateToProps, mapDispatchToProps) (ModalWindow);