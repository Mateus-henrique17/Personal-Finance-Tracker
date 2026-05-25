export function updateBalance() {
  const transactions = JSON.parse(localStorage.getItem('transactions')) || [];
  
  const newBalance = transactions.reduce((acc, t) => {
    return t.type === 'income' ? acc + t.value : acc - t.value;
  }, 0);

  localStorage.setItem("balance", newBalance);
  return newBalance;
}

export function refreshBalanceFromHistory() {
  const transactions = JSON.parse(localStorage.getItem('transactions')) || [];
  
  const newBalance = transactions.reduce((acc, t) => {
    return t.type === 'income' ? acc + t.value : acc - t.value;
  }, 0);

  localStorage.setItem("balance", newBalance);
  return newBalance;
}