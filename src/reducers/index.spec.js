import { getTotal, getCartProducts, getItemCount } from './index'

describe('selectors', () => {
  const state = {
    cart: {
      addedIds: [ 1, 2, 3 ],
      quantityById: {
        1: 4,
        2: 2,
        3: 1
      }
    },
    products: {
      byId: {
        1: {
          id: 1,
          price: { value: 1.99, currency: 'USD' }
        },
        2: {
          id: 1,
          price: { value: 4.99, currency: 'USD' }
        },
        3: {
          id: 1,
          price: { value: 9.99, currency: 'USD' }
        }
      }
    }
  }

  describe('getTotal', () => {
    it('should return price total', () => {
      expect(getTotal(state)).toBe('27.93')
    })
  })

  describe('getCartProducts', () => {
    it('should return products with quantity', () => {
      expect(getCartProducts(state)).toEqual([
        {
          id: 1,
          price: { value: 1.99, currency: 'USD' },
          quantity: 4
        },
        {
          id: 1,
          price: { value: 4.99, currency: 'USD' },
          quantity: 2
        },
        {
          id: 1,
          price: { value: 9.99, currency: 'USD' },
          quantity: 1
        }
      ])
    })
  })

  describe('getItemCount', () => {
    it('should return the number of items currently in the cart', () => {
      expect(getItemCount(state)).toBe(7)
    })
  });
})
