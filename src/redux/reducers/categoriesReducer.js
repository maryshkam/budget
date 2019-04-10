import uuid from 'uuid/v4';

function categoriesArr (state=[], action) {
  switch (action.type) {
    case 'ADD':
      const newCategories = {title:action.title, id: uuid(), statusInput: false}
      // console.log(newCategories.id);
      return [...state, newCategories];

      case 'EDIT':
      console.log(action.id);
      let result = action.data.map(el=> el.id === action.id ? {...el, statusInput: true} : el )
      // console.log(newCategories.id);
      return result;
    default:
      return state;
  }
  }
  
  export default categoriesArr;