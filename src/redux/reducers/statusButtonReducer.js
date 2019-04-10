function statusButton (state=false, action){
  switch (action.type) {
    case 'EDITBUTTON':
      return true;
    case 'DELETEBUTTON':
      return true;
    case 'CANCELBUTTON':
      return false;
    case 'SAVEBUTTON':
      return false;
    default:
      return state;
  }
}

export default statusButton;