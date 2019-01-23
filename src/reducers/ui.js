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
      document.body.style.overflow = action.modalOpen ? 'hidden' : 'initial'
      return { modalOpen: action.modalOpen }
    default:
      return state
  }
}

export default ui