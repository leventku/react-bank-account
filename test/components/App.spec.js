import React from 'react';
import { shallow } from 'enzyme';

import App from '../../src/components/app';

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow( <App /> );
  });

  it('renders something', () => {
    expect(wrapper.find('div').hasClass('home-page')).toBe(true);
  });

  it('renders sub items', () => {
    const homePage = wrapper.find('div');

    expect(homePage.children().length).toEqual(3)
    expect(homePage.find('HeaderSection')).toBeTruthy();
    expect(homePage.find('Connect(Home)')).toBeTruthy();
    expect(homePage.find('FooterSection />')).toBeTruthy();
  })
});