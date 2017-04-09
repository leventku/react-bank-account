import React from 'react';
import { shallow } from 'enzyme';

import HeaderSection from '../../src/components/HeaderSection';

describe('HeaderSection', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow( <HeaderSection /> );
  });

  it('renders something', () => {
    expect(wrapper.find('div').hasClass('header-section')).toBe(true);
  });
});