import React from 'react'
import { shallow } from 'enzyme'
import Product from './Product'

const setup = props => {
  const component = shallow(
    <Product {...props} />
  )

  return {
    component: component,
    title: component.find('div.product-title'),
    price: component.find('div.product-price'),
    availability: component.find('div.product-availability')
  }
}
const price = { value: 9.99, currency: 'USD' }

describe('Product component', () => {
  it('should render title and price', () => {
    const { title, price } = setup({ title: 'Test Product', price: { value: 9.99, currency: 'USD' } })
    // expect(component.text()).toBe('Test Product - $9.99')
    expect(title.text()).toBe('Test Product')
    expect(price.text()).toBe('$9.99')
  })

  it('should match Product snapshot', () => {
    const { component } = setup({ title: 'Test Product', price: { value: 9.99, currency: 'USD' }, inventory: 6 })

    expect(component).toMatchSnapshot()
  })

  describe('when given inventory', () => {
    it('should render title, price, and inventory', () => {
      const { title, price, availability } = setup({ title: 'Test Product', price: { value: 9.99, currency: 'USD' }, inventory: 6 })
      expect(title.text()).toBe('Test Product')
      expect(price.text()).toBe('$9.99')
      expect(availability.text()).toBe('6 REMAINING')
    })
  })
  describe('when given no inventory', () => {
    it('should render out of stock message', () => {
      const { availability } = setup({ title: 'Test Product', price: { value: 9.99, currency: 'USD' }, inventory: 0})
      expect(availability.text()).toBe('OUT OF STOCK')
    })
  })
  describe('when in cart', () => {
    const { component } = setup({ title: 'Test Product', price: { value: 9.99, currency: 'USD' }, inventory: 6, inCart: true })
    describe('it should render "product-quantity" section', () => {
      const productQuantityWrapper = component.find('div.product-quantity')
      it('renders quantity section', () => {
        expect(productQuantityWrapper.exists()).toBe(true)
      })
      it('renders quantity increase and decrease buttons', () => {
        expect(productQuantityWrapper.find('button.minus-button').exists()).toBe(true)
        expect(productQuantityWrapper.find('button.plus-button').exists()).toBe(true)
      })
    })
  })
})
