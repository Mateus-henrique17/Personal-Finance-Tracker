export function editTransaction(transactionId) {
  const transactions = JSON.parse(localStorage.getItem('transactions'));

  const transaction = transactions.find(t => t.id === transactionId);

  const formElement = document.getElementById('transaction-form');

  formElement.querySelector('#title').value = transaction.title;
  formElement.querySelector('#currency').value = transaction.currency;
  formElement.querySelector('#value').value = transaction.value;
  formElement.querySelector('#category').value = transaction.category;

  const typeInput = formElement.querySelector(`input[name="type"][value="${transaction.type}"]`);
  if (typeInput) {
    typeInput.checked = true;
  }

  formElement.querySelector('#description').value = transaction.description;
  formElement.dataset.editingId = transactionId;
}