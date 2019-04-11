import editCategory from "../reducers/editCategoryReducer";

export const categoriesAdd = (change) => ({
  type: "ADD",
  // value: e.target.value,
  title: change,
})

export const categoriesEdit = (e,categoriesArr) => ({
  type: "EDIT",
  id: e.target.id,
  data: categoriesArr,
})

export const categoriesDelete = (e,categoriesArr) => ({
  type: "DELETE",
  id: e.target.id,
  data: categoriesArr,
})

export const categoriesSave = (e,categoriesArr,editCategory) => ({
  type: "SAVE",
  id: e.target.id,
  data: categoriesArr,
  title: editCategory,
})

export const categoriesCancel =(e,categoriesArr) => ({
  type: 'CANCELINPUT',
  id: e.target.id,
  data: categoriesArr,
})