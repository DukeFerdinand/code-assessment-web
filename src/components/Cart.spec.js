import React from 'react'
import { shallow } from 'enzyme'
import Cart from './Cart'
import Product from './Product'
import CartCheckout from './CartCheckout'

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
    const product = [
      {
        id: 1,
        title: 'Product 1',
        price: 9.99,
        quantity: 1
      }
    ]

    it('should render products', () => {
      const { products } = setup('9.99', product)
      const props = {
        inCart: true, // Because we're rendering the products 'inCart'
        title: product[0].title,
        price: product[0].price,
        quantity: product[0].quantity
      }

      expect(products.at(0).props()).toEqual(props)
    })

    it('should render CartCheckout component', () => {
      const { CartCheckout } = setup('9.99', product)
      expect(CartCheckout.exists()).toEqual(true)
    })
  })

  it('should match snapshot', () => {
    const product = [
      {
        id: 1,
        title: 'Product 1',
        price: 9.99,
        quantity: 1
      }
    ]
    const { component } = setup('9.99', product)
    expect(component).toMatchSnapshot()
  })
})
