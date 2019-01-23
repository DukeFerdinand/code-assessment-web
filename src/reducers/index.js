import { combineReducers } from 'redux'
import cart, * as fromCart from './cart'
import products, * as fromProducts from './products'
import ui, * as fromUI from './ui'

export default combineReducers({
  cart,
  products,
  ui
})

const getAddedIds = state => fromCart.getAddedIds(state.cart)
const getQuantity = (state, id) => fromCart.getQuantity(state.cart, id)
const getProduct = (state, id) => fromProducts.getProduct(state.products, id)

export const getModalStatus = state => fromUI.getModalStatus(state.ui)

export const getTotal = state =>
  getAddedIds(state)
    .reduce((total, id) =>
      total + getProduct(state, id).price * getQuantity(state, id),
      0
    )
    .toFixed(2)

export const getCartProducts = state =>
  getAddedIds(state).map(id => ({
    ...getProduct(state, id),
    quantity: getQuantity(state, id)
  }))

// Convenience function for returning number of items in cart
export const getItemCount = state => {
  const products = getCartProducts(state)
  let itemCount = 0
  products.forEach(product => {
    itemCount += product.quantity
  });
  return itemCount
}
