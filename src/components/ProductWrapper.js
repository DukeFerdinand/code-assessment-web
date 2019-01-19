import React from 'react'
import PropTypes from 'prop-types'
import Product from './Product'

import '../styles/components/Product.scss'

const ProductWrapper = ({ product, onAddToCartClicked }) => (
  <div className="product-wrapper">

    {/* This would ideally be replaced with a DB stored url */}
    <img className="product-image" src={`../assets/${product.title}.png`} alt="test"/>

    <div className="product-info-wrapper">
      <div className="product-info">
        <Product
          title={product.title}
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
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    inventory: PropTypes.number.isRequired
  }).isRequired,
  onAddToCartClicked: PropTypes.func.isRequired
}

export default ProductWrapper
