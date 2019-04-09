function categoriesArr (state=[], action) {
  switch (action.type) {
    case 'ADD':
      const newCategories = {...action.value, id: Date.now()}
      return [...state, newCategories];
  
    default:
      return state;
  }
  }
  
  export default categoriesArr;