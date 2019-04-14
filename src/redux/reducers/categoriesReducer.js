import uuid from 'uuid/v4';

function categoriesArr (state=[], action) {
  switch (action.type) {
    case 'ADD':
      const newCategories = {value:action.title, label:action.title,  id: uuid(), statusInput: false}
      // console.log(newCategories.id);
      localStorage.setItem('categories',JSON.stringify([...state, newCategories]))
      return [...state, newCategories];

      case "storageCategory":
      let categoryBase = JSON.parse(localStorage.getItem('categories'));
      categoryBase = categoryBase === null ? [] : categoryBase;
    return [...categoryBase];  

      case 'EDIT':
      
      // console.log(action.data[0].id);
      if (action.data.some(el => el.statusInput === true)) {
        alert('Ви не закінчили редагування');
        return state;
      }  
      
      let result = action.data.map(el=> el.id === action.id ? {...el, statusInput: true} : el );
      localStorage.setItem('categories',JSON.stringify(result));
      return result;
    
      
      // console.log(newCategories.id);
      
      


      case 'DELETE':
        let rest = action.data.filter(el=> el.id !== action.id);
        localStorage.setItem('categories',JSON.stringify(rest));
        return rest;

        case 'SAVE':
        let saveCategory = action.data.map(el=> el.id === action.id ? {...el, statusInput: false, value: action.title, label: action.title} : el )
        localStorage.setItem('categories',JSON.stringify(saveCategory));
        return saveCategory;

        

        case 'CANCELINPUT':
        let cancel = action.data.map(el=> el.id === action.id ? {...el, statusInput: false} : el )
        return cancel;
      
    default:
      return state;
  }
  }
  
  export default categoriesArr;