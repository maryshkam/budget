function showModal (state = false, action) {
  switch (action.type) {
    case 'CLICK':
      return true;
    case 'CLOSE':
      return false;
    case 'CANCEL':
      return false;
    default:
      return state;
  }
}

export default showModal;
