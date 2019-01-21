import React from 'react'
import PropTypes from 'prop-types'
import Product from './Product'

import ReactSVG from 'react-svg'
import CloseIcon from '../assets/close.svg'
import CartIcon from '../assets/cart.svg'

import '../styles/components/Cart.scss'

const Cart  = ({ products, total, onCheckoutClicked }) => {
  const hasProducts = products.length > 0
  const nodes = hasProducts ? (
    products.map(product =>
      <Product
        title={product.title}
        price={product.price}
        quantity={product.quantity}
        key={product.id}
      />
    )
  ) : (
    <div className="cart-empty-message">
      <p className="cart-empty-text">
        <ReactSVG
          src={CartIcon}
          className="cart-empty-icon-wrapper"
          svgClassName="cart-empty-icon"
        />
        Please add some products to your cart
      </p>
    </div>
  )

  return (
    <div className="cart-container">
      <ReactSVG
        onClick={() => {
          alert('close modal')
        }}
        src={CloseIcon}
        className="cart-close-wrapper"
        svgClassName="cart-close-icon"
      />
      <h3 className="cart-title">Your Cart</h3>
      <hr className="divider" />
      <div className="cart-content">{nodes}</div>
      <p>Total: &#36;{total}</p>
      <button onClick={onCheckoutClicked}
        disabled={hasProducts ? '' : 'disabled'}>
        Checkout
      </button>
    </div>
  )
}

Cart.propTypes = {
  products: PropTypes.array,
  total: PropTypes.string,
  onCheckoutClicked: PropTypes.func
}

export default Cart
