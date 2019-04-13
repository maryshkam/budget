import React from 'react';
import {connect} from 'react-redux';
import {saveButton} from '../redux/actions/statusButtonAction';
import {cancelButton} from '../redux/actions/statusButtonAction';
import {editButton} from '../redux/actions/statusButtonAction';
import {deleteButton} from '../redux/actions/statusButtonAction';
import {categories} from '../redux/actions/changeInputAction';
import {editCategory} from '../redux/actions/editCategoryAction';
import {categoriesEdit} from '../redux/actions/categoriesAction';
import {categoriesDelete} from '../redux/actions/categoriesAction';
import {changeCategory} from '../redux/actions/editCategoryAction';
import {categoriesSave} from '../redux/actions/categoriesAction';
import {categoriesCancel} from '../redux/actions/categoriesAction';

import './CategoriesListItem.css';

const CategoriesListItem = ({el,change, categories, status, editButton, saveButton, cancelButton, deleteButton, editInput, editCategory, categoriesArr, categoriesEdit, categoriesDelete, changeCategory, categoriesSave, categoriesCancel}) => {
  return (
    

     
    <div className='list_item'>
      {/* <p className='list_item_title'>{el.title}</p> */}
      {el.statusInput ? <input className='list_item_input' type='text' name='title' onChange={changeCategory}  value={editCategory}/> : <p className='list_item_title'>{el.title}</p>}
      {el.statusInput ? <button className='btn_style'  id={el.id} onClick={(e)=> {categoriesSave(e,categoriesArr,editCategory)}}>{'SAVE'}</button>: <button className='btn_style' id={el.id} onClick={(e)=> {categoriesEdit(e,categoriesArr); editInput(e,categoriesArr) }}>{'EDIT'}</button>}
      {el.statusInput ? <button className='btn_style'  id={el.id} onClick={(e)=> {categoriesCancel(e,categoriesArr)}}>{'CANCEL'}</button>: <button className='btn_style' onClick={(e)=> {categoriesDelete(e,categoriesArr)}} id={el.id}>{'DELETE'}</button>}

      
    

      

    </div>
  );
};

function mapStateToProps (state) {
  return {
    // flag: state.showModal,
    change: state.change,
    categoriesArr: state.categoriesArr,
    status: state.statusButton,
    editCategory: state.editCategory,
  }
}


function mapDispatchToProps (dispatch) {
return {
  categories: function(e) {
    dispatch(categories(e))
  },
  
  editButton: function() {
    dispatch(editButton())
  },
  saveButton: function() {
    dispatch(saveButton())
  },
  cancelButton: function() {
    dispatch(cancelButton())
  },
  deleteButton: function() {
    dispatch(deleteButton())
  },
  editInput: function(e,categoriesArr) {
    dispatch(editCategory(e,categoriesArr))
  },

  categoriesEdit: function(e,categoriesArr) {
    dispatch(categoriesEdit(e,categoriesArr))
  },

  changeCategory: function(e,editCategory) {
    dispatch(changeCategory(e,editCategory))
  },

  categoriesDelete: function(e,categoriesArr) {
    dispatch(categoriesDelete(e,categoriesArr))
  },

  categoriesSave: function(e,categoriesArr,editCategory) {
    dispatch(categoriesSave(e,categoriesArr,editCategory))
  },
  categoriesCancel: function(e,categoriesArr) {
    dispatch(categoriesCancel(e,categoriesArr))
  }

  // add: function(e, change) {
  //   e.preventDefault();
  //   dispatch(categoriesAdd(change))
  // },
  
}
}

export default connect(mapStateToProps, mapDispatchToProps) (CategoriesListItem);