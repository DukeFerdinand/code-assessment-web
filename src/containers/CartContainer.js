import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { checkout, toggleModal, removeProductFromCart, addToCart, quantityInputHandler } from '../actions'
import { getTotal, getCartProducts, getModalStatus } from '../reducers'
import Cart from '../components/Cart'

const CartContainer = ({
  products,
  total,
  modalOpen,
  checkout,
  toggleModal,
  removeProductFromCart,
  addToCart,
  quantityInputHandler
}) => {
  return (
  <div className={`cart-wrapper ${modalOpen ? 'display-cart' : ''}`}>
    <Cart
      products={products}
      total={total}
      addToCart={addToCart}
      quantityInputHandler={quantityInputHandler}
      removeProductFromCart={removeProductFromCart}
      onCloseCartClicked={toggleModal}
      onCheckoutClicked={() => checkout(products)} />
  </div>
)}

CartContainer.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired
  })).isRequired,
  total: PropTypes.string,
  checkout: PropTypes.func.isRequired,
  modalOpen: PropTypes.bool,
  toggleModal: PropTypes.func,
  removeProductFromCart: PropTypes.func,
  addToCart: PropTypes.func
}

const mapStateToProps = (state) => ({
  products: getCartProducts(state),
  total: getTotal(state),
  modalOpen: getModalStatus(state)
})

export default connect(
    mapStateToProps,
    { checkout, toggleModal, removeProductFromCart, addToCart, quantityInputHandler }
  )(CartContainer)
