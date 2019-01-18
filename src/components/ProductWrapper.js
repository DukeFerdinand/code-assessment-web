import React from 'react'
import PropTypes from 'prop-types'
import Product from './Product'

import '../styles/components/Product.scss'

const ProductWrapper = ({ product, onAddToCartClicked }) => (
  <div className="product-wrapper">
    <div className="product-image"></div>
    <div className="product-info">
      <Product
        title={product.title}
        price={product.price}
        inventory={product.inventory} />
      <button
        onClick={onAddToCartClicked}
        disabled={product.inventory > 0 ? '' : 'disabled'}>
        {product.inventory > 0 ? 'Add to cart' : 'Sold Out'}
      </button>
    </div>
  </div>
)

ProductWrapper.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    inventory: PropTypes.number.isRequired
  }).isRequired,
  onAddToCartClicked: PropTypes.func.isRequired
}

export default ProductWrapper
