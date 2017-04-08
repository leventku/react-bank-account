import React, { Component } from 'react';

import HeaderSection from './HeaderSection'
import Home from './Home'
import FooterSection from './FooterSection'

export default class App extends Component {
  render() {
    return (
      <div>
        <HeaderSection />
        <Home />
        <FooterSection />
      </div>
    );
  }
}
