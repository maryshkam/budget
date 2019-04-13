export const saveToHistory = (change, statusMoney, statusButton,historyArr) => ({
  type: 'saveToHistory',
  value: change,
  statusMoney: statusMoney,
  status: statusButton,
  data: historyArr,
})

export const storage = () => ({
type: 'STORAGE',
})

export const deleteFromHistory = (e, historyArr) => ({
type: 'deleteFromHistory',
id: e.target.id,
data: historyArr,
})