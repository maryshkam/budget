import uuid from 'uuid/v4';

function historyArr (state=[], action) {
  switch (action.type) {
    case 'saveToHistory':
    console.log(action.select.value);
      const newRecord ={...action.value, id: uuid(), select: action.select.value, statusMoney: action.statusMoney};

      localStorage.setItem('budget', JSON.stringify(action.status ? action.data.map(el=> el.id === action.value.id  ? action.value: el) : [...state,newRecord]))
      
      // return action.status ? state.map(el=> el.id === action.value.id ? action.value : el) : [...state, newContact]
      
    return action.status ? action.data.map(el=> el.id === action.value.id  ? action.value: el) : [...state,newRecord];

    case "STORAGE":
    let historyBase = JSON.parse(localStorage.getItem('budget'));
    historyBase = historyBase === null ? [] : historyBase;
    return [...historyBase];  

    case 'deleteFromHistory':
    // console.log(action.id);
    // console.log(action.data);
    let result = action.data.filter(el=>el.id !== action.id);
    localStorage.setItem('budget', JSON.stringify(result));

    return result;
    default:
      return state;
  }
}

export default historyArr;