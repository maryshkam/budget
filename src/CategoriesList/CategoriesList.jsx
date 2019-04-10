import React from 'react';
import {connect} from 'react-redux';
import './CategoriesList.css';
import CategoriesListItem from '../CategoriesListItem/CategoriesListItem';

const CategoriesList = ({categoriesArr}) => {
  return (
    <div className='list'>
      <h3 className='list_name'>Перелік категорій:</h3>
      <ul className='list_box'>
{categoriesArr.length !== 0 ? categoriesArr.map((el)=> <CategoriesListItem el={el} key={el.title}/>) : null }

      </ul>
    </div>
  );
};

function mapStateToProps (state) {
  return {
    // flag: state.showModal,
    change: state.change,
    categoriesArr: state.categoriesArr,
  }
}


function mapDispatchToProps (dispatch) {
return {
  
  
  // categories: function(e) {
  //   dispatch(categories(e))
  // },

  // add: function(e, change) {
  //   e.preventDefault();
  //   dispatch(categoriesAdd(change))
  // },
  
}
}

export default connect(mapStateToProps, mapDispatchToProps) (CategoriesList);