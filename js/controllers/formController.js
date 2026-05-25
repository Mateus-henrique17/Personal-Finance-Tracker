import { validateForm } from "../utils/validate/validateForm.js";
import { validateTransaction } from "../utils/validate/validateTransaction.js";
import { saveTransaction } from "../services/save/saveTransaction.js";
import { refreshBalanceFromHistory } from "../utils/update/updateBalance.js";
import { renderTransactions } from "../services/render/renderTransactions.js";

export function formController(formElement) {
  const title = formElement.querySelector("#title")?.value.trim() || "";
  const currency = formElement.querySelector("#currency")?.value.trim() || "";
  const value = parseFloat(formElement.querySelector("#value")?.value) || 0;
  const category = formElement.querySelector("#category")?.value.trim() || "";
  const type = formElement.querySelector('input[name="type"]:checked')?.value || "";
  const description = formElement.querySelector("#description")?.value.trim() || "";

  const editingId = formElement.dataset.editingId;
  
  const transactionData = { id: editingId || Date.now().toString(), title, currency, value, category, type, description };
  
  if (!validateForm(transactionData) || !validateTransaction(transactionData)) {
    return null;
  }

  saveTransaction(transactionData);

  refreshBalanceFromHistory();

  renderTransactions();

  formElement.reset();
  delete formElement.dataset.editingId;
}
