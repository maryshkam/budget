function selectedOption (state=null, action) {
 switch (action.type) {
   case 'select':

     console.log(selectedOption);
     return action.data;
 
   default:
     return state;
 }
}

export default selectedOption;