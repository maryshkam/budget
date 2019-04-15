function selectedOption (state=null, action) {
 switch (action.type) {
   case 'select':

     console.log(action.data);
     return action.data;
 
   default:
     return state;
 }
}

export default selectedOption;