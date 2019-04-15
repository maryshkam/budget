export const selectedCategory = (selectedOption) => ({
  type: 'select',
  // value: e.target.value,
  data: selectedOption,
})

export const clearSelect = () => ({
  type: 'clearSelect',
  // data: selectedOption,
})

export const changeSelect = (e,historyArr) => ({
  type: 'changeSelect',
  id: e.target.id,
  data: historyArr,
})