export function filterByCategory(products, category) {
  if (category === 'All Ducks') {
    return products
  }

  return products.filter(product => product.tipo === category)
}