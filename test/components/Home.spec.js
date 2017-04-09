import React from 'react';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store'

import ConnectedHome, { Home } from '../../src/components/Home';

function setupContainer() {
  const mockStore = configureMockStore();
  const store = mockStore({ user: {started: false}})
  const wrapper = shallow(<ConnectedHome store={store} />);

  return {
    wrapper,
    output: wrapper.renderer.getRenderOutput()
  }
}

function setupComponent(hasUserStarted = false) {
  const props = {
    hasUserStarted,
    userStart: jest.fn()
  }

  const wrapper = shallow(<Home {...props}/>)

  return {
    props,
    wrapper
  }
}

describe('Home component', () => {
  it('should render connected component', () => {
    const { wrapper, output } = setupContainer();

    expect(wrapper.exists()).toBe(true);
    expect(output.type).toBe(Home);
  })

  it('should be passed initial state and dispatch to props', () => {
    const { wrapper } = setupContainer();

    expect(wrapper.props().userStart).toBeTruthy();
    expect(wrapper.props().hasUserStarted).toBe(false);
  })

  it('should render Get Started button when hasUserStarted is false', () => {
    const { wrapper } = setupComponent();

    expect(wrapper.find('button.btn-start').text()).toBe('Get Started');
  })

  it('should render BankSelector when hasUserStarted is true', () => {
    const { wrapper } = setupComponent(true);

    console.log(wrapper.debug())

    expect(wrapper.find('Connect(BankSelector)')).toBeTruthy();
  })
})

