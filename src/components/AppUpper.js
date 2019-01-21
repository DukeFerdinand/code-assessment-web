import React from 'react'
import PropTypes from 'prop-types'
import ReactSVG from  'react-svg'
import { connect } from 'react-redux'

import { getTotal  } from '../reducers'
import { toggleModal } from '../actions'
import CartIcon from '../assets/cart.svg'

export const AppUpper = ({ title, toggleModal }) => {
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

AppUpper.PropTypes = {
  title: PropTypes.string.isRequired,
  toggleModal: PropTypes.func
}

const mapStateToProps = (state) => {
  return {
    total: getTotal(state)
  }
}

export default connect(mapStateToProps, { toggleModal })(AppUpper)