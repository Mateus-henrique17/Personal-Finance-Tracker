export function saveEditedTransaction(formElement) {
  const transactionId = formElement.dataset.editingId;
  
  if(!transactionId) return;

  let transactions = JSON.parse(localStorage.getItem('transactions'));

  transactions = transactions.map(t => {
    if (t.id === transactionId) {
      return {
        id: t.id,
        title: formElement.querySelector('#title').value.trim(),
        currency: formElement.querySelector('#currency').value.trim(),
        value: parseFloat(formElement.querySelector('#value').value) || 0,
        category: formElement.querySelector('#category').value.trim(),
        type: formElement.querySelector('input[name="type"]:checked').value,
        description: formElement.querySelector('#description').value.trim(),
        balance: t.balance
      };
    }
    return t;
  });

  localStorage.setItem('transactions', JSON.stringify(transactions));
  delete formElement.dataset.editingId;
}