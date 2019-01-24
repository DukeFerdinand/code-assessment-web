import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CHECKOUT_REQUEST,
  CHECKOUT_FAILURE
} from '../constants/ActionTypes'

const initialState = {
  addedIds: [],
  quantityById: {}
}

const addedIds = (state = initialState.addedIds, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      if (state.indexOf(action.productId) !== -1) {
        return state
      }
      return [ ...state, action.productId ]
    case REMOVE_FROM_CART:
      // Had to pass this in as it's the easiest way to access the 'inCart' total
      if (action.quantityInCart - action.quantity === 0) {
        return [...state.filter(productId => productId !== action.productId)]
      }
      return state
    default:
      return state
  }
}

const quantityById = (state = initialState.quantityById, action) => {
  console.log(action)
  switch (action.type) {
    case ADD_TO_CART:
      let { productId } = action
      return { ...state,
        [productId]: (state[productId] || 0) + 1
      }
    case REMOVE_FROM_CART:
      // state[action.productId] will be the number of said item in the cart
      if (state[action.productId] - action.quantity === 0) {
        // Easy one-liner to remove the product from the state object
        const { [action.productId]: _, ...newState } = state
        return {
          ...newState
        }
      }
      console.log(state)
      return {
        ...state,
        [action.productId]: state[action.productId] - action.quantity
      }
    default:
      return state
  }
}



export const getQuantity = (state, productId) =>
  state.quantityById[productId] || 0

export const getAddedIds = state => state.addedIds

const cart = (state = initialState, action) => {
  switch (action.type) {
    case CHECKOUT_REQUEST:
      return initialState
    case CHECKOUT_FAILURE:
      return action.cart
    default:
      return {
        addedIds: addedIds(state.addedIds, action),
        quantityById: quantityById(state.quantityById, action)
      }
  }
}

export default cart
