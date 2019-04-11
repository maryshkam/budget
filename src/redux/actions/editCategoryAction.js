export const editCategory = (e, categoriesArr) => ({
  type: 'EDITCATEGORY',
  id: e.target.id,
  data: categoriesArr,
})

export const changeCategory = (e) => ({
  type: 'CHANGECATEGORY',
  value: e.target.value,
  // value: editCategory,

})