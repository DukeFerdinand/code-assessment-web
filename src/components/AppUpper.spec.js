import React from 'react'
import { shallow } from 'enzyme'
// importing non-redux-connected variant
import { AppUpper } from './AppUpper';

const setup = (title) => {
  const actions = {
    toggleModal: jest.fn()
  }
  const component = shallow(
    <AppUpper title={title} {...actions} />
  )
  return {
    component,
    actions
  }
}

describe('AppUpper component', () => {
  describe('when given title prop', () => {
    it('should display the app title', () => {
      const { component } = setup('App Title');
      expect(component.find('h2.app-title').text()).toBe('App Title');
    })
  });
  it('should match the snapshot', () => {
    const { component } = setup('App Title')
    expect(component).toMatchSnapshot();
  })
});