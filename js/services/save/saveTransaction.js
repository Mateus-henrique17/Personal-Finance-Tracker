export function saveTransaction(transaction) {
  const transactions = JSON.parse(localStorage.getItem("transactions")) || [];

  transactions.push(transaction);

  localStorage.setItem("transactions", JSON.stringify(transactions));
  setTimeout(() => {
    alert("Transaction saved!");
  }, 50);
  return transactions;
}
