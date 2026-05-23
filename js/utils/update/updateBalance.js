export function updateBalance(type, value) {

  const currentBalance = parseFloat(localStorage.getItem("balance")) || 0;
  let newBalance = currentBalance;

  if (type === "income") {
  newBalance = currentBalance + value;
  } 
  
  else {
    newBalance = currentBalance - value;
  }

    localStorage.setItem("balance", newBalance);
    return newBalance;
}