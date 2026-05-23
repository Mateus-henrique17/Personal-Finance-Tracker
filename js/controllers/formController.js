import { validateForm } from "../utils/validate/validateForm.js";
import { validateTransaction } from "../utils/validate/validateTransaction.js";
import { saveTransaction } from "../services/save/saveTransaction.js";
import { updateBalance } from "../utils/update/updateBalance.js";


export function formController(formElement) {
  const id = crypto.randomUUID();
  const title = formElement.querySelector("#title")?.value.trim() || "";
  const currency = formElement.querySelector("#currency")?.value.trim() || "";
  const value = parseFloat(formElement.querySelector("#value")?.value) || 0;
  const category = formElement.querySelector("#category")?.value.trim() || "";
  const type = formElement.querySelector('input[name="type"]:checked')?.value || "";
  const description = formElement.querySelector("#description")?.value.trim() || "";
  
  
  const transactionData = { id, title, currency, value, category, type, description, balance: 0 };
  
  if (!validateForm(transactionData)) {
    return null;
  }
  if (!validateTransaction(transactionData)) {
    return null;
  }

  const newBalance = updateBalance(type, value);
  transactionData.balance = newBalance;
  
  saveTransaction(transactionData);

  formElement.reset();
}