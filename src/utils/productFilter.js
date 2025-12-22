export const getTopProducts = (products, condition, limit = 3) => {
  return products
    .filter(condition)
    .slice(0, limit);
};
