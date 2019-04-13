function editCategory (state='', action) {
  switch (action.type) {
    case 'EDITCATEGORY':
    // console.log(action);
  
    const input = action.data.find(el=> el.id === action.id).title;
      return input;
      case 'CHANGECATEGORY':
    let newInput = action.value;
      return newInput ;
      
  
      
    default:
      return state;
  }
  }
  
  export default editCategory;