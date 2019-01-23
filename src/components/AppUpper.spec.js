import React from 'react'
import { shallow } from 'enzyme'
// importing non-redux-connected variant
import { AppUpper } from './AppUpper';

const setup = (title, total = 0.00, itemCount = 0) => {
  const actions = {
    toggleModal: jest.fn()
  }
  const component = shallow(
    <AppUpper title={title} total={total} itemCount={itemCount} {...actions} />
  )
  return {
    component,
    actions,
    cartLink: component.find('p.cart-link-text')
  }
}

describe('AppUpper component', () => {
  describe('when given title prop', () => {
    it('should display the app title', () => {
      const { component } = setup('App Title');
      expect(component.find('h2.app-title').text()).toBe('App Title');
    })
  });
  describe('when given a total and item count', () => {
    it('should render cart link with single item', () => {
      const { cartLink } = setup('App Title', 10.01, 1)
      expect(cartLink.text()).toBe('$10.01 (1 item)')
    })

    it('should render cart link with multiple items', () => {
      const { cartLink } = setup('App Title', 10.01, 3)
      expect(cartLink.text()).toBe('$10.01 (3 items)')
    })

    describe('when given a total with no decimals', () => {
      it('should render two decimals', () => {
        const { cartLink } = setup('App Title', 9, 1)
        expect(cartLink.text()).toBe('$9.00 (1 item)')
      })
    })
  });
  describe('when not given total or item count', () => {
    it('should render empty cart message', () => {
      const { cartLink } = setup('App Title')
      expect(cartLink.text()).toBe('Your cart is empty')
    })
  });
  it('should match the snapshot', () => {
    const { component } = setup('App Title')
    expect(component).toMatchSnapshot();
  })
});