

import { describe, expect, test } from 'vitest'
import { filterByCategory } from '../../js/catalog-filter.js'

const products = [
  { id: 1, nombre: 'Sherlock Quack', tipo: 'Pop Culture Collection' },
  { id: 2, nombre: 'Galactic Explorer Duck', tipo: 'Professional Collection' },
  { id: 3, nombre: 'Chef Ducky', tipo: 'Professional Collection' },
];

test('returns all products when category is All Ducks', () => {
  expect(filterByCategory(products, 'All Ducks')).toHaveLength(3)
})

test('filters products by category', () => {
  const result = filterByCategory(products, 'Professional Collection')

  expect(result).toHaveLength(2)
})