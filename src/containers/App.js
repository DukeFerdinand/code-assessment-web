import React from 'react'

// Custom component imports. Separating these from npm imports helps readability
import AppUpper from '../components/AppUpper'
import ProductsContainer from './ProductsContainer'
import CartContainer from './CartContainer'

// App level stylings
import '../styles/main.scss'

// Component Specific style
import '../styles/components/App.scss'

const App = () => (
  <div className="app-container">
    <AppUpper title="Acme Store" />
    <hr className="divider"/>
    <ProductsContainer />
    <CartContainer />
  </div>
)

export default App
