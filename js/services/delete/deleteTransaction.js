import { refreshBalanceFromHistory } from "../../utils/update/updateBalance.js";
import { renderTransactions } from "../render/renderTransactions.js";

export function deleteTransaction(id) {
  const transactions = JSON.parse(localStorage.getItem('transactions')) || [];

  const updatedTransactions = transactions.filter(transaction => transaction.id != id);

  localStorage.setItem('transactions', JSON.stringify(updatedTransactions));

  refreshBalanceFromHistory();

  renderTransactions();
}