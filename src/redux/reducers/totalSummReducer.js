function totalSumm (state = '0.00', action) {
switch (action.type) {
  case 'PLUS':
    let result = (Number.parseFloat(state)*100 + Number.parseFloat(action.value.summ)*100)/100;
    // console.log(result);
    return String(result);
    
    
    case 'MINUS':
    let res = (Number.parseFloat(state)*100 - Number.parseFloat(action.value.summ)*100)/100;
    console.log(result);
    return String(res);

  default:
    return state;
}
}

export default totalSumm;