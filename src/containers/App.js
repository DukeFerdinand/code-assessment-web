import React from 'react'
import ProductsContainer from './ProductsContainer'
import CartContainer from './CartContainer'

import '../styles/main.scss'

const App = () => (
  <div>
    <h2>Acme Store</h2>
    <hr/>
    <ProductsContainer />
    <hr/>
    <CartContainer />
  </div>
)

export default App
