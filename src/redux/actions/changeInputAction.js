export const summ = (e) => ({
  type: 'SUMM',
  value: e.target.value,
})

export const date = (e) => ({
  type: 'DATE',
  value: e.target.value,
})

export const description = (e) => ({
  type: 'DESCRIPTION',
  value: e.target.value,
})

export const categories = (e) => ({
  type: 'CATEGORIES',
  value: e.target.value,
})

export const clear =(change) => ({
  type: 'CLEAR',
})

export const cancel = (e,) => ({
  type: 'CANCEL',
}) 