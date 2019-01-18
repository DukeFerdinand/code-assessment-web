import React from 'react'
import ProductsContainer from './ProductsContainer'
import CartContainer from './CartContainer'

// App level stylings
import '../styles/main.scss'

// Component Specific style
import '../styles/components/App.scss'

const App = () => (
  <div className="app-container">
    <h2 className="app-title">Acme Store</h2>
    <hr/>
    <ProductsContainer />
    <hr/>
    <CartContainer />
  </div>
)

export default App
