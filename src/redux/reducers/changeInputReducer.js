function change (state = {
  summ: '',
  date: '',
  description: '',
  categories: '',
}, action) {
  switch (action.type) {
    case "SUMM": 
      return {...state, summ: action.value};
    case "DATE": 
      return {...state, date: action.value};
    case "DESCRIPTION": 
      return {...state, description: action.value};
    case "CATEGORIES": 
      return {...state, categories: action.value};
    
    case "EDITMODAL":
      let result = action.data.find(el => el.id === action.id);
      console.log(result);
      return result;

    case "CLEAR":
      return {
        summ: '',
        date: '',
        description: '',
        categories: '',
      };
    
    default:
      return state;
  }


}

export default change;