import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { checkout, toggleModal } from '../actions'
import { getTotal, getCartProducts, getModalStatus } from '../reducers'
import Cart from '../components/Cart'

const CartContainer = ({ products, total, modalOpen, checkout, toggleModal }) => (
  <div className={`cart-wrapper ${modalOpen ? 'display-cart' : ''}`}>
    <Cart
      products={products}
      total={total}
      onCloseCartClicked={() => {
        console.log('closing')
        console.log(toggleModal)
        toggleModal()
      }}
      onCheckoutClicked={() => checkout(products)} />
  </div>
)

CartContainer.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired
  })).isRequired,
  total: PropTypes.string,
  checkout: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  products: getCartProducts(state),
  total: getTotal(state),
  modalOpen: getModalStatus(state)
})

export default connect(mapStateToProps, { checkout, toggleModal })(CartContainer)
