import React from 'react';

import logo from '../../Assets/Logo_Nopa.svg';

export default () => {
  return (
    <div className="header-section">
      <img src={logo} alt="NOPA" />
      <button className="btn btn-login">Log in</button>
    </div>
  )
}