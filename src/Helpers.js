// LOCAL STORAGE

export const getData = (key) => {
  return JSON.parse(localStorage.getItem(key));
};

//delete item
export const deleteItem = ({ key }) => {
  return localStorage.removeItem(key);
};

//create payment

export const createPayment = ({ name, amount }) => {
  const newPayment = {
    id: crypto.randomUUID(), // random UUID is used to create random unique keys in JS
    name: name,
    createAt: Date.now(),
    amount: +amount,
  };
  const paymentHistory = getData("payments") ?? [];
  return localStorage.setItem(
    "payments",
    JSON.stringify([...paymentHistory, newPayment])
  );
};
