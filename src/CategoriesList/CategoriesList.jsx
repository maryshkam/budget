import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import './CategoriesList.css';
import CategoriesListItem from '../CategoriesListItem/CategoriesListItem';

const CategoriesList = ({categoriesArr}) => {
  return (
    <div className='list'>
      <h3 className='list_name'>List of categories:</h3>
      <ul className='list_box'>
{categoriesArr.length !== 0 ? categoriesArr.map((el)=> <CategoriesListItem el={el} key={el.id}/>) : null }

      </ul>
    </div>
  );
};

function mapStateToProps (state) {
  return {
    categoriesArr: state.categoriesArr,
  }
}


function mapDispatchToProps (dispatch) {
return {
}
}

CategoriesList.propTypes = {
  
  
  
  categoriesArr: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      id: PropTypes.string,
      statusInput: PropTypes.bool
    })
  )

};


export default connect(mapStateToProps, mapDispatchToProps) (CategoriesList);