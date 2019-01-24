import React from 'react'
import PropTypes from 'prop-types'
import Product from './Product'

// Images
import Chronograph from '../assets/Chronograph.png'
import Quartz from '../assets/Quartz.png'
import Weekender from '../assets/Weekender.png'
import NotFound from '../assets/NotFound.jpg'

// Styles
import '../styles/components/Product.scss'

// Fake database
const images = { Chronograph, Quartz, Weekender, NotFound }

const ProductWrapper = ({ product, onAddToCartClicked }) => (
  <div className="product-wrapper">

    {/* This would ideally be replaced with a DB stored url */}
    <img className="product-image" src={images[product.productTitle] || images.NotFound} alt="test"/>

    <div className="product-info-wrapper">
      <div className="product-info">
        <Product
          title={product.productTitle}
          price={product.price}
          inventory={product.inventory} />
        <button
          className="product-action"
          onClick={onAddToCartClicked}
          disabled={product.inventory > 0 ? '' : 'disabled'}>
          {product.inventory > 0 ? 'ADD TO CART' : 'SOLD OUT'}
        </button>
      </div>
    </div>
  </div>
)

ProductWrapper.propTypes = {
  product: PropTypes.shape({
    productTitle: PropTypes.string.isRequired,
    price: PropTypes.shape({
      value: PropTypes.number,
      currency: PropTypes.string
    }),
    inventory: PropTypes.number.isRequired
  }).isRequired,
  onAddToCartClicked: PropTypes.func.isRequired
}

export default ProductWrapper
