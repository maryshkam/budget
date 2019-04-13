import React from 'react';
import {connect} from 'react-redux';
import {categories} from '../redux/actions/changeInputAction';
import {clear} from '../redux/actions/changeInputAction';
import {categoriesAdd} from '../redux/actions/categoriesAction';
import './Categories.css';
import CategoriesList from '../CategoriesList/CategoriesList';

const Categories = ({categories, add, change, clear}) => {

  return (
    <div className='Categories_wrapper'>
    <div className="categories_form_wrapper">
      <form className='categoties_form' onSubmit={(e) => {add(e,change.categories); clear(change)}}>
        <input type="text" placeholder='input categories' className='categories_name' onChange={categories} value={change.categories}/>
        <input type="submit" value="SAVE" className='btn_save'/>
      </form>
      </div>
      <div className="gategories_list">
      <CategoriesList/>
      </div>
    </div>
  );
};

function mapStateToProps (state) {
  return {
    // flag: state.showModal,
    change: state.change,
    
  }
}


function mapDispatchToProps (dispatch) {
return {
  
  
  categories: function(e) {
    dispatch(categories(e))
  },

  add: function(e, change) {
    e.preventDefault();
    dispatch(categoriesAdd(change))
  },

  clear: function(change) {
    dispatch(clear(change))
  },
  
}
}


export default connect(mapStateToProps,mapDispatchToProps) (Categories);