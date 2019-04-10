export const categoriesAdd = (change) => ({
  type: "ADD",
  // value: e.target.value,
  title: change,
})

export const categoriesEdit = (e,categoriesArr) => ({
  type: "EDIT",
  id: e.target.dataset.id,
  data: categoriesArr,
})