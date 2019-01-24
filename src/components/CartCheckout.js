import React from 'react'
import PropTypes from 'prop-types'

import '../styles/components/CartCheckout.scss'

const CartCheckout = ({ total, onCheckoutClicked }) => {
  const findTax = total => {
    return {
      subtotal: total,
      // Totally arbitrary .08% sales tax
      tax: (total * .08).toFixed(2),
      get finalTotal() {
        return (parseFloat(this.subtotal) + parseFloat(this.tax)).toFixed(2)
      }
    }
  }
  const { subtotal, tax, finalTotal } = findTax(total)
  return (
    <div className="checkout-wrapper">
      <hr className="divider" />
      <div className="checkout-row">
        <p className="checkout-row-title">Subtotal</p>
        <p className="checkout-row-price checkout-subtotal">&#36;{subtotal}</p>
      </div>
      <div className="checkout-row">
        <p className="checkout-row-title">Tax</p>
        <p className="checkout-row-price checkout-tax">&#36;{tax}</p>
      </div>
      <hr className="divider" />
      <div className="checkout-row">
        <p className="checkout-row-title">Total</p>
        <p className="checkout-row-price checkout-total">&#36;{finalTotal}</p>
      </div>
      <div className="checkout-row checkout-row-final">
        <button className="checkout-button" onClick={onCheckoutClicked}>
          CHECKOUT
        </button>
      </div>
    </div>
  )

}

CartCheckout.PropTypes = {
  total: PropTypes.number.isRequired,
  onCheckoutClicked: PropTypes.func.isRequired
}

export default CartCheckout