import React from 'react';
import {connect} from 'react-redux';
import {cancel} from '../redux/actions/showModal';
import {summ} from '../redux/actions/changeInputAction';
import {date} from '../redux/actions/changeInputAction';
import {description} from '../redux/actions/changeInputAction';
import {categories} from '../redux/actions/changeInputAction';
import './ModalWindow.css';

const ModalWindow = ({cancel, summ, date, desc, categories}) => {
  return (
    <div className='modal'>
    <div className="modal_header">
    <input type="radio" name="budget" id="" value='Доходи'/><p>ДОХОДИ</p>
    <input type="radio" name="budget" id="" value='Видатки'/><p>ВИДАТКИ</p>
    
      
      </div>
      <form className='form_wrapper'>
      <label >Сума <input type="text" onChange={summ}/></label>
      <label >Дата <input type="date" onChange={date}/></label>
      <label >Опис <textarea  type="text" onChange={desc}/></label>
      <label >Категорія <input type="text" onChange={categories}/></label>
      <div className="button_nav">
<input type="button" value="save"/>
<input type="button" value="cancel" />
</div>
      </form>
    </div>
  );
};

function mapStateToProps (state) {
  return {
    flag: state.showModal,
    change: state.change,
    
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
  show: function() {
    dispatch(cancel())
  },
}
}

export default connect(mapStateToProps, mapDispatchToProps) (ModalWindow);