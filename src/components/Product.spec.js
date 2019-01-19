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

describe('Product component', () => {
  it('should render title and price', () => {
    const { title, price } = setup({ title: 'Test Product', price: 9.99 })
    // expect(component.text()).toBe('Test Product - $9.99')
    expect(title.text()).toBe('Test Product')
    expect(price.text()).toBe('$9.99')
  })

  it('should match Product snapshot', () => {
    const { component } = setup({ title: 'Test Product', price: 9.99, inventory: 6 })

    expect(component).toMatchSnapshot()
  })

  describe('when given inventory', () => {
    it('should render title, price, and inventory', () => {
      const { title, price, availability } = setup({ title: 'Test Product', price: 9.99, inventory: 6 })
      expect(title.text()).toBe('Test Product')
      expect(price.text()).toBe('$9.99')
      expect(availability.text()).toBe('6 REMAINING')
    })
  })
  describe('when given no inventory', () => {
    it('should render out of stock message', () => {
      const { availability } = setup({ title: 'Test Product', price: 9.99, inventory: 0})
      expect(availability.text()).toBe('OUT OF STOCK')
    })
  })
})
