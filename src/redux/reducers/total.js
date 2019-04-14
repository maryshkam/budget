function total (state=0, action) {
switch (action.type) {
  case 'total':
    let totalsum = action.data.reduce((acc, obj)=> obj.statusMoney ? acc+obj.summ : acc-obj.summ, 0);
    return totalsum;

  default:
    return state;
}
}

export default total;