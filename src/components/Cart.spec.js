import React from 'react'
import { shallow } from 'enzyme'
import Cart from './Cart'
import Product from './Product'
import CartCheckout from './CartCheckout'

import { removeProductFromCart } from '../actions'

const setup = (total, products = []) => {
  const actions = {
    onCheckoutClicked: jest.fn()
  }

  const component = shallow(
    <Cart products={products} total={total} {...actions} />
  )

  return {
    component: component,
    actions: actions,
    CartCheckout: component.find(CartCheckout) || null,
    products: component.find(Product),
    emptyText: component.find('span.cart-empty-text'),
    p: component.find('p.checkout-total')
  }
}

describe('Cart component', () => {
  const product = [
    {
      id: 1,
      productTitle: 'Product 1',
      price: {
        value: 9.99,
        currency: 'USD'
      },
      quantity: 1
    }
  ]
  describe('when not given a total or products', () => {
    it('should display add some products message', () => {
      const { emptyText } = setup()
      expect(emptyText.text()).toMatch(/<ReactSVG \/>Please add some products to your cart./)
    })

    it('should not display CartCheckout component', () => {
      const { CartCheckout } = setup()
      expect(CartCheckout.length).toEqual(0)
    })
  });

  describe('when given product', () => {
    it('should render products', () => {
      const { products } = setup('9.99', product)
      const props = {
        inCart: true, // Because we're rendering the products 'inCart'
        title: product[0].productTitle,
        price: product[0].price,
        quantity: product[0].quantity,
        removeProductFromCart
      }
      // Visually equal props were not being considered equal because of the
      // Function prop, stringifying them works
      expect(JSON.stringify(products.at(0).props())).toEqual(JSON.stringify(props))
    })

    it('should render CartCheckout component', () => {
      const { CartCheckout } = setup('9.99', product)
      expect(CartCheckout.exists()).toEqual(true)
    })
  })

  it('should match snapshot', () => {
    const { component } = setup('9.99', product)
    expect(component).toMatchSnapshot()
  })
})
