export const addToCart = (product) => {
  return {
    type: "ADD_TO_CART",
    payload: product,
  };
};

export const removeFromChart = (product) => {
  return {
    type: "REMOVE_FROM_CART",
    payload: product.id,
  };
};
