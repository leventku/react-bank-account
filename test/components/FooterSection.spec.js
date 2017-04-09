import React from 'react';
import { shallow } from 'enzyme';

import FooterSection from '../../src/components/FooterSection';

describe('FooterSection', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow( <FooterSection /> );
  });

  it('renders something', () => {
    expect(wrapper.find('div').hasClass('footer-section')).toBe(true);
  });
});