function statusMoney (state=false, action){
switch (action.type) {
  case 'DEBET':
  return true;
  case 'CREDIT':
  return false;
  case 'CANCELinput':
  return false;
  default:
    return state;
}
}

export default statusMoney;