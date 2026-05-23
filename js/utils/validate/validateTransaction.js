export function validateTransaction(transactionData) {
  if (transactionData.type !== "expense") {
    return true;
  }
  const currentBalance = parseFloat(localStorage.getItem("balance")) || 0;

  if (currentBalance - transactionData.value < 0) {
    alert("Transação inválida: saldo insuficiente.");
    return false;
  }
  return true;
}
