import React from 'react';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';

import ConnectedBanksList, { BanksList } from 'components/BanksList';

function setupContainer() {
  const mockStore = configureMockStore();
  const store = mockStore({ banks: { all: [] } });
  const wrapper = shallow(<ConnectedBanksList store={store} />);

  return {
    wrapper,
    output: wrapper.renderer.getRenderOutput()
  };
}

function setupComponent() {
  const props = {
    onBankActivated: jest.fn(),
    fetchBanks: jest.fn(),
    banks: [
      { id: 0, name: 'bank-1', logo: 'logo-1', orient: 'v'},
      { id: 1, name: 'bank-2', logo: 'logo-2', orient: 'h'},
    ]
  };
  const wrapper = shallow(<BanksList {...props} />);

  return {
    props,
    wrapper
  }
}

describe('BanksList component', () => {
  it('should render connected component', () => {
    const { wrapper, output } = setupContainer();

    expect(wrapper.exists()).toBe(true);
    expect(output.type).toBe(BanksList);
  });

  it('should be passed initial state and dispatch to props', () => {
    const { wrapper } = setupContainer();
    
    expect(wrapper.props().banks).toBeTruthy();
    expect(wrapper.props().fetchBanks).toBeTruthy();
  });

  it('should render items with proper attributes', () => {
    const { wrapper } = setupComponent();
    const bankItems = wrapper.find('.bank-item');
    const firstItemImgProps = bankItems.first().find('img').props();

    expect(bankItems.length).toBe(2);
    expect(firstItemImgProps).toHaveProperty('src', 'logo-1');
    expect(firstItemImgProps).toHaveProperty('alt', 'bank-1');
    expect(firstItemImgProps).toHaveProperty('className', 'v-img');
    expect(firstItemImgProps).toHaveProperty('data-id', 0);
  });

  it('should call onBankActivated when clicked on a bank icon', () => {
    const { props, wrapper } = setupComponent();
    const id = 1;
    
    wrapper.find('.banks-list').simulate('click', {target: {dataset: { id }}});

    expect(props.onBankActivated).toHaveBeenCalledWith(id);
  })
});
