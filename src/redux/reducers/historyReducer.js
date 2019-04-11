import uuid from 'uuid/v4';

function historyArr (state=[], action) {
  switch (action.type) {
    case 'saveToHistory':
      const newRecord ={...action.value, id: uuid(), statusMoney: action.statusMoney};
      return [...state, newRecord];
      
            
         
    
      


    default:
      return state;
  }
}

export default historyArr;