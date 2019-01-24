import shop from '../api/shop'
import * as types from '../constants/ActionTypes'

const receiveProducts = products => ({
  type: types.RECEIVE_PRODUCTS,
  products: products
})

export const getAllProducts = () => dispatch => {
  shop.getProducts(products => {
    dispatch(receiveProducts(products))
  })
}

const addToCartUnsafe = productId => ({
  type: types.ADD_TO_CART,
  productId
})

export const addToCart = productId => (dispatch, getState) => {
  if (getState().products.byId[productId].inventory > 0) {
    dispatch(addToCartUnsafe(productId))
  }
}

export const removeProductFromCart = (productId, quantity) => (dispatch, getState) => {
  dispatch({
    type: types.REMOVE_FROM_CART,
    productId,
    get quantity() {
      return quantity || this.quantityInCart
    },
    quantityInCart: getState().cart.quantityById[productId],
    inventory: getState().products.byId[productId].inventory
  })
}

export const checkout = products => (dispatch, getState) => {
  const { cart } = getState()

  dispatch({
    type: types.CHECKOUT_REQUEST
  })
  shop.buyProducts(products, () => {
    dispatch({
      type: types.CHECKOUT_SUCCESS,
      cart
    })
    // Replace the line above with line below to rollback on failure:
    // dispatch({ type: types.CHECKOUT_FAILURE, cart })
  })
}

export const toggleModal = () => (dispatch, getState) => {
  const { ui } = getState()
  dispatch({
    type: types.TOGGLE_CART_MODAL,
    modalOpen: !ui.modalOpen
  })
}

export const quantityInputHandler = (event, productId) => (dispatch, getState) => {
  const { products, cart } = getState()
  const inputValue = parseInt(event.target.value)
  console.log(products, cart, inputValue)
}
