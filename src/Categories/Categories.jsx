import React from 'react';
import {connect} from 'react-redux';
import {categories} from '../redux/actions/changeInputAction';
import {categoriesAdd} from '../redux/actions/categoriesAction';
import './Categories.css';

const Categories = ({categories, add}) => {
  return (
    <div className='Categories_wrapper'>
    <div className="categories_form_wrapper">
      <form className='categoties_form' onSubmit={add}>
        <input type="text" placeholder='input categories' className='categories_name' onChange={categories}/>
        <input type="submit" value="Зберегти" className='btn_save'/>
      </form>
      </div>
      <div className="gategories_list">
      <p>Категорії</p>
      <ul>
        <li>products</li>
        <li>service</li>
        <li>dress</li>
        <li>tel</li>
        <li>transport</li>
        <li>party</li>
      </ul>
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
    dispatch(categoriesAdd(e,change))
  },
  
}
}


export default connect(mapStateToProps,mapDispatchToProps) (Categories);