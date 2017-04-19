import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import HeaderSection from './HeaderSection'
import Home from './Home'
import FooterSection from './FooterSection'
import BankSelector from './BankSelector'
import LoginForm from './LoginForm'

export default function() {
    return (
      <Router>
        <div className="home-page">
          <HeaderSection />
          <Route exact path="/" component={Home} />
          <Route path="/bank-selection" component={BankSelector} />
          <Route path="/login" component={LoginForm} />
          <FooterSection />
        </div>
      </Router>
    );
}

/* TODO:
 * Write tests
 * for path=/login: Add logic to check if bank has been selected. otherwise nav to /bank-selection
 * */