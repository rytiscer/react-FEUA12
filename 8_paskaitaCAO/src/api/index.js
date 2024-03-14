export const fetchProducts = () => {
  return fetch(
    "https://65f1fcda034bdbecc7642cdc.mockapi.io/api/v1/products"
  ).then((resp) => resp.json());
};
