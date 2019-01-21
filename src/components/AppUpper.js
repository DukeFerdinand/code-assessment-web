import React from 'react'
import ReactSVG from  'react-svg'

import CartIcon from '../assets/cart.svg'
import CartContainer from '../containers/CartContainer';

const AppUpper = ({ title }) => {
  return (
    <div className="app-title-wrapper">
      <h2 className="app-title">{title}</h2>
      <span className="cart-link">
        <ReactSVG
          wrapper="span"
          className="cart-icon"
          src={CartIcon}
        />
        <p>Your cart is empty</p>
      </span>
    </div>
  )
}

export default AppUpper