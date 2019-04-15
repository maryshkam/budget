function selectedOption (state=null, action) {
 switch (action.type) {
   case 'select':

     console.log(action.data);
     return action.data;

  case 'clearSelect':
  return null;

  case 'changeSelect':
  const change = action.data.find(el=> el.id === action.id);
  console.log(change);
return {value: change.title, label: change.title};
 
   default:
     return state;
 }
}

export default selectedOption;