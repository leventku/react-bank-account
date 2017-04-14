import React, { Component } from 'react';

import HeaderSection from './HeaderSection'
import Home from './Home'
import FooterSection from './FooterSection'

export default function() {
    return (
      <div className="home-page">
        <HeaderSection />
        <Home />
        <FooterSection />
      </div>
    );
}
