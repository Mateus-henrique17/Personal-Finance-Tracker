import { formController } from "./controllers/formController.js";
import { renderTransactions } from "./services/render/renderTransactions.js";
const form = document.getElementById("transaction-form");

renderTransactions();


form.addEventListener("submit", (event) => {
  event.preventDefault();

  formController(form);

  renderTransactions();

}
);