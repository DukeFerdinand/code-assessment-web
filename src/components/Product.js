import React from 'react'
import PropTypes from 'prop-types'
import ReactSVG from 'react-svg'

import images from '../assets/images'
import icons from '../assets/icons/index'

const Product = ({ price, inventory, title, quantity, inCart, removeProductFromCart }) => (
  <div className="product">
    {
      inCart ? (
        // Again as before, these images should be fed from a Database,
        // but that's outside the scope of this project
        <span className="product-image-wrapper">
          <img alt={title} className="product-image" src={images.thumbnails[`${title}Thumb`] || images.NotFound} />
        </span>
      ) : null
    }
    <div className="product-info-upper">
      <div className="product-title">
        {title}
      </div>
      <div className="product-price">
        &#36;{price}
      </div>
      { inCart ? <span onClick={() => removeProductFromCart()} className="remove-product-link">Remove</span> : null }
    </div>
    {
      !inCart ? (
        <div className={`product-availability ${inventory ? '' : 'out-of-stock'}`}>
          {inventory ? `${inventory} REMAINING` : 'OUT OF STOCK'}
        </div>
      ) : (
        <div className="product-quantity">
          <button
            className="minus-button"
            onClick={() => removeProductFromCart(1)}
            >
            <ReactSVG
              className="button-icon-wrapper"
              svgClassName="button-icon"
              src={icons.minus}
            />
          </button>
          <span className="product-quantity-input-wrapper">
            <input className="product-quantity-input" type="text" value={quantity}/>
          </span>
          <button className="plus-button">
            <ReactSVG
              className="button-icon-wrapper"
              svgClassName="button-icon"
              src={icons.plus}
            />
          </button>
        </div>
      )
    }
  </div>
)

Product.propTypes = {
  price: PropTypes.number,
  inventory: PropTypes.number,
  title: PropTypes.string,
  quantity: PropTypes.number,
  inCart: PropTypes.bool,
  removeProductFromCart: PropTypes.func
}

export default Product
