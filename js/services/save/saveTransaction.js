export  async function saveTransaction(transaction) {
  alert('Transaction saved!');

  const transactions = JSON.parse(localStorage.getItem('transactions')) || [];

  transactions.push(transaction);

  localStorage.setItem('transactions', JSON.stringify(transactions));
  return transactions;

}