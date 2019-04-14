import {combineReducers} from 'redux';
import first from './firstReducer';
import showModal from './showModalReducer';
import change from './changeInputReducer';
import categoriesArr from './categoriesReducer';
import statusButton from './statusButtonReducer';
import editCategory from './editCategoryReducer';
import statusMoney from './statusMoneyReducer';
import totalSumm from './totalSummReducer';
import historyArr from './historyReducer';
import selectedOption from './selectReducer';

const rootReducer = combineReducers({
  showModal,
  change,
  categoriesArr,
  statusButton,
  editCategory,
  statusMoney,
  totalSumm,
  historyArr,
  selectedOption,
})

export default rootReducer;