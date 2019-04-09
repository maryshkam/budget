import {combineReducers} from 'redux';
import first from './firstReducer';
import showModal from './showModalReducer';
import change from './changeInputReducer';
import categoriesArr from './categoriesReducer';

const rootReducer = combineReducers({
  showModal,
  change,
  categoriesArr,
})

export default rootReducer;