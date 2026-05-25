export function saveTransaction(transaction, editingId) {
  const transactions = JSON.parse(localStorage.getItem("transactions")) || [];

  if (editingId) {
    const index = transactions.findIndex(t => t.id === editingId);
    if (index !== -1) {
      transactions[index] = { ...transaction, id: editingId };
    }
  } else {
    transactions.push(transaction);
  }

  localStorage.setItem("transactions", JSON.stringify(transactions));
  
  setTimeout(() => {
    alert(editingId ? "Transaction updated!" : "Transaction saved!");
  }, 50);
  
  return transactions;
}
