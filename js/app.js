import { formController } from "./controllers/formController.js";
import { renderTransactions } from "./services/render/renderTransactions.js";
import { refreshBalanceFromHistory } from "./utils/update/updateBalance.js";
const form = document.getElementById("transaction-form");


refreshBalanceFromHistory();
renderTransactions();


form.addEventListener("submit", (event) => {
  event.preventDefault();

  formController(form);

}
);