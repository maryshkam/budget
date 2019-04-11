import uuid from 'uuid/v4';

function categoriesArr (state=[], action) {
  switch (action.type) {
    case 'ADD':
      const newCategories = {title:action.title, id: uuid(), statusInput: false}
      // console.log(newCategories.id);
      return [...state, newCategories];

      case 'EDIT':
      // console.log(action.data[0].id);
      // if (action.data.some(el => el.statusInput === true)) {
      //   alert('Ви не закінчили редагування');
      //   return;
      // }  
      
      let result = action.data.map(el=> el.id === action.id ? {...el, statusInput: true} : el );
      return result;
    
      
      // console.log(newCategories.id);
      
      


      case 'DELETE':
        let rest = action.data.filter(el=> el.id !== action.id);
        return rest;

        case 'SAVE':
        let saveCategory = action.data.map(el=> el.id === action.id ? {...el, statusInput: false, title: action.title} : el )
        return saveCategory;

        

        case 'CANCELINPUT':
        let cancel = action.data.map(el=> el.id === action.id ? {...el, statusInput: false} : el )
        return cancel;
      
    default:
      return state;
  }
  }
  
  export default categoriesArr;