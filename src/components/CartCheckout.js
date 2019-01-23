import React from 'react'
import PropTypes from 'prop-types'

import '../styles/components/CartCheckout.scss'

export default class CartCheckout extends React.Component {
  constructor(props) {
    super(props)

    this.totals = this.findTax(props.total)
  }
  findTax(total) {
    return {
      subtotal: total,
      tax: (total * .08).toFixed(2),
      get total() {
        return (parseFloat(this.subtotal) + parseFloat(this.tax)).toFixed(2)
      }
    }
  }
  render() {
    const { subtotal, tax, total } = this.totals
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
          <p className="checkout-row-price checkout-total">&#36;{total}</p>
        </div>
        <div className="checkout-row checkout-row-final">
          <button className="checkout-button" onClick={this.props.onCheckoutClicked}>
            CHECKOUT
          </button>
        </div>
      </div>
    )

  }
}

CartCheckout.PropTypes = {
  total: PropTypes.number.isRequired,
  onCheckoutClicked: PropTypes.func.isRequired
}