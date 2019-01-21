import React from 'react'
import PropTypes from 'prop-types'
import ReactSVG from  'react-svg'
import { connect } from 'react-redux'

import { getTotal, getItemCount } from '../reducers'
import { toggleModal } from '../actions'
import CartIcon from '../assets/cart.svg'

export const AppUpper = ({ title, toggleModal, total, itemCount }) => {
  const linkText = (total, itemCount) => {
    if (itemCount) {
      if (total.toString().indexOf('.') === -1) {
        total = `${total.toString()}.00`
      }
      // Borrowed this layout from NewEgg
      // Looks like [icon] $9.00 (1 items)
      return `$${total} (${itemCount} item${itemCount > 1 ? 's' : ''})`
    }
    return 'Your cart is empty'
  }
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
        <p className="cart-link-text" >{linkText(total, itemCount)}</p>
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
    total: getTotal(state),
    itemCount: getItemCount(state)
  }
}

export default connect(mapStateToProps, { toggleModal })(AppUpper)