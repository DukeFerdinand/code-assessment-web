import React from 'react'
import ReactSVG from  'react-svg'
import { connect } from 'react-redux'

import { getTotal  } from '../reducers'
import { toggleModal } from '../actions'
import CartIcon from '../assets/cart.svg'

const AppUpper = ({ title, toggleModal }) => {
  return (
    <div className="app-title-wrapper">
      <h2 className="app-title">{title}</h2>
      <span
        className="cart-link"
        onClick={() => toggleModal()}
      >
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

const mapStateToProps = (state) => {
  return {
    total: getTotal(state)
  }
}

export default connect(mapStateToProps, { toggleModal })(AppUpper)