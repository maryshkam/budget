function first (state=0, action) {
switch (action.type) {
  case 'PLUS':
    return state + action.data;

  default:
    return state;
}
}

export default first;