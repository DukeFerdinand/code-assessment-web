import React from 'react'

import '../styles/components/CartCheckout.scss'

export default class CartCheckout extends React.Component {
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
    const { total } = this.props
    return (
      <div className="checkout-wrapper">
        <hr className="divider" />
        <div className="checkout-row">
          <p className="checkout-row-title">Subtotal</p>
          <p className="checkout-row-price">&#36;{total}</p>
        </div>
        <div className="checkout-row">
          <p className="checkout-row-title">Tax</p>
          <p className="checkout-row-price">&#36;{this.findTax(total).tax}</p>
        </div>
        <hr className="divider" />
        <div className="checkout-row">
          <p className="checkout-row-title">Total</p>
          <p className="checkout-row-price">&#36;{this.findTax(total).total}</p>
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