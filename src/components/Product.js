import React from 'react'
import PropTypes from 'prop-types'

const Product = ({ price, inventory, title }) => (
  <div className="product">
    <div className="product-info-upper">
      <div className="product-title">
        {title}
      </div>
      <div className="product-price">
        &#36;{price}
      </div>
    </div>
    <div className={`product-availability ${inventory ? '' : 'out-of-stock'}`}>
      {inventory ? `${inventory} REMAINING` : 'OUT OF STOCK'}
    </div>
  </div>
)

Product.propTypes = {
  price: PropTypes.number,
  inventory: PropTypes.number,
  title: PropTypes.string
}

export default Product
