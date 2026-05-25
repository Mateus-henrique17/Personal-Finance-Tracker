export function saveTransaction(transaction) {
  const transactions = JSON.parse(localStorage.getItem("transactions")) || [];

  const index = transactions.findIndex(t => t.id === transaction.id);
  
  if (index !== -1) {
    transactions[index] = transaction;
  } else {
    transactions.push(transaction);
  }

  localStorage.setItem("transactions", JSON.stringify(transactions));
  
  setTimeout(() => {
    alert(index !== -1 ? "Transaction updated!" : "Transaction saved!");
  }, 50);
  
  return transactions;
}
