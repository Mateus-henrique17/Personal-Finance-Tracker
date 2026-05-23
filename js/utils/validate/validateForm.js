export function validateForm(transactionData) {

  const validationSchema = {
    title: () => !!transactionData.title,
    currency: () => !!transactionData.currency,
    category: () => !!transactionData.category,
    type: () => !!transactionData.type,
    value: () => !isNaN(transactionData.value) && transactionData.value > 0
  };

  const isFormValid = Object.keys(validationSchema).every(key => validationSchema[key]());

  if (!isFormValid) {
    alert("Por favor, preencha todos os campos com valores válidos.");
    return false;
  }

  transactionData.value = Math.round(transactionData.value * 100) / 100;
  return true;
}
