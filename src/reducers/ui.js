import {
  TOGGLE_CART_MODAL
} from '../constants/ActionTypes'

const initialState = {
  modalOpen: false
}

export const getModalStatus = (state) => state.modalOpen

export function ui(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_CART_MODAL:
      return { modalOpen: action.modalOpen }
    default:
      return state
  }
}

export default ui