import {combineReducers} from 'redux';
import first from './firstReducer';
import showModal from './showModalReducer';
import change from './changeInputReducer';
import categoriesArr from './categoriesReducer';
import statusButton from './statusButtonReducer';
import editCategory from './editCategoryReducer';

const rootReducer = combineReducers({
  showModal,
  change,
  categoriesArr,
  statusButton,
  editCategory,
})

export default rootReducer;