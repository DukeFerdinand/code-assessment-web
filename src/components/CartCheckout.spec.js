import React from 'react'
import { shallow } from 'enzyme'
import CartCheckout from './CartCheckout'

const setup = total => {
  const actions = {
    onCheckoutClicked: jest.fn()
  }

  const component = shallow(<CartCheckout total={total} {...actions} />)

  return {
    component,
    subtotal: component.find('p.checkout-subtotal'),
    tax: component.find('p.checkout-tax'),
    total: component.find('p.checkout-total')
  }
}

describe('Cart Checkout component', () => {
  describe('when given total', () => {
    it('should render subtotal, tax, and total', () => {
      const { subtotal, tax, total } = setup(500.01)
      expect(subtotal.text()).toBe('$500.01');
      expect(tax.text()).toBe('$40.00') // component assumes .08 tax rate
      expect(total.text()).toBe('$540.01')
    })
  });
  it('should match snapshot', () => {
    const { component } = setup('$500.01')
    expect(component).toMatchSnapshot()
  })
});