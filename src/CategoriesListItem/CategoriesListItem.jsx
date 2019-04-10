import React from 'react';
import {connect} from 'react-redux';
import {saveButton} from '../redux/actions/statusButtonAction';
import {cancelButton} from '../redux/actions/statusButtonAction';
import {editButton} from '../redux/actions/statusButtonAction';
import {deleteButton} from '../redux/actions/statusButtonAction';
import {categories} from '../redux/actions/changeInputAction';
import {editCategory} from '../redux/actions/editCategoryAction';
import {categoriesEdit} from '../redux/actions/categoriesAction';
import './CategoriesListItem.css';

const CategoriesListItem = ({el,change, categories, status, editButton, saveButton, cancelButton, deleteButton, editInput, editCategory, categoriesArr, categoriesEdit}) => {
  return (
    

     
    <div className='list_item'>
      {/* <p className='list_item_title'>{el.title}</p> */}
      {categoriesArr.statusInput ? <input type='text' name='title' value={editCategory}/> : <p className='list_item_title'>{el.title}</p>}
      {categoriesArr.statusInput ? <button onClick={saveButton}>{'SAVE'}</button>: <button id={el.id} onClick={(e)=> {categoriesEdit(e,categoriesArr) }}>{'EDIT'}</button>}
      {status ? <button onClick={cancelButton}>{'CANCEL'}</button>: <button >{'DELETE'}</button>}

      
    

      

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
  // editInput: function(e,categoriesArr) {
  //   dispatch(editCategory(e,categoriesArr))
  // }

  categoriesEdit: function(e,categoriesArr) {
    dispatch(categoriesEdit(e,categoriesArr))
  }

  // add: function(e, change) {
  //   e.preventDefault();
  //   dispatch(categoriesAdd(change))
  // },
  
}
}

export default connect(mapStateToProps, mapDispatchToProps) (CategoriesListItem);