import { editTransaction } from "../edit/editTransaction.js";

export function renderTransactions() {
  const transactions = JSON.parse(localStorage.getItem("transactions")) || [];

  const currentBalance = parseFloat(localStorage.getItem("balance")) || 0;

  const formattedBalance = currentBalance.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  const formBalanceElement = document.getElementById("form-balance");
  if (formBalanceElement) {
    formBalanceElement.innerHTML = `<strong style="color: #27ae60;">${formattedBalance}</strong>`;
  }

  let existingSection = document.getElementById("transactions-section");

  if (existingSection) {
    existingSection.innerHTML = "";
  } else {
    existingSection = document.createElement("section");
    existingSection.id = "transactions-section";
    document.body.appendChild(existingSection);
  }

  if (transactions.length === 0) {
    existingSection.innerHTML =
      '<h2>Transações</h2><p class="empty-message">Nenhuma transação cadastrada.</p>';
    return;
  }

  const title = document.createElement("h2");
  title.textContent = "Transações";
  existingSection.appendChild(title);

  const list = document.createElement("div");
  list.className = "transactions-grid";

  transactions.forEach((transaction) => {
    const card = document.createElement("div");
    card.className = `transaction-card card-${transaction.type}`;

    const formattedValue = Number(transaction.value).toLocaleString("pt-BR", {
      style: "currency",
      currency: transaction.currency || "BRL",
    });

    const signal = transaction.type === "expense" ? "-" : "+";

    card.innerHTML = `
      <div class="card-header">
        <h3>${transaction.title}</h3>
        <span class="card-category">${transaction.category}</span>
      </div>
      <div class="card-body">
        <button class="edit-button" data-id="${transaction.id}">Editar</button>
        <p class="card-value">${signal} ${formattedValue}</p>
        <span class="card-badge">${transaction.type === "expense" ? "Despesa" : "Receita"}</span>
      </div>
    `;

    const btnEditar = card.querySelector(".edit-button");
    btnEditar.addEventListener("click", () => {
      window.scrollTo({
        top: 100,
        behavior: "smooth",
      });
      editTransaction(transaction.id);
    });
    list.appendChild(card);
  });

  existingSection.appendChild(list);
}
