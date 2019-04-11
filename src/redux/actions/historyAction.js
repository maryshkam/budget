export const saveToHistory = (change, statusMoney) => ({
  type: 'saveToHistory',
  value: change,
  statusMoney: statusMoney,
})