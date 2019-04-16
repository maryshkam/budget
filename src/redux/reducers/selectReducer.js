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
  const obj = {value: change.select, label: change.select};
  console.log(obj);
return obj;
 
   default:
     return state;
 }
}

export default selectedOption;